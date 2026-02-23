import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout>
      <div className="section">
        <div className="container">
          <h2>About CSI</h2>
          <div className="card" style={{ marginTop: 14 }}>
            <p className="small">
              CSI brings institutional rigor to the point-of-consumption cigar experience — using applied science and discreet luxury delivery.
              We focus on controlled conditioning, staging, and diagnostics that improve consistency across brands, vintages, and environments.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}