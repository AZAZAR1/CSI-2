import re
from typing import Dict, List, Optional, Tuple
from urllib.parse import quote_plus

import requests


BRAND_OFFICIAL_SITES = {
    "la aurora": "laaurora.com",
    "montecristo": "habanos.com",
    "la flor dominicana": "laflordominicana.com",
    "oliva": "olivacigar.com",
    "davidoff": "davidoff.com",
}


USER_AGENT = (
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
    "AppleWebKit/537.36 (KHTML, like Gecko) "
    "Chrome/124.0 Safari/537.36"
)


def _norm(text: str) -> str:
    return " ".join(str(text or "").strip().lower().split())


def _clean_text(html: str) -> str:
    # basic text cleanup without external parser dependencies
    text = re.sub(r"(?is)<script.*?>.*?</script>", " ", html)
    text = re.sub(r"(?is)<style.*?>.*?</style>", " ", text)
    text = re.sub(r"(?s)<[^>]+>", " ", text)
    text = re.sub(r"&nbsp;?", " ", text)
    text = re.sub(r"&amp;", "&", text)
    text = re.sub(r"\s+", " ", text)
    return text.strip()


def _http_get(url: str) -> str:
    r = requests.get(
        url,
        headers={"User-Agent": USER_AGENT},
        timeout=20,
    )
    r.raise_for_status()
    return r.text


def _brand_domain(brand: str) -> Optional[str]:
    return BRAND_OFFICIAL_SITES.get(_norm(brand))


def _search_official_site(brand: str, line: str, domain: str) -> List[str]:
    """
    Tier 1 only:
    perform a domain-restricted search query and collect candidate result URLs.

    This MVP uses Bing HTML results because many official cigar sites
    have weak internal search. If you prefer, we can later swap this
    for a direct site-search adapter per brand.
    """
    query = quote_plus(f'site:{domain} "{brand}" "{line}"')
    url = f"https://www.bing.com/search?q={query}"
    html = _http_get(url)

    urls = re.findall(r'<a href="(https?://[^"]+)"', html)
    cleaned = []
    for u in urls:
        if domain in u and u not in cleaned:
            cleaned.append(u)
    return cleaned[:5]


def _extract_first(patterns: List[str], text: str) -> Optional[str]:
    for p in patterns:
        m = re.search(p, text, re.I)
        if m:
            return m.group(1).strip(" .,:;|-")
    return None


def _extract_list_after_label(text: str, labels: List[str]) -> List[str]:
    for label in labels:
        m = re.search(rf"{label}\s*[:\-]\s*([^.]+)", text, re.I)
        if m:
            raw = m.group(1)
            parts = re.split(r",|/| and ", raw, flags=re.I)
            vals = [p.strip(" .,:;|-") for p in parts if p.strip(" .,:;|-")]
            if vals:
                return vals
    return []


def _normalize_origin(value: Optional[str]) -> str:
    v = _norm(value)
    mapping = {
        "dominican": "Dominican Republic",
        "dominican republic": "Dominican Republic",
        "dr": "Dominican Republic",
        "nicaragua": "Nicaragua",
        "nicaraguan": "Nicaragua",
        "cuba": "Cuba",
        "honduras": "Honduras",
        "honduran": "Honduras",
        "mexico": "Mexico",
        "mexican": "Mexico",
        "ecuador": "Ecuador",
        "ecuadorian": "Ecuador",
        "brazil": "Brazil",
        "brazilian": "Brazil",
        "peru": "Peru",
        "united states": "United States",
        "usa": "United States",
        "jamaica": "Jamaica",
        "philippines": "Philippines",
        "costa rica": "Costa Rica",
        "panama": "Panama",
    }
    return mapping.get(v, "")


def _normalize_wrapper(value: Optional[str]) -> str:
    v = _norm(value)
    if not v:
        return ""
    if "cameroon" in v:
        return "Cameroon"
    if "nicaraguan habano" in v:
        return "Nicaraguan Habano"
    if "ecuadorian habano" in v:
        return "Ecuadorian Habano"
    if "connecticut broadleaf" in v:
        return "Connecticut Broadleaf"
    if "connecticut shade" in v:
        return "Connecticut Shade"
    if "broadleaf" in v:
        return "Broadleaf"
    if "san andres" in v or "san andrés" in v:
        return "San Andrés"
    if "sumatra" in v and "ecuador" in v:
        return "Ecuadorian Sumatra"
    if "sumatra" in v:
        return "Sumatra"
    if "ecuadorian connecticut" in v:
        return "Ecuadorian Connecticut"
    if v == "cuban" or "cuba" in v:
        return "Cuban"
    if "habano 2000" in v:
        return "Habano 2000"
    if "habano" in v:
        return "Habano"
    if "corojo 99" in v:
        return "Corojo 99"
    if "corojo" in v:
        return "Corojo"
    if "criollo 98" in v:
        return "Criollo 98"
    if "criollo" in v:
        return "Criollo"
    if "maduro" in v:
        return "Maduro"
    if "oscuro" in v:
        return "Oscuro"
    if "rosado" in v:
        return "Rosado"
    if "colorado" in v:
        return "Colorado"
    if "mexican" in v:
        return "Mexican"
    if "pennsylvania broadleaf" in v:
        return "Pennsylvania Broadleaf"
    return ""


