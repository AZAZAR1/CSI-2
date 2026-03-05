import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";

export default function Verify() {
  const router = useRouter();
  const { cert } = router.query;

  const [data, setData] = useState(null);
  const [err, setErr] = useState("");

  useEffect(() => {
    if (!cert) return;

    const run = async () => {
      const r = await fetch(`/api/verify?cert=${encodeURIComponent(cert)}`, { cache: "no-store" });
      const j = await r.json();
      if (!r.ok || !j.ok) {
        setErr(j.error || "Not found");
        return;
      }
      setData(j.cert);
    };

    run();
  }, [cert]);

  return (
    <Layout>
      <Seo title="Certificate Verification | ICSI" description="Verify ICSI certificates." path={`/verify/${cert || ""}`} />
      <div className="section">
        <div className="container" style={{ maxWidth: 720 }}>
          <h1>Certificate Verification</h1>

          {err && <div className="notice"><b>Error:</b> {err}</div>}

          {data && (
            <div className="card" style={{ marginTop: 14 }}>
              <p className="small"><b>Certificate ID:</b> {data.certId}</p>
              <p className="small"><b>Candidate:</b> {data.candidateId}</p>
              <p className="small"><b>Program:</b> {data.course}</p>
              <p className="small"><b>Issued:</b> {new Date(data.issuedAt).toLocaleDateString()}</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}