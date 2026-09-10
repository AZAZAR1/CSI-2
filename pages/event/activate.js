// pages/event/activate.js

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";

export default function EventActivatePage() {
  const router = useRouter();
  const [status, setStatus] = useState("Verifying your secure access link...");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!router.isReady) return;

    const token =
      typeof router.query?.token === "string"
        ? router.query.token
        : "";

    if (!token) {
      setStatus("");
      setError("This PredictorPro activation link is incomplete.");
      return;
    }

    let cancelled = false;

    const activate = async () => {
      try {
        const trialResponse = await fetch("/api/predictor/event-trial", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token }),
        });

        const trialData = await trialResponse.json().catch(() => ({}));

        if (!trialResponse.ok || !trialData.ok) {
          throw new Error(
            trialData.error || "Unable to activate PredictorPro access."
          );
        }

        const email = String(trialData.email || "").trim().toLowerCase();
        if (!email) {
          throw new Error("The activation link did not return a valid account.");
        }

        if (cancelled) return;
        setStatus("Email verified. Registering this device...");

        const usageResponse = await fetch(
          `/api/predictor/usage?email=${encodeURIComponent(email)}`
        );
        const usageData = await usageResponse.json().catch(() => ({}));

        if (!usageResponse.ok) {
          throw new Error(
            usageData.error ||
            usageData.detail ||
            "Your account was activated, but this device could not be registered."
          );
        }

        if (typeof window !== "undefined") {
          window.localStorage.setItem("icsi_device_email", email);

          if (usageData.device_token) {
            window.localStorage.setItem(
              "icsi_device_token",
              usageData.device_token
            );
          }
        }

        if (cancelled) return;
        setStatus("Access activated. Opening PredictorPro...");

        setTimeout(() => {
          router.replace("/portal/PredictorPro");
        }, 700);
      } catch (err) {
        if (cancelled) return;
        setStatus("");
        setError(
          err?.message || "Unable to activate PredictorPro access."
        );
      }
    };

    activate();

    return () => {
      cancelled = true;
    };
  }, [router.isReady, router.query?.token]);

  return (
    <Layout>
      <Seo title="Activate PredictorPro | ICSI" path="/event/activate" />

      <main className="activationPage">
        <section className="activationCard">
          <div className="activationKicker">
            PredictorPro Event Access
          </div>

          <h1>Secure activation</h1>

          {status && (
            <div className="activationStatus">
              <span className="activationDot" />
              {status}
            </div>
          )}

          {error && (
            <>
              <div className="activationError">{error}</div>
              <a href="/event" className="activationButton">
                Request a new access link →
              </a>
            </>
          )}
        </section>
      </main>

      <style jsx>{`
        .activationPage {
          min-height: 70vh;
          padding: 90px 24px;
          background: #faf4e8;
          color: #16161f;
          display: flex;
          justify-content: center;
        }

        .activationCard {
          width: min(680px, 100%);
          padding: 52px;
          background: #16161f;
          color: #f0ece6;
          border-top: 3px solid #c0242f;
        }

        .activationKicker {
          margin-bottom: 24px;
          color: #e4cb8e;
          font-family: Inter, ui-sans-serif, system-ui, sans-serif;
          font-size: 0.68rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          font-weight: 700;
        }

        h1 {
          margin: 0 0 34px;
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          line-height: 1;
          font-weight: 400;
        }

        .activationStatus,
        .activationError {
          padding: 16px 18px;
          font-family: Inter, ui-sans-serif, system-ui, sans-serif;
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .activationStatus {
          display: flex;
          align-items: center;
          gap: 11px;
          border: 1px solid rgba(200,162,74,.3);
          background: rgba(200,162,74,.08);
          color: #e4cb8e;
        }

        .activationDot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #c8a24a;
        }

        .activationError {
          border: 1px solid rgba(192,36,47,.42);
          background: rgba(192,36,47,.13);
          color: #e4a7aa;
        }

        .activationButton {
          display: inline-flex;
          margin-top: 24px;
          padding: 16px 20px;
          background: #c0242f;
          color: #fff;
          text-decoration: none;
          font-family: Inter, ui-sans-serif, system-ui, sans-serif;
          font-size: .7rem;
          letter-spacing: .14em;
          text-transform: uppercase;
          font-weight: 700;
        }
      `}</style>
    </Layout>
  );
}
