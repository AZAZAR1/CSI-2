import Link from "next/link";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

export default function EventRegistrationPage() {
  return (
    <Layout>
      <Seo
        title="ICSI at Cigar Culture Summit Africa 2026 | Johannesburg"
        path="/event-africa"
      />

      <style>{`
        *,
        *::before,
        *::after { box-sizing: border-box; }

        .event-page {
          --ivory: #faf4e8;
          --ink: #16161f;
          --crimson: #c0242f;
          --bordeaux: #601818;
          --gold: #c8a24a;
          --lightGold: #e4cb8e;
          min-height: 100vh;
          background: var(--ivory);
          color: var(--ink);
        }
        .event-wide-container {
          width: min(1180px, calc(100% - 48px));
          margin: 0 auto;
          padding: 54px 0 96px;
        }
        .event-section-kicker {
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
          text-transform: uppercase;
          font-weight: 600;
          letter-spacing: 0.18em;
          color: var(--crimson);
          font-size: 0.66rem;
          line-height: 1.35;
        }
        .africa-flyer-section {
          margin-left: calc(50% - 50vw);
          margin-right: calc(50% - 50vw);
          padding: 48px max(24px, calc((100vw - 1180px) / 2)) 64px;
          background: #16161f;
          border-bottom: 1px solid rgba(250,244,232,0.12);
        }
        .africa-flyer-wrap {
          display: flex;
          justify-content: center;
        }
        .africa-flyer-image {
          display: block;
          width: min(100%, 860px);
          height: auto;
          box-shadow: 0 26px 80px rgba(0,0,0,0.34);
        }
        .event-routes {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          padding-top: 86px;
        }
        .event-route {
          min-height: 390px;
          padding: 56px 52px 50px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          border: 1px solid rgba(22,22,31,0.14);
        }
        .event-route-light { background: var(--ivory); }
        .event-route-dark {
          background: var(--bordeaux);
          color: #fff;
          border-color: var(--bordeaux);
        }
        .event-route-dark .event-section-kicker { color: var(--lightGold); }
        .event-route h2 {
          margin: 28px 0 18px;
          max-width: 15ch;
          font-family: "Playfair Display", Georgia, serif;
          font-weight: 400;
          letter-spacing: -0.05em;
          font-size: clamp(2rem, 3vw, 3.15rem);
          line-height: 1.02;
        }
        .event-route p {
          margin: 0;
          max-width: 46ch;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
          font-weight: 300;
          font-size: 0.95rem;
          line-height: 1.68;
          opacity: 0.75;
        }
        .event-route-link {
          margin-top: auto;
          padding-top: 36px;
          color: inherit;
          text-decoration: none;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
          font-size: 0.73rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          border-bottom: 1px solid currentColor;
        }
        .event-route-dark .event-route-link { color: var(--lightGold); }
        .event-footer {
          text-align: center;
          margin-top: 38px;
          color: rgba(22,22,31,0.48);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
          font-size: 0.72rem;
          line-height: 1.6;
        }
        .africa-hero {
          margin-left: calc(50% - 50vw);
          margin-right: calc(50% - 50vw);
          padding: 78px max(24px, calc((100vw - 1180px) / 2)) 86px;
          background: #16161f;
          color: #faf4e8;
        }
        .africa-hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.2fr) minmax(320px, 0.62fr);
          gap: 86px;
          align-items: center;
        }
        .africa-kicker,
        .africa-session-kicker {
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: 0.2em;
        }
        .africa-kicker {
          margin-bottom: 30px;
          color: #c8a24a;
          font-size: 0.7rem;
        }
        .africa-title {
          margin: 0;
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(4.2rem, 6.8vw, 7rem);
          line-height: 0.95;
          letter-spacing: -0.055em;
          font-weight: 400;
        }
        .africa-rule {
          width: 54px;
          height: 2px;
          margin: 30px 0 24px;
          background: #c8a24a;
        }
        .africa-date {
          margin-bottom: 22px;
          color: #d6c28c;
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(1.35rem, 2vw, 1.9rem);
          line-height: 1.25;
        }
        .africa-copy {
          max-width: 63ch;
          margin: 0;
          color: rgba(240,236,230,0.78);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
          font-size: 1rem;
          line-height: 1.72;
          font-weight: 300;
        }
        .africa-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 34px;
        }
        .africa-certification-button {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
          width: 100%;
          max-width: 620px;
          min-height: 100px;
          padding: 24px 36px;
          background: #faf4e8;
          color: #16161f;
          text-decoration: none;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
          font-size: clamp(0.85rem, 1.5vw, 1.3rem);
          font-weight: 600;
          letter-spacing: 0.16em;
          transition: background 0.2s ease;
        }
        .africa-certification-button:hover {
          background: #e4cb8e;
        }
        .africa-certification-arrow {
          font-size: 2.5rem;
          font-weight: 300;
          letter-spacing: 0;
          line-height: 1;
        }
        .africa-button {
          min-height: 54px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0 24px;
          text-decoration: none;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
          font-size: 0.76rem;
          line-height: 1;
          font-weight: 700;
          letter-spacing: 0.02em;
          transition: background 160ms ease, color 160ms ease, border-color 160ms ease;
        }
        .africa-button-secondary {
          background: transparent;
          border: 1px solid rgba(250,244,232,0.42);
          color: #faf4e8;
        }
        .africa-button-secondary:hover {
          border-color: #d6c28c;
          color: #d6c28c;
        }
        .africa-summit-visual {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .africa-summit-image {
          display: block;
          width: 100%;
          max-width: 430px;
          height: auto;
          object-fit: contain;
        }
        .africa-session {
          margin-left: calc(50% - 50vw);
          margin-right: calc(50% - 50vw);
          padding: 102px max(24px, calc((100vw - 1180px) / 2)) 108px;
          background: #faf4e8;
          color: #16161f;
          border-bottom: 1px solid rgba(22,22,31,0.14);
          scroll-margin-top: 100px;
        }
        .africa-session-inner {
          max-width: 980px;
          margin: 0 auto;
        }
        .africa-session-kicker {
          margin-bottom: 28px;
          color: #c0242f;
          font-size: 0.68rem;
        }
        .africa-session-title {
          margin: 0;
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(3.7rem, 5.8vw, 5.7rem);
          line-height: 0.95;
          letter-spacing: -0.055em;
          font-weight: 400;
        }
        .africa-session-title-line {
          display: block;
          white-space: nowrap;
        }
        .africa-session-subtitle {
          margin-top: 22px;
          color: #601818;
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(1.9rem, 3vw, 3rem);
          line-height: 1.08;
        }
        .africa-session-rule {
          width: 64px;
          height: 2px;
          margin: 28px 0 24px;
          background: #c8a24a;
        }
        .africa-session-details {
          margin-bottom: 22px;
          color: #16161f;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
          font-size: 0.98rem;
          line-height: 1.5;
          font-weight: 700;
        }
        .africa-session-text {
          max-width: 62ch;
          margin: 0;
          color: rgba(22,22,31,0.76);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
          font-size: 1.02rem;
          line-height: 1.72;
          font-weight: 300;
        }
        .africa-session-list {
          margin: 28px 0 0;
          padding: 0;
          list-style: none;
          display: grid;
          gap: 16px;
        }
        .africa-session-list li {
          position: relative;
          padding-left: 22px;
          color: #16161f;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
          font-size: 1rem;
          line-height: 1.5;
          font-weight: 400;
        }
        .africa-session-list li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0.62em;
          width: 7px;
          height: 7px;
          background: #c8a24a;
        }
        .africa-session-note {
          margin: 34px 0 0;
          color: #601818;
          font-family: "Playfair Display", Georgia, serif;
          font-size: 1.55rem;
          line-height: 1.2;
          font-style: italic;
        }
        @media (max-width: 900px) {
          .event-routes, .africa-hero-grid { grid-template-columns: 1fr; }
          .africa-hero-grid { gap: 52px; }
          .africa-summit-image { max-width: 380px; }
          .africa-session-inner { margin: 0; }
        }
        @media (max-width: 620px) {
          .africa-hero { padding-top: 52px; padding-bottom: 58px; }
          .africa-title { font-size: clamp(3.2rem, 15vw, 4.65rem); }
          .africa-actions { flex-direction: column; }
          .africa-certification-button {
            min-height: 78px;
            padding: 20px 22px;
            font-size: 0.85rem;
            letter-spacing: 0.1em;
          }
          .africa-certification-arrow { font-size: 2rem; }
          .africa-button { width: 100%; }
          .africa-summit-image { max-width: 320px; }
          .africa-session { padding-top: 68px; padding-bottom: 74px; }
          .africa-flyer-section { padding-top: 26px; padding-bottom: 34px; }
          .africa-session-title { font-size: clamp(2.6rem, 11vw, 3.7rem); }
          .africa-session-title-line { white-space: normal; }
          .africa-session-subtitle { font-size: clamp(1.7rem, 8vw, 2.35rem); }
          .event-wide-container {
            width: min(100% - 32px, 1180px);
            padding-top: 32px;
            padding-bottom: 70px;
          }
          .event-route { min-height: 330px; padding: 42px 28px 38px; }
          .event-routes { padding-top: 62px; }
        }
      `}</style>

      <main className="event-page">
        <div className="event-wide-container">
          <header className="africa-hero africa-hero-compact">
            <div className="africa-hero-grid">
              <div className="africa-hero-main">
                <div className="africa-kicker">
                  Cigar Culture Summit Africa 2026 · Johannesburg
                </div>
                <h1 className="africa-title">
                  Meet ICSI in<br />
                  Johannesburg
                </h1>
                <div className="africa-rule" aria-hidden="true" />
                <div className="africa-date">
                  Emperor Casino · 23–25 October 2026
                </div>
                <p className="africa-copy">
                  Meet the International Cigar Sommelier Institute at the first
                  Cigar Culture Summit Africa and discover how ICSI brings together
                  professional education, applied science and digital intelligence
                  for the modern cigar hospitality environment.
                </p>
                <div className="africa-actions">
                  <Link href="/courses" className="africa-certification-button">
                    <span>EXPLORE CERTIFICATIONS</span>
                    <span aria-hidden="true" className="africa-certification-arrow">→</span>
                  </Link>
                  <a href="#icsi-session" className="africa-button africa-button-secondary">
                    See the ICSI session
                  </a>
                </div>
              </div>
              <div className="africa-summit-visual">
                <img
                  src="/img/cigar-culture-summit-africa.png"
                  alt="Cigar Culture Summit Africa 2026 powered by InterTabac"
                  className="africa-summit-image"
                />
              </div>
            </div>
          </header>

          <section className="africa-session" id="icsi-session">
            <div className="africa-session-inner">
              <div className="africa-session-kicker">
                Live Session · Stream B, Connoisseur's Deep Dive
              </div>
              <h2 className="africa-session-title">
                <span className="africa-session-title-line">
                  Storage, Collection &
                </span>
                <span className="africa-session-title-line">
                  Investment
                </span>
              </h2>
              <div className="africa-session-subtitle">
                How to Care for Your Cigars
              </div>
              <div className="africa-session-rule" aria-hidden="true" />
              <div className="africa-session-details">
                Workshop Room 1 · 13:45 · Saturday 24 October
              </div>
              <p className="africa-session-text">
                Join Anthony Azar, Founder of ICSI, for a working session on what
                keeps a collection in condition over time, and how the Cigar
                Peak-Flavor System® turns storage decisions into something you can
                repeat.
              </p>
              <ul className="africa-session-list">
                <li>Humidity, temperature and storage conditions</li>
                <li>Humidor selection and maintenance</li>
                <li>Open to every level of experience</li>
              </ul>
              <p className="africa-session-note">
                Measured storage. Consistent condition.
              </p>
            </div>
          </section>

          <section className="africa-flyer-section" aria-label="ICSI at Cigar Culture Summit Africa 2026">
            <div className="africa-flyer-wrap">
              <img
                src="/img/Culture-summit-africa-flyer.png"
                alt="ICSI Storage, Collection and Investment session at Cigar Culture Summit Africa 2026"
                className="africa-flyer-image"
                loading="lazy"
              />
            </div>
          </section>

          <section className="event-routes">
            <article className="event-route event-route-light">
              <div className="event-section-kicker">
                Professional Education
              </div>
              <h2>Interested in professional certification?</h2>
              <p>
                Explore ICSI's structured four-level education pathway for
                cigar professionals and serious enthusiasts.
              </p>
              <Link href="/courses" className="event-route-link">
                Explore ICSI Education <span>→</span>
              </Link>
            </article>

            <article className="event-route event-route-dark">
              <div className="event-section-kicker">
                Hospitality Solutions
              </div>
              <h2>Operate a lounge or hospitality venue?</h2>
              <p>
                Discover how ICSI implements CPFS through technical assessment,
                team training, storage and serving standards, and PredictorPro.
              </p>
              <Link href="/cpfs-implementation" className="event-route-link">
                Explore CPFS <span>→</span>
              </Link>
            </article>
          </section>

          <div className="event-footer">
            PredictorPro · Cigar Peak-Flavor System®
            <br />
            International Cigar Sommelier Institute
          </div>
        </div>
      </main>
    </Layout>
  );
}
