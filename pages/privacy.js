import Layout from "../components/Layout";

export default function Privacy() {
  return (
    <Layout>
      <div className="section">
        <div className="container">
          <h2>Privacy Policy</h2>
          <div className="card" style={{ marginTop: 14 }}>
            <p className="small">
              CSI collects personal information submitted via contact forms solely to respond to inquiries and manage applicant communications.
              We do not sell personal data. You may request deletion by contacting CSI.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}