def _normalize_binder(value: Optional[str]) -> str:
    v = _norm(value)
    if not v:
        return ""
    if "cuban" in v:
        return "Cuban"
    if "dominican" in v:
        return "Dominican"
    if "nicaraguan" in v:
        return "Nicaraguan"
    if "honduran" in v:
        return "Honduran"
    if "mexican" in v:
        return "Mexican"
    if "san andres" in v or "san andrés" in v:
        return "San Andrés"
    if "connecticut" in v:
        return "Connecticut"
    if "sumatra" in v:
        return "Sumatra"
    if "ecuadorian" in v:
        return "Ecuadorian"
    if "broadleaf" in v:
        return "Broadleaf"
    if "criollo" in v:
        return "Criollo"
    if "corojo" in v:
        return "Corojo"
    return ""


def _normalize_filler_list(values: List[str]) -> List[str]:
    out = []
    for value in values:
        v = _norm(value)
        mapped = ""
        if "dominican" in v:
            mapped = "Dominican Republic"
        elif "nicaragua" in v:
            mapped = "Nicaragua"
        elif "honduras" in v:
            mapped = "Honduras"
        elif "mexico" in v:
            mapped = "Mexico"
        elif "ecuador" in v:
            mapped = "Ecuador"
        elif "brazil" in v:
            mapped = "Brazil"
        elif "peru" in v:
            mapped = "Peru"
        elif "cuba" in v:
            mapped = "Cuba"
        elif "piloto cubano" in v:
            mapped = "Piloto Cubano"
        elif "olor dominicano" in v:
            mapped = "Olor Dominicano"
        elif "corojo" in v:
            mapped = "Corojo"
        elif "criollo" in v:
            mapped = "Criollo"
        elif "ligero" in v:
            mapped = "Ligero"
        elif "seco" in v:
            mapped = "Seco"
        elif "volado" in v:
            mapped = "Volado"
        elif "medio tiempo" in v:
            mapped = "Medio Tiempo"

        if mapped and mapped not in out:
            out.append(mapped)
    return out[:3]


def _normalize_vitola(value: Optional[str]) -> str:
    v = _norm(value)
    if not v:
        return ""
    mapping = {
        "lancero": "Lancero",
        "panetela": "Panetela",
        "lonsdale": "Lonsdale",
        "corona": "Corona",
        "corona gorda": "Corona Gorda",
        "petit corona": "Petit Corona",
        "robusto": "Robusto",
        "double robusto": "Double Robusto",
        "toro": "Toro",
        "gordo": "Gordo",
        "churchill": "Churchill",
        "double corona": "Double Corona",
        "belicoso": "Belicoso",
        "piramide": "Piramide",
        "pyramid": "Piramide",
        "torpedo": "Torpedo",
        "perfecto": "Perfecto",
        "salomon": "Salomon",
        "petit robusto": "Petit Robusto",
        "petit toro": "Petit Toro",
        "grand toro": "Grand Toro",
        "wide churchill": "Wide Churchill",
        "short churchill": "Short Churchill",
    }
    return mapping.get(v, "")


def _extract_structured_fields(text: str) -> Dict[str, object]:
    origin = _extract_first(
        [
            r"(?:country of origin|origin|made in)\s*[:\-]\s*([A-Za-z ]+)",
        ],
        text,
    )

    wrapper = _extract_first(
        [
            r"wrapper\s*[:\-]\s*([A-Za-z0-9 &éÉ\-\']+)",
        ],
        text,
    )

    binder = _extract_first(
        [
            r"binder\s*[:\-]\s*([A-Za-z0-9 &éÉ\-\']+)",
        ],
        text,
    )

    vitola = _extract_first(
        [
            r"(?:vitola|shape|size)\s*[:\-]\s*([A-Za-z0-9 .#\-]+)",
        ],
        text,
    )

    filler = _extract_list_after_label(
        text,
        ["filler", "fillers"],
    )

    return {
        "origin": _normalize_origin(origin),
        "wrapper": _normalize_wrapper(wrapper),
        "binder": _normalize_binder(binder),
        "filler": _normalize_filler_list(filler),
        "vitola": _normalize_vitola(vitola),
    }


def _score_match(brand: str, line: str, text: str) -> int:
    score = 0
    t = _norm(text)
    if _norm(brand) in t:
        score += 2
    if _norm(line) in t:
        score += 4
    return score


def lookup_official_blend(brand: str, line: str) -> Tuple[bool, Dict]:
    domain = _brand_domain(brand)
    if not domain:
        return False, {"ok": False, "error": "Brand is not yet mapped to an official Tier 1 source."}

    try:
        candidates = _search_official_site(brand, line, domain)
    except Exception as e:
        return False, {"ok": False, "error": f"Official source search failed: {str(e)}"}

    best = None
    best_score = -1
    best_url = ""

    for url in candidates:
        try:
            html = _http_get(url)
            text = _clean_text(html)
            score = _score_match(brand, line, text)
            fields = _extract_structured_fields(text)

            non_empty = sum(
                1 for v in fields.values() if (isinstance(v, list) and v) or (isinstance(v, str) and v)
            )
            score += non_empty

            if score > best_score:
                best_score = score
                best = fields
                best_url = url
        except Exception:
            continue

    if not best or best_score <= 0:
        return False, {"ok": False, "error": "No reliable official-source match found."}

    match = {
        "brand": brand.strip(),
        "line": line.strip(),
        "origin": best.get("origin", ""),
        "factory": "",
        "wrapper": best.get("wrapper", ""),
        "wrapper_process": "",
        "wrapper_thickness": "medium",
        "wrapper_oiliness": "medium",
        "binder": best.get("binder", ""),
        "filler": best.get("filler", []),
        "ligero": "",
        "special_tobacco_flags": [],
        "vitola": best.get("vitola", ""),
        "bunch_density": "medium",
    }

    return True, {
        "ok": True,
        "match": match,
        "source": {
            "label": f"Official manufacturer site ({domain})",
            "url": best_url,
            "confidence": "medium",
        },
    }