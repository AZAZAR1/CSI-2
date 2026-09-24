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

  const requestAccessLink = async (event) => {
    event.preventDefault();

    setError("");
    setStatus("");

    const normalizedEmail = cleanEmail(email);

    if (!isValidEmail(normalizedEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    setStatus("Preparing your secure access link...");

    try {
      const response = await fetch("/api/predictor/event-access-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: normalizedEmail,
          marketing_consent: marketingConsent,
          source: "cigar-culture-summit-africa-2026",
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok || !data.ok) {
        throw new Error(
          data.error ||
            "Unable to send your PredictorPro access link."
        );
      }

      setStatus(
        `Check your email. We sent a secure PredictorPro activation link to ${normalizedEmail}.`
      );
    } catch (err) {
      setError(
        err?.message ||
          "Unable to send your PredictorPro access link."
      );
      setStatus("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <Seo
        title="ICSI at Cigar Culture Summit Africa 2026 | Johannesburg"
        path="/event-africa"
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


        .africa-flyer-section {
          margin-left: calc(50% - 50vw);
          margin-right: calc(50% - 50vw);
          padding: 48px max(24px, calc((100vw - 1180px) / 2)) 64px;
          background: #16161f;
          border-bottom: 1px solid rgba(250,244,232,0.12);
        }

        .africa-flyer-heading {
          max-width: 760px;
          margin: 0 auto 34px;
          text-align: center;
        }

        .africa-flyer-heading .event-section-kicker {
          color: #c8a24a;
        }

        .africa-flyer-title {
          margin: 18px 0 0;
          color: #faf4e8;
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(2.2rem, 4vw, 3.6rem);
          line-height: 1.02;
          font-weight: 400;
          letter-spacing: -0.04em;
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


        /* =========================================================
           CIGAR CULTURE SUMMIT AFRICA 2026
           ========================================================= */

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
        .africa-proof-label,
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

        .africa-button-primary {
          background: #c0242f;
          border: 1px solid #c0242f;
          color: #fff;
        }

        .africa-button-primary:hover {
          background: #a51f29;
          border-color: #a51f29;
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
          .africa-summit-image {
            max-width: 380px;
          }


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


        @media (max-width: 900px) {
          .africa-hero-grid {
            grid-template-columns: 1fr;
            gap: 52px;
          }

          .africa-summit-image {
            max-width: 380px;
          }

          .africa-session-inner {
            margin: 0;
          }
        }

        @media (max-width: 620px) {
          .africa-hero {
            padding-top: 52px;
            padding-bottom: 58px;
          }

          .africa-title {
            font-size: clamp(3.2rem, 15vw, 4.65rem);
          }

          .africa-actions {
            flex-direction: column;
          }

          .africa-button {
            width: 100%;
          }

          .africa-summit-image {
            max-width: 320px;
          }

          .africa-session {
            padding-top: 68px;
            padding-bottom: 74px;
          }

          .africa-flyer-section {
            padding-top: 26px;
            padding-bottom: 34px;
          }

          .africa-session-title {
            font-size: clamp(2.6rem, 11vw, 3.7rem);
          }

          .africa-session-title-line {
            white-space: normal;
          }

          .africa-session-subtitle {
            font-size: clamp(1.7rem, 8vw, 2.35rem);
          }

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
                  The Garden Venue · 23–25 October 2026
                </div>

                <p className="africa-copy">
                  Meet the International Cigar Sommelier Institute at the first
                  Cigar Culture Summit Africa and discover how ICSI brings together
                  professional education, applied science and digital intelligence
                  for the modern cigar hospitality environment.
                </p>

                <div className="africa-actions">
                  <a href="#event-access" className="africa-button africa-button-primary">
                    Get PredictorPro Event Access
                  </a>
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
                  Storage, Collection &amp;
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

          <section className="event-access-section" id="event-access">
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
                Enter your email address and we will send you a secure
                link to activate your PredictorPro trial.
              </p>

              <form onSubmit={requestAccessLink}>

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
                    ? "Sending Access Link..."
                    : "Send My Access Link"}
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
