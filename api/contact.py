import os
import json
import re
import smtplib
from email.message import EmailMessage
from urllib.parse import parse_qs

ADMIN_TO = os.getenv("CSI_ADMIN_TO", "CDCAdmin@cdc-advisory.com")
CONFIRM_FROM = os.getenv("CSI_FROM_EMAIL", "")
SMTP_HOST = os.getenv("CSI_SMTP_HOST", "")
SMTP_PORT = int(os.getenv("CSI_SMTP_PORT", "587"))
SMTP_USER = os.getenv("CSI_SMTP_USER", "")
SMTP_PASS = os.getenv("CSI_SMTP_PASS", "")
SMTP_TLS = os.getenv("CSI_SMTP_TLS", "true").lower() in ("1","true","yes","y")

def _resp(status, payload):
    return {"statusCode": status, "headers": {"Content-Type": "application/json"}, "body": json.dumps(payload)}

def _sanitize(s: str, max_len: int = 2000) -> str:
    if s is None:
        return ""
    s = s.strip()
    s = re.sub(r"[\x00-\x08\x0b\x0c\x0e-\x1f]", "", s)
    return s[:max_len]

def _send_email(to_addr: str, subject: str, body: str, reply_to: str = "") -> bool:
    if not (SMTP_HOST and SMTP_USER and SMTP_PASS and CONFIRM_FROM):
        print("Email not configured. Set CSI_SMTP_* and CSI_FROM_EMAIL env vars.")
        print("TO:", to_addr)
        print("SUBJECT:", subject)
        print(body)
        return False

    msg = EmailMessage()
    msg["From"] = CONFIRM_FROM
    msg["To"] = to_addr
    msg["Subject"] = subject
    if reply_to:
        msg["Reply-To"] = reply_to
    msg.set_content(body)

    with smtplib.SMTP(SMTP_HOST, SMTP_PORT, timeout=20) as s:
        if SMTP_TLS:
            s.starttls()
        s.login(SMTP_USER, SMTP_PASS)
        s.send_message(msg)
    return True

def handler(event, context):
    method = (event.get("httpMethod") or "").upper()
    if method != "POST":
        return _resp(405, {"ok": False, "error": "Method not allowed"})

    headers = event.get("headers") or {}
    ctype = headers.get("content-type") or headers.get("Content-Type") or ""
    body = event.get("body") or ""

    try:
        if "application/json" in ctype:
            data = json.loads(body) if body else {}
        else:
            qs = parse_qs(body)
            data = {k: (v[0] if isinstance(v, list) and v else "") for k, v in qs.items()}
    except Exception:
        return _resp(400, {"ok": False, "error": "Invalid request body"})

    first = _sanitize(data.get("first_name"))
    last = _sanitize(data.get("last_name"))
    city = _sanitize(data.get("city"))
    email = _sanitize(data.get("email"), 254)
    subj = _sanitize(data.get("subject"), 180)
    comments = _sanitize(data.get("comments"), 4000)

    if not all([first, last, city, email, subj, comments]):
        return _resp(400, {"ok": False, "error": "Missing required fields"})
    if not re.match(r"^[^@\s]+@[^@\s]+\.[^@\s]+$", email):
        return _resp(400, {"ok": False, "error": "Invalid email address"})

    admin_subject = f"[CSI] {subj}"
    admin_body = (
        "New CSI website submission\n\n"
        f"Name: {first} {last}\n"
        f"City: {city}\n"
        f"Email: {email}\n"
        f"Subject: {subj}\n\n"
        f"Comments:\n{comments}\n"
    )
    confirm_subject = "CSI — We received your message"
    confirm_body = (
        f"Hello {first},\n\n"
        "Thank you for contacting the Cigar Sommelier Institute (CSI). "
        "We have received your message and will respond shortly.\n\n"
        f"Subject: {subj}\n\n"
        "— CSI Administration\n"
        "cigarsommelierinstitute.com\n"
    )

    _send_email(ADMIN_TO, admin_subject, admin_body, reply_to=email)
    _send_email(email, confirm_subject, confirm_body, reply_to=ADMIN_TO)

    return _resp(200, {"ok": True, "message": "Submitted"})
