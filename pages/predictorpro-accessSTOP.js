// pages/predictorpro-access.js

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const COPY = {
  en: {
    kicker: "Reserved Access",
    title: "PredictorPro®",
    intro:
      "Enter the email address associated with your validated PredictorPro account.",
    label: "Validated email address",
    placeholder: "name@company.com",
    submit: "Validate Access",
    validating: "Validating Access...",
    success: "Access confirmed. Opening PredictorPro...",
    invalid:
      "We could not find active PredictorPro access for this email address.",
    deviceError:
      "Your account was found, but this device could not be validated.",
    contactLead: "Need access?",
    contact: "Contact ICSI",
    security:
      "PredictorPro is a reserved professional environment. Access is limited to validated ICSI accounts.",
    seoTitle: "PredictorPro® Reserved Access | ICSI",
    seoDescription:
      "Reserved access portal for validated PredictorPro accounts.",
  },

  fr: {
    kicker: "Accès Réservé",
    title: "PredictorPro®",
    intro:
      "Saisissez l'adresse e-mail associée à votre compte PredictorPro validé.",
    label: "Adresse e-mail validée",
    placeholder: "nom@entreprise.com",
    submit: "Valider l'accès",
    validating: "Validation en cours...",
    success: "Accès confirmé. Ouverture de PredictorPro...",
    invalid:
      "Nous n'avons pas trouvé d'accès PredictorPro actif pour cette adresse e-mail.",
    deviceError:
      "Votre compte a été trouvé, mais cet appareil n'a pas pu être validé.",
    contactLead: "Besoin d'un accès ?",
    contact: "Contacter ICSI",
    security:
      "PredictorPro est un environnement professionnel réservé. L'accès est limité aux comptes ICSI validés.",
    seoTitle: "Accès Réservé PredictorPro® | ICSI",
    seoDescription:
      "Portail d'accès réservé aux comptes PredictorPro validés.",
  },

  de: {
    kicker: "Reservierter Zugang",
    title: "PredictorPro®",
    intro:
      "Geben Sie die E-Mail-Adresse ein, die mit Ihrem validierten PredictorPro-Konto verknüpft ist.",
    label: "Validierte E-Mail-Adresse",
    placeholder: "name@unternehmen.com",
    submit: "Zugang validieren",
    validating: "Zugang wird geprüft...",
    success: "Zugang bestätigt. PredictorPro wird geöffnet...",
    invalid:
      "Für diese E-Mail-Adresse wurde kein aktiver PredictorPro-Zugang gefunden.",
    deviceError:
      "Ihr Konto wurde gefunden, dieses Gerät konnte jedoch nicht validiert werden.",
    contactLead: "Benötigen Sie Zugang?",
    contact: "ICSI kontaktieren",
    security:
      "PredictorPro ist eine reservierte professionelle Umgebung. Der Zugang ist auf validierte ICSI-Konten beschränkt.",
    seoTitle: "PredictorPro® Reservierter Zugang | ICSI",
    seoDescription:
      "Reserviertes Zugangsportal für validierte PredictorPro-Konten.",
  },
};

function cleanEmail(value) {
  return String(value || "")
    .trim()
    .toLowerCase();
}

function validEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail(value));
}

function getStoredToken() {
  if (typeof window === "undefined") return "";

  return (
    window.localStorage.getItem("icsi_device_token") ||
    window.localStorage.getItem("icsi_predictorpro_device_token") ||
    window.localStorage.getItem("icsi_predictor_device_token") ||
    ""
  );
}

function storeSession(email, token) {
  if (typeof window === "undefined") return;

  window.localStorage.setItem(
    "icsi_device_email",
    cleanEmail(email)
  );

  if (token) {
    window.localStorage.setItem(
      "icsi_device_token",
      token
    );
  }

  /*
   * Clean up older storage keys so PredictorPro uses
   * one consistent device-session convention.
   */
  window.localStorage.removeItem(
    "icsi_predictorpro_email"
  );
  window.localStorage.removeItem(
    "icsi_predictor_email"
  );
  window.localStorage.removeItem(
    "icsi_predictorpro_device_token"
  );
  window.localStorage.removeItem(
    "icsi_predictor_device_token"
  );
}

