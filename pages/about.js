import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout>
      <div className="section">
        <div className="container">
          <h2>About ICSI</h2>
          <div className="card" style={{ marginTop: 14 }}>
            <p className="small">
              ICSI brings institutional rigor to the point-of-consumption cigar experience, using applied thermodynamics and discreet luxury delivery.
              We focus on controlled conditioning, staging, and diagnostics to improve blend-fidelity and smoking experience consistency across all brands.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
