import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const COLORS = {
  bg: "#0d0f11",
  card: "#131416",
  panel: "#1a1c1f",
  input: "#0f1113",

  border: "rgba(255,255,255,0.08)",
  borderStrong: "rgba(255,255,255,0.14)",

  crimson: "#8b1a1a",
  crimsonLight: "#a52020",

  gold: "#b8922a",
  goldSoft: "#d6c28c",

  text: "#f0ece6",
  textSecond: "#b8b0a6",
  textMuted: "#9e968e",
};

export default function EventRegistrationPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [marketingConsent, setMarketingConsent] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");

  const cleanEmail = (value) =>
    String(value || "").trim().toLowerCase();

  const isValidEmail = (value) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail(value));

  const registerAndEnter = async (event) => {
    event.preventDefault();

    setError("");
    setStatus("");

    const normalizedEmail = cleanEmail(email);

    if (!isValidEmail(normalizedEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      /*
       * STEP 1
       * Create the event trial account.
       */
      setStatus("Activating your PredictorPro access...");

      const registrationResponse = await fetch(
        "/api/predictor/event-trial",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: normalizedEmail,
            marketing_consent: marketingConsent,
            source: "event",
          }),
        }
      );

      const registrationData =
        await registrationResponse.json().catch(() => ({}));

      if (!registrationResponse.ok || !registrationData.ok) {
        throw new Error(
          registrationData.error ||
            "Unable to activate your PredictorPro access."
        );
      }

      /*
       * STEP 2
       * Use the existing usage endpoint to register/validate
       * this browser device and obtain the device token.
       */
      setStatus("Registering this device...");

      const usageResponse = await fetch(
        `/api/predictor/usage?email=${encodeURIComponent(
          normalizedEmail
        )}`
      );

      const usageData =
        await usageResponse.json().catch(() => ({}));

      if (!usageResponse.ok) {
        throw new Error(
          usageData.error ||
            usageData.detail ||
            "Access was created, but this device could not be registered."
        );
      }

      /*
       * Store the exact keys used by PredictorPro.
       */
      if (typeof window !== "undefined") {
        window.localStorage.setItem(
          "icsi_device_email",
          normalizedEmail
        );

        if (usageData.device_token) {
          window.localStorage.setItem(
            "icsi_device_token",
            usageData.device_token
          );
        }
      }

      setStatus("Access activated. Opening PredictorPro...");

      /*
       * PredictorPro will detect the stored email/device token
       * and automatically validate the attendee.
       */
      await router.push("/portal/PredictorPro");

    } catch (err) {
      setError(
        err?.message ||
          "Unable to activate PredictorPro access."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <Seo
        title="PredictorPro Event Access | ICSI"
        path="/event"
      />

      <style>{`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

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

        .event-show-hero {
          padding: 36px 0 70px;
          border-bottom: 1px solid rgba(22,22,31,0.14);
        }

        .event-show-kicker,
        .event-section-kicker,
        .event-show-proof-label {
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
          text-transform: uppercase;
          font-weight: 600;
          letter-spacing: 0.18em;
        }

        .event-show-kicker {
          margin-bottom: 24px;
          color: var(--crimson);
          font-size: 0.72rem;
        }

        .event-show-hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 280px;
          gap: 70px;
          align-items: end;
        }

        .event-show-title,
        .event-session-title,
        .event-access-title,
        .event-route h2 {
          font-family: "Playfair Display", Georgia, serif;
          font-weight: 400;
          letter-spacing: -0.05em;
        }

        .event-show-title {
          margin: 0 0 18px;
          font-size: clamp(3.5rem, 7vw, 6.6rem);
          line-height: 0.94;
        }

        .event-stand-line {
          margin-bottom: 26px;
          color: var(--bordeaux);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
          font-size: 1rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .event-show-copy {
          margin: 0;
          max-width: 66ch;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
          font-size: 1.04rem;
          line-height: 1.7;
          font-weight: 300;
          opacity: 0.76;
        }

        .event-show-proof {
          padding: 28px 0 4px;
          border-top: 2px solid var(--gold);
        }

        .event-show-proof-label {
          margin-bottom: 10px;
          color: var(--crimson);
          font-size: 0.64rem;
        }

        .event-show-proof-value {
          font-family: "Playfair Display", Georgia, serif;
          font-size: 1.65rem;
          line-height: 1.1;
        }

        .event-session-section {
          display: grid;
          grid-template-columns: minmax(300px, 0.65fr) minmax(520px, 1fr);
          gap: 80px;
          padding: 86px 0 94px;
          border-bottom: 1px solid rgba(22,22,31,0.14);
        }

        .event-session-copy {
          position: sticky;
          top: 110px;
          align-self: start;
          padding-top: 6px;
        }

        .event-section-kicker {
          color: var(--crimson);
          font-size: 0.66rem;
          line-height: 1.35;
        }

        .event-session-title {
          margin: 30px 0 20px;
          max-width: 12ch;
          font-size: clamp(2.7rem, 4.1vw, 4.4rem);
          line-height: 0.98;
        }

        .event-session-details {
          padding: 16px 0;
          margin-bottom: 26px;
          border-top: 1px solid rgba(22,22,31,0.16);
          border-bottom: 1px solid rgba(22,22,31,0.16);
          color: var(--bordeaux);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
          font-size: 0.79rem;
          line-height: 1.5;
          font-weight: 600;
          letter-spacing: 0.10em;
          text-transform: uppercase;
        }

        .event-session-text,
        .event-session-note,
        .event-access-copy,
        .event-route p {
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
          font-weight: 300;
        }

        .event-session-text {
          margin: 0;
          max-width: 50ch;
          font-size: 0.98rem;
          line-height: 1.72;
          opacity: 0.76;
        }

        .event-session-note {
          margin: 24px 0 0;
          padding-left: 16px;
          border-left: 2px solid var(--crimson);
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--bordeaux);
        }

        .event-flyer-wrap {
          display: flex;
          justify-content: center;
        }

        .event-flyer {
          display: block;
          width: min(100%, 760px);
          height: auto;
          box-shadow: 0 24px 70px rgba(22,22,31,0.16);
        }

        .event-access-section {
          display: grid;
          grid-template-columns: minmax(260px, 0.58fr) minmax(480px, 0.9fr);
          gap: 80px;
          padding: 86px 0 94px;
          align-items: start;
          border-bottom: 1px solid rgba(22,22,31,0.14);
        }

        .event-access-heading {
          padding-top: 8px;
        }

        .event-access-title {
          margin: 30px 0 20px;
          max-width: 12ch;
          font-size: clamp(2.5rem, 3.7vw, 4rem);
          line-height: 1;
        }

        .event-access-copy {
          margin: 0;
          max-width: 48ch;
          font-size: 0.98rem;
          line-height: 1.72;
          opacity: 0.74;
        }

        .event-card {
          background: var(--ink);
          color: #f7f2e8;
          border-top: 3px solid var(--crimson);
          padding: 40px;
          box-shadow: 0 24px 70px rgba(22,22,31,0.18);
        }

        .event-card-title {
          margin: 0 0 8px;
          text-align: center;
          font-family: "Playfair Display", Georgia, serif;
          font-size: 2rem;
          font-weight: 400;
        }

        .event-card-copy {
          margin: 0 0 30px;
          text-align: center;
          color: #c8c0b5;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
          font-size: 0.95rem;
          line-height: 1.6;
          font-weight: 300;
        }

        .event-label {
          display: block;
          margin-bottom: 8px;
          color: #ddd5ca;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.13em;
          text-transform: uppercase;
        }

        .event-input {
          width: 100%;
          min-height: 54px;
          padding: 13px 16px;
          border: 1px solid rgba(255,255,255,0.16);
          background: #0f1113;
          color: #f0ece6;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
          font-size: 1rem;
          outline: none;
          transition: border-color 0.15s ease;
        }

        .event-input:focus {
          border-color: rgba(200,162,74,0.75);
        }

        .event-input::placeholder {
          color: #77716b;
        }

        .event-consent-row {
          width: 100%;
          display: grid;
          grid-template-columns: 20px minmax(0, 1fr);
          align-items: start;
          column-gap: 12px;
          margin: 18px 0 24px;
        }

        .event-consent-checkbox {
          width: 18px;
          height: 18px;
          margin: 3px 0 0;
          accent-color: var(--crimson);
          cursor: pointer;
        }

        .event-consent-text {
          margin: 0;
          color: #a9a198;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
          font-size: 0.84rem;
          font-weight: 300;
          line-height: 1.5;
          text-align: left;
          cursor: pointer;
        }

        .event-button {
          width: 100%;
          min-height: 56px;
          border: none;
          background: var(--crimson);
          color: #fff;
          cursor: pointer;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
          font-size: 0.76rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .event-button:hover:not(:disabled) {
          background: #a91f2b;
        }

        .event-button:disabled {
          cursor: not-allowed;
          opacity: 0.55;
        }

        .event-status,
        .event-error {
          margin-top: 18px;
          padding: 12px 14px;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
          font-size: 0.82rem;
          text-align: center;
        }

        .event-status {
          border: 1px solid rgba(200,162,74,0.28);
          background: rgba(200,162,74,0.08);
          color: var(--lightGold);
        }

        .event-error {
          border: 1px solid rgba(192,36,47,0.42);
          background: rgba(192,36,47,0.13);
          color: #e4a7aa;
        }

        .event-benefits {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          margin-top: 32px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.08);
        }

        .event-benefit {
          background: #0f1113;
          padding: 17px 12px;
          text-align: center;
        }

        .event-benefit-title {
          color: var(--lightGold);
          font-family: "Playfair Display", Georgia, serif;
          font-size: 1rem;
          margin-bottom: 4px;
        }

        .event-benefit-copy {
          color: #928a82;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
          font-size: 0.72rem;
          line-height: 1.35;
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

        .event-route-light {
          background: var(--ivory);
        }

        .event-route-dark {
          background: var(--bordeaux);
          color: #fff;
          border-color: var(--bordeaux);
        }

        .event-route-dark .event-section-kicker {
          color: var(--lightGold);
        }

        .event-route h2 {
          margin: 28px 0 18px;
          max-width: 15ch;
          font-size: clamp(2rem, 3vw, 3.15rem);
          line-height: 1.02;
        }

        .event-route p {
          margin: 0;
          max-width: 46ch;
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

        .event-route-dark .event-route-link {
          color: var(--lightGold);
        }

        .event-footer {
          text-align: center;
          margin-top: 38px;
          color: rgba(22,22,31,0.48);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
          font-size: 0.72rem;
          line-height: 1.6;
        }

        @media (max-width: 900px) {
          .event-show-hero-grid,
          .event-session-section,
          .event-access-section,
          .event-routes {
            grid-template-columns: 1fr;
          }

          .event-show-proof {
            max-width: 320px;
          }

          .event-session-copy {
            position: static;
          }

          .event-session-title,
          .event-access-title {
            max-width: none;
          }
        }

        @media (max-width: 620px) {
          .event-wide-container {
            width: min(100% - 32px, 1180px);
            padding-top: 32px;
            padding-bottom: 70px;
          }

          .event-show-hero {
            padding: 24px 0 52px;
          }

          .event-show-title {
            font-size: clamp(2.9rem, 15vw, 4.4rem);
          }

          .event-session-section,
          .event-access-section {
            gap: 42px;
            padding: 58px 0 64px;
          }

          .event-card {
            padding: 30px 22px;
          }

          .event-benefits {
            grid-template-columns: 1fr;
          }

          .event-route {
            min-height: 330px;
            padding: 42px 28px 38px;
          }

          .event-routes {
            padding-top: 62px;
          }
        }
      `}</style>

      <main className="event-page">
        <div className="event-wide-container">

          <header className="event-show-hero">
            <div className="event-show-kicker">
              InterTabac 2026 · Dortmund
            </div>

            <div className="event-show-hero-grid">
              <div>
                <h1 className="event-show-title">
                  Meet ICSI
                </h1>

                <div className="event-stand-line">
                  Hall 4 · Stand 4.D44
                </div>

                <p className="event-show-copy">
                  Meet the International Cigar Sommelier Institute at InterTabac
                  and discover how ICSI brings together professional education,
                  applied science and digital intelligence for the modern cigar
                  hospitality environment.
                </p>
              </div>

              <div className="event-show-proof">
                <div className="event-show-proof-label">
                  Exhibitor · Speaker
                </div>
                <div className="event-show-proof-value">
                  InterTabac 2026
                </div>
              </div>
            </div>
          </header>

          <section className="event-session-section">
            <div className="event-session-copy">
              <div className="event-section-kicker">
                Live Session
              </div>

              <h2 className="event-session-title">
                Decoding Cigars by ICSI
              </h2>

              <div className="event-session-details">
                Newsroom 1+2 · 13:30 · 15–17 September
              </div>

              <p className="event-session-text">
                Join Anthony Azar, Founder of ICSI, for a live session exploring
                how blend structure, tobacco behaviour and the Cigar Peak-Flavor
                System® come together to support a more consistent and elevated
                cigar experience.
              </p>

              <p className="event-session-note">
                Science. Insights. A better experience.
              </p>
            </div>

            <div className="event-flyer-wrap">
              <img
                src="/img/Decoding-cigars.jpeg"
                alt="Decoding Cigars by ICSI at InterTabac 2026"
                className="event-flyer"
              />
            </div>
          </section>

          <section className="event-access-section">
            <div className="event-access-heading">
              <div className="event-section-kicker">
                Event Access
              </div>

              <h2 className="event-access-title">
                Experience PredictorPro
              </h2>

              <p className="event-access-copy">
                Discover how cigar blend structure can be translated into
                peak-flavour conditions, pairing intelligence and structurally
                similar blend recommendations.
              </p>
            </div>

            <section className="event-card">

              <h3 className="event-card-title">
                Activate Your Event Access
              </h3>

              <p className="event-card-copy">
                Enter your email address to receive immediate
                PredictorPro trial access on this device.
              </p>

              <form onSubmit={registerAndEnter}>

                <label
                  className="event-label"
                  htmlFor="event-email"
                >
                  Email Address
                </label>

                <input
                  id="event-email"
                  className="event-input"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError("");
                  }}
                  disabled={loading}
                />

                <div className="event-consent-row">

                  <input
                    id="marketing-consent"
                    className="event-consent-checkbox"
                    type="checkbox"
                    checked={marketingConsent}
                    onChange={(e) =>
                      setMarketingConsent(e.target.checked)
                    }
                    disabled={loading}
                  />

                  <label
                    htmlFor="marketing-consent"
                    className="event-consent-text"
                  >
                    I would like to receive occasional information
                    from ICSI about PredictorPro, education,
                    technology and professional services.
                  </label>

                </div>

                <button
                  className="event-button"
                  type="submit"
                  disabled={loading}
                >
                  {loading
                    ? "Activating Access..."
                    : "Access PredictorPro"}
                </button>

              </form>

              {status && !error && (
                <div className="event-status">
                  {status}
                </div>
              )}

              {error && (
                <div className="event-error">
                  {error}
                </div>
              )}

              <div className="event-benefits">

                <div className="event-benefit">
                  <div className="event-benefit-title">
                    Peak Flavor
                  </div>

                  <div className="event-benefit-copy">
                    Determine optimal RH conditions
                  </div>
                </div>

                <div className="event-benefit">
                  <div className="event-benefit-title">
                    Pairing
                  </div>

                  <div className="event-benefit-copy">
                    Generate beverage recommendations
                  </div>
                </div>

                <div className="event-benefit">
                  <div className="event-benefit-title">
                    Similar Blends
                  </div>

                  <div className="event-benefit-copy">
                    Discover structural alternatives
                  </div>
                </div>

              </div>

            </section>
          </section>

          <section className="event-routes">
            <article className="event-route event-route-light">
              <div className="event-section-kicker">
                Professional Education
              </div>

              <h2>
                Interested in professional certification?
              </h2>

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

              <h2>
                Operate a lounge or hospitality venue?
              </h2>

              <p>
                Discover how ICSI implements CPFS through technical assessment,
                team training, storage and serving standards, and PredictorPro.
              </p>

              <Link
                href="/cpfs-implementation"
                className="event-route-link"
              >
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
