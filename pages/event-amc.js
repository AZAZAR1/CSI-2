import { useState } from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const WHISKIES = [
  "Glen Grant 15",
  "Claxton Linkwood 13 2010",
  "Artist Collective Linkwood 12",
  "Jura Journey",
  "Tamnavulin Double Cask",
  "Nikka Super Nikka",
  "Isle of Skye 12y",
  "Benriach 12 Smoky",
  "SMOS Laphroaig 11 2014",
  "Dalmore Cigar Malt",
];

const FAMILIES = ["A", "B", "C", "C+", "D"];

const RATINGS = [
  { value: "1", label: "1 — Poor pairing" },
  { value: "2", label: "2 — Below average" },
  { value: "3", label: "3 — Acceptable pairing" },
  { value: "4", label: "4 — Very good pairing" },
  { value: "5", label: "5 — Exceptional pairing" },
];

const emptyTrial = () => ({
  cigar: "",
  family: "",
  whisky: "",
  rating: "",
});

export default function AmcPairingEvaluationPage() {
  const [participant, setParticipant] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [trials, setTrials] = useState(
    Array.from({ length: 5 }, emptyTrial)
  );

  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);

  function updateParticipant(field, value) {
    setParticipant((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  function updateTrial(index, field, value) {
    setTrials((prev) =>
      prev.map((trial, i) =>
        i === index ? { ...trial, [field]: value } : trial
      )
    );
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (status === "submitting" || status === "success") {
      return;
    }

    setMessage("");

    const normalized = trials.map((trial) => ({
      ...trial,
      cigar: trial.cigar.trim(),
    }));

    if (
      normalized.some(
        (trial) =>
          !trial.cigar ||
          !FAMILIES.includes(trial.family) ||
          !WHISKIES.includes(trial.whisky) ||
          !RATINGS.some((r) => r.value === trial.rating)
      )
    ) {
      setStatus("error");
      setMessage(
        "Please complete all four fields in each of the five trials."
      );
      return;
    }

    if (
      new Set(normalized.map((trial) => trial.whisky)).size !== 5
    ) {
      setStatus("error");
      setMessage(
        "Please select five different whiskies, one per trial."
      );
      return;
    }

    if (!consent) {
      setStatus("error");
      setMessage(
        "Please confirm the event data notice before submitting."
      );
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/amc-pairing-submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          participant,
          trials: normalized.map((t, i) => ({
            trialNumber: i + 1,
            ...t,
            rating: Number(t.rating),
          })),
          consent,
        }),
      });

      const result = await response
        .json()
        .catch(() => ({}));

      if (!response.ok || !result.ok) {
        throw new Error(
          result.error ||
            "Unable to submit. Please try again."
        );
      }

      setStatus("success");
      setMessage(
        "Thank you. Your five pairing evaluations have been recorded."
      );
    } catch (error) {
      setStatus("error");
      setMessage(
        error.message ||
          "Submission failed. Please try again."
      );
    }
  }

  return (
    <Layout>
      <Seo
        title="AMC Whisky & Cigar Pairing Evaluation | ICSI"
        path="/event-amc"
      />

      <style jsx>{`
        .amc-page {
          --ivory: #faf4e8;
          --ink: #16161f;
          --crimson: #c0242f;
          --bordeaux: #601818;
          --gold: #c8a24a;

          min-height: 100vh;
          background: var(--ivory);
          color: var(--ink);
          font-family: Inter, ui-sans-serif, system-ui, sans-serif;
        }

        .hero {
          background: #16161f;
          color: var(--ivory);
          padding: 76px 24px 82px;
        }

        .hero-inner,
        .main {
          max-width: 1050px;
          margin: auto;
        }

        .kicker {
          color: var(--gold);
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          font-weight: 700;
        }

        h1,
        h2,
        h3 {
          font-family: "Playfair Display", Georgia, serif;
          font-weight: 400;
        }

        h1 {
          font-size: clamp(42px, 6vw, 78px);
          line-height: 1.04;
          letter-spacing: -0.045em;
          margin: 20px 0;
        }

        .rule {
          width: 62px;
          height: 2px;
          background: var(--gold);
          margin: 26px 0;
        }

        .hero p {
          color: #e0d9d0;
          line-height: 1.75;
          max-width: 700px;
        }

        .main {
          padding: 54px 24px 90px;
        }

        .panel {
          padding: 34px;
          border: 1px solid #d9cec1;
          background: #fffdf8;
          margin-bottom: 22px;
        }

        .panel h2 {
          font-size: 32px;
          margin: 8px 0 12px;
        }

        .muted {
          color: #5b5856;
          line-height: 1.65;
          font-size: 14px;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
        }

        .identity {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        label {
          display: block;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.04em;
          margin-bottom: 8px;
        }

        input,
        select {
          width: 100%;
          min-width: 0;
          min-height: 48px;
          padding: 11px 12px;
          background: #fff;
          border: 1px solid #bfb5ac;
          border-radius: 0;
          color: #16161f;
          font: inherit;
          font-size: 14px;
        }

        input:focus,
        select:focus {
          outline: 2px solid var(--gold);
          outline-offset: 1px;
        }

        .trial {
          border-left: 4px solid var(--bordeaux);
        }

        .trial-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
        }

        .trial-number {
          color: var(--crimson);
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          font-weight: 700;
        }

        .trial h2 {
          margin: 9px 0 24px;
        }

        .note {
          background: #f2e9d8;
          padding: 17px 20px;
          margin: 22px 0 0;
          line-height: 1.65;
          font-size: 13px;
        }

        .consent {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin: 24px 0;
          font-size: 13px;
          line-height: 1.6;
        }

        .consent input {
          width: 18px;
          min-height: 18px;
          height: 18px;
          margin: 2px 0 0;
          flex-shrink: 0;
        }

        .submit {
          width: 100%;
          padding: 20px 24px;
          border: 0;
          background: var(--bordeaux);
          color: white;
          font-weight: 700;
          font-size: 14px;
          letter-spacing: 0.12em;
          cursor: pointer;
        }

        .submit:hover:not(:disabled) {
          background: #842525;
        }

        .submit:disabled {
          opacity: 0.55;
          cursor: not-allowed;
        }

        .feedback {
          margin: 18px 0;
          padding: 16px 18px;
          border-left: 4px solid var(--bordeaux);
          background: #fff;
          line-height: 1.5;
        }

        .feedback.success {
          border-color: #28734b;
        }

        .footer {
          text-align: center;
          margin-top: 36px;
          font-size: 12px;
          color: #77706a;
          line-height: 1.8;
        }

        @media (max-width: 700px) {
          .identity,
          .grid {
            grid-template-columns: 1fr;
          }

          .panel {
            padding: 24px 19px;
          }

          .hero {
            padding: 55px 22px 60px;
          }

          .main {
            padding: 28px 16px 65px;
          }
        }
      `}</style>

      <main className="amc-page">
        <header className="hero">
          <div className="hero-inner">
            <div className="kicker">
              International Cigar Sommelier Institute ·
              Advanced Masterclass
            </div>

            <h1>
              Whisky & Cigar
              <br />
              Pairing Evaluation
            </h1>

            <div className="rule" />

            <p>
              Select a cigar from your personal collection and
              use PredictorPro to establish its CPFS family.
              Then evaluate five different whiskies from the
              event selection. Record your cigar, CPFS family
              and pairing rating for each trial.
            </p>
          </div>
        </header>

        <div className="main">
          <form onSubmit={handleSubmit}>
            <section
              className="panel"
              aria-labelledby="participant-title"
            >
              <div className="kicker">
                Step 01 · Participant details
              </div>

              <h2 id="participant-title">
                Your details
              </h2>

              <div className="grid identity">
                <div>
                  <label htmlFor="first-name">
                    First name *
                  </label>

                  <input
                    id="first-name"
                    required
                    maxLength={80}
                    autoComplete="given-name"
                    value={participant.firstName}
                    onChange={(e) =>
                      updateParticipant(
                        "firstName",
                        e.target.value
                      )
                    }
                  />
                </div>

                <div>
                  <label htmlFor="last-name">
                    Last name *
                  </label>

                  <input
                    id="last-name"
                    required
                    maxLength={80}
                    autoComplete="family-name"
                    value={participant.lastName}
                    onChange={(e) =>
                      updateParticipant(
                        "lastName",
                        e.target.value
                      )
                    }
                  />
                </div>

                <div>
                  <label htmlFor="email">
                    Email address *
                  </label>

                  <input
                    id="email"
                    required
                    type="email"
                    maxLength={254}
                    autoComplete="email"
                    value={participant.email}
                    onChange={(e) =>
                      updateParticipant(
                        "email",
                        e.target.value
                      )
                    }
                  />
                </div>
              </div>
            </section>

            <div
              className="note"
              style={{ marginBottom: 26 }}
            >
              <strong>How to evaluate:</strong> Use the
              CPFS family determined by PredictorPro.
              Taste five different whiskies and score
              each pairing from 1 (poor) to 5
              (exceptional). You may repeat the same
              cigar in all five trials.
            </div>

            {trials.map((trial, index) => (
              <section
                className="panel trial"
                key={index}
                aria-labelledby={`trial-title-${index}`}
              >
                <div className="trial-top">
                  <span className="trial-number">
                    Pairing trial{" "}
                    {String(index + 1).padStart(2, "0")}
                    {" / 05"}
                  </span>

                  <span className="muted">
                    Rating 1–5
                  </span>
                </div>

                <h2 id={`trial-title-${index}`}>
                  Whisky pairing {index + 1}
                </h2>

                <div className="grid">
                  <div>
                    <label htmlFor={`cigar-${index}`}>
                      Cigar blend / vitola *
                    </label>

                    <input
                      id={`cigar-${index}`}
                      required
                      maxLength={180}
                      placeholder="Enter cigar name"
                      value={trial.cigar}
                      onChange={(e) =>
                        updateTrial(
                          index,
                          "cigar",
                          e.target.value
                        )
                      }
                    />
                  </div>

                  <div>
                    <label htmlFor={`family-${index}`}>
                      CPFS family *
                    </label>

                    <select
                      id={`family-${index}`}
                      required
                      value={trial.family}
                      onChange={(e) =>
                        updateTrial(
                          index,
                          "family",
                          e.target.value
                        )
                      }
                    >
                      <option value="">
                        Select family
                      </option>

                      {FAMILIES.map((f) => (
                        <option key={f} value={f}>
                          {f}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor={`whisky-${index}`}>
                      Whisky selection *
                    </label>

                    <select
                      id={`whisky-${index}`}
                      required
                      value={trial.whisky}
                      onChange={(e) =>
                        updateTrial(
                          index,
                          "whisky",
                          e.target.value
                        )
                      }
                    >
                      <option value="">
                        Select a whisky
                      </option>

                      {WHISKIES.map((w) => (
                        <option
                          key={w}
                          value={w}
                          disabled={trials.some(
                            (other, i) =>
                              i !== index &&
                              other.whisky === w
                          )}
                        >
                          {w}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor={`rating-${index}`}>
                      Your pairing rating *
                    </label>

                    <select
                      id={`rating-${index}`}
                      required
                      value={trial.rating}
                      onChange={(e) =>
                        updateTrial(
                          index,
                          "rating",
                          e.target.value
                        )
                      }
                    >
                      <option value="">
                        Select rating
                      </option>

                      {RATINGS.map((r) => (
                        <option
                          key={r.value}
                          value={r.value}
                        >
                          {r.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </section>
            ))}

            <section className="panel">
              <div className="kicker">
                Step 03 · Submit evaluations
              </div>

              <h2>
                Complete your masterclass
              </h2>

              <p className="muted">
                Review all five trials before submitting.
                Your results will be used by ICSI to
                analyse pairing preferences and CPFS
                family performance during the event.
              </p>

              <label className="consent">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) =>
                    setConsent(e.target.checked)
                  }
                  required
                />

                <span>
                  I understand that ICSI will collect
                  my name, email and tasting evaluations
                  for event administration and pairing
                  analysis. *
                </span>
              </label>

              {message && (
                <div
                  className={`feedback ${
                    status === "success"
                      ? "success"
                      : ""
                  }`}
                  role="status"
                >
                  {message}
                </div>
              )}

              <button
                className="submit"
                type="submit"
                disabled={
                  status === "submitting" ||
                  status === "success"
                }
              >
                {status === "submitting"
                  ? "SUBMITTING…"
                  : status === "success"
                  ? "EVALUATIONS SUBMITTED"
                  : "SUBMIT MY FIVE PAIRING EVALUATIONS"}
              </button>
            </section>
          </form>

          <div className="footer">
            PredictorPro® · Cigar Peak-Flavor System®
            <br />
            © 2026 International Cigar Sommelier Institute
          </div>
        </div>
      </main>
    </Layout>
  );
}
