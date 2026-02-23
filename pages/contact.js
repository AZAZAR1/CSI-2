import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { COPY } from "../components/copy";
import { useEffect, useState } from "react";

export default function Contact() {
  const router = useRouter();
  const lang = router.locale || "en";
  const c = COPY[lang];

  const [subject, setSubject] = useState("");
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    if (router.query.subject) setSubject(String(router.query.subject));
  }, [router.query.subject]);

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (res.ok && data.ok) {
        setStatus("sent");
        e.currentTarget.reset();
        setSubject("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <Layout>
      <div className="section">
        <div className="container">
          <h2>{c.contact_title}</h2>
          <p className="small">{c.contact_lead}</p>
          <div className="notice" style={{ marginTop: 12 }}>{c.notice}</div>

          {status === "sent" && (
            <div className="notice" style={{ marginTop: 12, borderColor: "rgba(17,17,20,.14)", background: "rgba(17,17,20,.02)" }}>
              Message received. Thank you — CSI will respond shortly.
            </div>
          )}

          {status === "error" && (
            <div className="notice" style={{ marginTop: 12, borderColor: "rgba(180,0,0,.25)", background: "rgba(180,0,0,.05)" }}>
              Something went wrong. Please try again, or email CSI directly.
            </div>
          )}

          <form className="form" onSubmit={onSubmit}>
            <div className="row2">
              <div><label>First name</label><input name="first_name" required /></div>
              <div><label>Last name</label><input name="last_name" required /></div>
            </div>

            <div className="row2">
              <div><label>City</label><input name="city" required /></div>
              <div><label>Email</label><input name="email" type="email" required /></div>
            </div>

            <div>
              <label>Subject</label>
              <input
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div>

            <div><label>Comments</label><textarea name="comments" required /></div>

            <button className="btn primary" type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}