export default function PredictorProAccess() {
  const router = useRouter();
  const lang = (router.locale || "en").toLowerCase();
  const c = COPY[lang] || COPY.en;

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  /*
   * If this browser already has a validated PredictorPro session,
   * prefill the email address. We intentionally do not redirect
   * automatically here; the user still sees the reserved-access
   * page when entering via the public navigation.
   */
  useEffect(() => {
    if (typeof window === "undefined") return;

    const storedEmail =
      window.localStorage.getItem("icsi_device_email") ||
      "";

    if (storedEmail) {
      setEmail(cleanEmail(storedEmail));
    }
  }, []);

  const validateAccess = async (event) => {
    event.preventDefault();

    setError("");
    setStatus("");

    const normalizedEmail = cleanEmail(email);

    if (!validEmail(normalizedEmail)) {
      setError(
        lang === "fr"
          ? "Veuillez saisir une adresse e-mail valide."
          : lang === "de"
            ? "Bitte geben Sie eine gültige E-Mail-Adresse ein."
            : "Please enter a valid email address."
      );
      return;
    }

    setLoading(true);

    try {
      /*
       * If the device has already been registered for this account,
       * pass the existing token. Otherwise the usage endpoint may
       * return/register the correct device token for an authorised user.
       */
      const storedToken = getStoredToken();

      const tokenQuery = storedToken
        ? `&device_token=${encodeURIComponent(storedToken)}`
        : "";

      const response = await fetch(
        `/api/predictor/usage?email=${encodeURIComponent(
          normalizedEmail
        )}${tokenQuery}`
      );

      const data =
        await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          data.error ||
          data.detail ||
          c.invalid
        );
      }

      /*
       * A successful usage lookup is not sufficient by itself.
       * PredictorPro access must explicitly be active.
       */
      if (
        data?.active === false ||
        data?.pro_access !== true
      ) {
        throw new Error(c.invalid);
      }

      const deviceToken =
        data?.device_token || storedToken;

      if (!deviceToken) {
        throw new Error(c.deviceError);
      }

      storeSession(
        normalizedEmail,
        deviceToken
      );

      setStatus(c.success);

      /*
       * IMPORTANT:
       * Keep exact route casing. The deployed file is
       * pages/portal/PredictorPro.js.
       */
      await router.push(
        "/portal/PredictorPro"
      );

    } catch (err) {
      setError(
        err?.message || c.invalid
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <Seo
        title={c.seoTitle}
        description={c.seoDescription}
        path="/predictorpro-access"
      />

      <main className="ppAccessPage">
        <div className="ppAccessShell">

          <section className="ppAccessIntro">
            <span className="ppAccessKicker">
              {c.kicker}
            </span>

            <h1>{c.title}</h1>

            <p>
              {c.intro}
            </p>

            <div className="ppAccessRule" />

            <p className="ppAccessSecurity">
              {c.security}
            </p>
          </section>

          <section className="ppAccessCard">
            <div className="ppAccessCardMark">
              <img
                src="/img/CPFS.png"
                alt="Cigar Peak-Flavor System®"
              />
            </div>

            <form
              className="ppAccessForm"
              onSubmit={validateAccess}
            >
              <label
                htmlFor="predictorpro-email"
                className="ppAccessLabel"
              >
                {c.label}
              </label>

              <input
                id="predictorpro-email"
                className="ppAccessInput"
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder={c.placeholder}
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setError("");
                  setStatus("");
                }}
                disabled={loading}
                required
              />

              <button
                className="ppAccessButton"
                type="submit"
                disabled={loading}
              >
                <span>
                  {loading
                    ? c.validating
                    : c.submit}
                </span>

                {!loading && (
                  <span aria-hidden="true">
                    →
                  </span>
                )}
              </button>
            </form>

            {status && !error && (
              <div
                className="ppAccessStatus"
                role="status"
              >
                {status}
              </div>
            )}

            {error && (
              <div
                className="ppAccessError"
                role="alert"
              >
                {error}
              </div>
            )}

            <div className="ppAccessContact">
              <span>
                {c.contactLead}
              </span>

              <Link
                href="/contact"
                locale={lang}
              >
                {c.contact} →
              </Link>
            </div>
          </section>

        </div>
      </main>

      <style jsx>{`
        .ppAccessPage {
          --ivory: #faf4e8;
          --ink: #16161f;
          --crimson: #c0242f;
          --bordeaux: #601818;
          --gold: #c8a24a;
          --lightGold: #e4cb8e;

          min-height: calc(100vh - 180px);
          padding: clamp(64px, 8vw, 118px) 24px;
          background: var(--ivory);
          color: var(--ink);
        }

        .ppAccessShell {
          width: min(1120px, 100%);
          margin: 0 auto;
          display: grid;
          grid-template-columns:
            minmax(0, 0.88fr)
            minmax(420px, 0.7fr);
          gap: clamp(60px, 9vw, 130px);
          align-items: center;
        }

        .ppAccessKicker {
          display: block;
          margin-bottom: 24px;
          color: var(--crimson);
          font-family:
            Inter,
            ui-sans-serif,
            system-ui,
            -apple-system,
            "Segoe UI",
            sans-serif;
          font-size: 0.68rem;
          line-height: 1.3;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          font-weight: 700;
        }

        .ppAccessIntro h1 {
          margin: 0;
          color: var(--ink);
          font-family:
            "Playfair Display",
            Georgia,
            serif;
          font-size:
            clamp(3.4rem, 6vw, 6.5rem);
          line-height: 0.94;
          letter-spacing: -0.055em;
          font-weight: 400;
        }

        .ppAccessIntro > p {
          margin: 34px 0 0;
          max-width: 51ch;
          color: rgba(22, 22, 31, 0.72);
          font-family:
            Inter,
            ui-sans-serif,
            system-ui,
            -apple-system,
            "Segoe UI",
            sans-serif;
          font-size:
            clamp(1rem, 1.3vw, 1.15rem);
          line-height: 1.72;
          font-weight: 300;
        }

        .ppAccessRule {
          width: 72px;
          height: 1px;
          margin-top: 36px;
          background: var(--gold);
        }

        .ppAccessIntro .ppAccessSecurity {
          margin-top: 22px;
          max-width: 50ch;
          font-size: 0.78rem;
          line-height: 1.65;
          color: rgba(22, 22, 31, 0.5);
        }

        .ppAccessCard {
          position: relative;
          padding: 42px;
          background: var(--ink);
          color: #f0ece6;
          border-top: 3px solid var(--bordeaux);
          box-shadow:
            0 28px 75px
            rgba(22, 22, 31, 0.16);
        }

        .ppAccessCardMark {
          display: flex;
          justify-content: flex-start;
          margin-bottom: 34px;
        }

        .ppAccessCardMark img {
          display: block;
          width: min(190px, 50%);
          height: auto;
          object-fit: contain;
        }

        .ppAccessForm {
          margin: 0;
        }

        .ppAccessLabel {
          display: block;
          margin-bottom: 10px;
          color: #d9d1c6;
          font-family:
            Inter,
            ui-sans-serif,
            system-ui,
            -apple-system,
            "Segoe UI",
            sans-serif;
          font-size: 0.68rem;
          line-height: 1.35;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          font-weight: 600;
        }

        .ppAccessInput {
          width: 100%;
          min-height: 56px;
          padding: 14px 16px;
          border:
            1px solid
            rgba(255, 255, 255, 0.17);
          border-radius: 0;
          outline: none;
          background: #0f1113;
          color: #f0ece6;
          font-family:
            Inter,
            ui-sans-serif,
            system-ui,
            -apple-system,
            "Segoe UI",
            sans-serif;
          font-size: 1rem;
          font-weight: 400;
          transition:
            border-color 160ms ease;
        }

        .ppAccessInput::placeholder {
          color: #756f69;
        }

        .ppAccessInput:focus {
          border-color:
            rgba(200, 162, 74, 0.8);
        }

        .ppAccessInput:disabled {
          opacity: 0.7;
        }

        .ppAccessButton {
          width: 100%;
          min-height: 56px;
          margin-top: 18px;
          padding: 0 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          border: 1px solid var(--bordeaux);
          border-radius: 0;
          background: var(--bordeaux);
          color: #ffffff;
          cursor: pointer;
          font-family:
            Inter,
            ui-sans-serif,
            system-ui,
            -apple-system,
            "Segoe UI",
            sans-serif;
          font-size: 0.7rem;
          line-height: 1;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          font-weight: 700;
          transition:
            background 160ms ease,
            border-color 160ms ease;
        }

        .ppAccessButton:hover:not(:disabled) {
          background: var(--crimson);
          border-color: var(--crimson);
        }

        .ppAccessButton:disabled {
          cursor: not-allowed;
          opacity: 0.62;
        }

        .ppAccessStatus,
        .ppAccessError {
          margin-top: 18px;
          padding: 13px 14px;
          font-family:
            Inter,
            ui-sans-serif,
            system-ui,
            -apple-system,
            "Segoe UI",
            sans-serif;
          font-size: 0.82rem;
          line-height: 1.55;
        }

        .ppAccessStatus {
          border:
            1px solid
            rgba(200, 162, 74, 0.3);
          background:
            rgba(200, 162, 74, 0.08);
          color: var(--lightGold);
        }

        .ppAccessError {
          border:
            1px solid
            rgba(192, 36, 47, 0.45);
          background:
            rgba(192, 36, 47, 0.14);
          color: #e8aeb1;
        }

        .ppAccessContact {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-top: 30px;
          padding-top: 22px;
          border-top:
            1px solid
            rgba(255, 255, 255, 0.1);
          color: #918a82;
          font-family:
            Inter,
            ui-sans-serif,
            system-ui,
            -apple-system,
            "Segoe UI",
            sans-serif;
          font-size: 0.73rem;
          line-height: 1.45;
        }

        .ppAccessContact a {
          color: var(--lightGold);
          text-decoration: none;
          font-weight: 600;
          white-space: nowrap;
        }

        .ppAccessContact a:hover {
          color: #ffffff;
        }

        @media (max-width: 880px) {
          .ppAccessShell {
            grid-template-columns: 1fr;
            gap: 48px;
          }

          .ppAccessCard {
            width: min(620px, 100%);
          }
        }

        @media (max-width: 560px) {
          .ppAccessPage {
            padding:
              54px 18px 72px;
          }

          .ppAccessIntro h1 {
            font-size:
              clamp(3rem, 15vw, 4.5rem);
          }

          .ppAccessCard {
            padding: 30px 22px;
          }

          .ppAccessContact {
            align-items: flex-start;
            flex-direction: column;
          }
        }
      `}</style>
    </Layout>
  );
}
