import { useState } from "react";
import { useRouter } from "next/router";
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
       * Immediately use the EXISTING usage endpoint.
       *
       * This is important because your current PredictorPro
       * already uses /api/predictor/usage to register/validate
       * a browser device and return its device_token.
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
       * Store EXACTLY the same keys currently used by PredictorPro.
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
       * PredictorPro's existing useEffect will see:
       *
       * icsi_device_email
       * icsi_device_token
       *
       * and automatically call loadUsageForEmail().
       *
       * No predictorpro.js modification required.
       */
      await router.push("/portal/predictorpro");
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
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&display=swap');

        *, *::before, *::after {
          box-sizing: border-box;
        }

        .event-page {
          min-height: 100vh;
          background:
            radial-gradient(
              circle at 50% 0%,
              rgba(139,26,26,0.10),
              transparent 38%
            ),
            #0d0f11;
          color: #f0ece6;
          font-family:
            'Cormorant Garamond',
            'Palatino Linotype',
            Georgia,
            serif;
        }

        .event-container {
          width: 100%;
          max-width: 760px;
          margin: 0 auto;
          padding: 72px 24px 100px;
        }

        .event-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .event-kicker {
          display: inline-block;
          color: #b8922a;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.20em;
          text-transform: uppercase;
          margin-bottom: 18px;
        }

        .event-title {
          margin: 0;
          font-size: clamp(38px, 8vw, 62px);
          font-weight: 600;
          line-height: 0.98;
          letter-spacing: -0.025em;
        }

        .event-subtitle {
          max-width: 570px;
          margin: 22px auto 0;
          color: #b8b0a6;
          font-size: 21px;
          line-height: 1.5;
        }

        .event-divider {
          width: 48px;
          height: 2px;
          margin: 28px auto 0;
          background: #8b1a1a;
        }

        .event-card {
          background:
            radial-gradient(
              circle at 20% 0%,
              rgba(184,146,42,0.05),
              transparent 40%
            ),
            #131416;
          border: 1px solid rgba(255,255,255,0.10);
          border-top: 2px solid #8b1a1a;
          border-radius: 8px;
          padding: 38px;
          box-shadow: 0 24px 70px rgba(0,0,0,0.28);
        }

        .event-card-title {
          margin: 0 0 8px;
          text-align: center;
          font-size: 28px;
          font-weight: 600;
        }

        .event-card-copy {
          margin: 0 0 30px;
          text-align: center;
          color: #9e968e;
          font-size: 18px;
          line-height: 1.5;
        }

        .event-label {
          display: block;
          color: #b8b0a6;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .event-input {
          width: 100%;
          min-height: 54px;
          padding: 13px 16px;
          border-radius: 4px;
          border: 1px solid rgba(255,255,255,0.14);
          background: #0f1113;
          color: #f0ece6;
          font-family:
            'Cormorant Garamond',
            Georgia,
            serif;
          font-size: 19px;
          outline: none;
          transition: border-color 0.15s ease;
        }

        .event-input:focus {
          border-color: rgba(184,146,42,0.7);
        }

        .event-input::placeholder {
          color: #716c67;
        }

        .event-consent {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin: 18px 0 24px;
          color: #9e968e;
          font-size: 15px;
          line-height: 1.45;
        }

        .event-consent input {
          margin-top: 4px;
          accent-color: #8b1a1a;
        }

        .event-button {
          width: 100%;
          min-height: 56px;
          border: none;
          border-radius: 3px;
          background: #8b1a1a;
          color: #f0ece6;
          cursor: pointer;
          font-family:
            'Cormorant Garamond',
            Georgia,
            serif;
          font-size: 17px;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          transition:
            background 0.15s ease,
            opacity 0.15s ease;
        }

        .event-button:hover:not(:disabled) {
          background: #a52020;
        }

        .event-button:disabled {
          cursor: not-allowed;
          opacity: 0.55;
        }

        .event-status {
          margin-top: 18px;
          padding: 11px 14px;
          border: 1px solid rgba(184,146,42,0.25);
          border-radius: 3px;
          background: rgba(184,146,42,0.08);
          color: #d6c28c;
          font-size: 15px;
          text-align: center;
        }

        .event-error {
          margin-top: 18px;
          padding: 11px 14px;
          border: 1px solid rgba(139,26,26,0.40);
          border-radius: 3px;
          background: rgba(139,26,26,0.12);
          color: #d79595;
          font-size: 15px;
          text-align: center;
        }

        .event-benefits {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          margin-top: 32px;
          border: 1px solid rgba(255,255,255,0.07);
          background: rgba(255,255,255,0.07);
        }

        .event-benefit {
          background: #0f1113;
          padding: 17px 12px;
          text-align: center;
        }

        .event-benefit-title {
          color: #d6c28c;
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 4px;
        }

        .event-benefit-copy {
          color: #8f8881;
          font-size: 14px;
          line-height: 1.3;
        }

        .event-footer {
          text-align: center;
          margin-top: 28px;
          color: #716c67;
          font-size: 14px;
          line-height: 1.5;
        }

        @media (max-width: 620px) {
          .event-container {
            padding: 42px 18px 70px;
          }

          .event-card {
            padding: 28px 20px;
          }

          .event-benefits {
            grid-template-columns: 1fr;
          }

          .event-subtitle {
            font-size: 19px;
          }
        }
      `}</style>

      <main className="event-page">
        <div className="event-container">
          <header className="event-header">
            <div className="event-kicker">
              International Cigar Sommelier Institute
            </div>

            <h1 className="event-title">
              Experience PredictorPro
            </h1>

            <p className="event-subtitle">
              Discover how cigar blend structure can be translated
              into peak-flavour conditions, pairing intelligence
              and structurally similar blend recommendations.
            </p>

            <div className="event-divider" />
          </header>

          <section className="event-card">
            <h2 className="event-card-title">
              Activate Your Event Access
            </h2>

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

              <label className="event-consent">
                <input
                  type="checkbox"
                  checked={marketingConsent}
                  onChange={(e) =>
                    setMarketingConsent(e.target.checked)
                  }
                  disabled={loading}
                />

                <span>
                  I would like to receive occasional information
                  from ICSI about PredictorPro, education,
                  technology and professional services.
                </span>
              </label>

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
