import Layout from "../components/Layout";
import Seo from "../components/Seo";

export default function About() {
  return (
    <Layout>
      <Seo
        title="About ICSI"
        description="International Cigar Sommelier Institute (ICSI): Swiss institutional rigor applied to conditioning, staging, diagnostics, and peak-flavor delivery."
        path="/about"
      />

      <div className="section">
        <div className="container">
          <h2>About ICSI</h2>

          <div className="card" style={{ marginTop: 14 }}>
            <p className="small">
              ICSI brings institutional rigor to the point-of-consumption cigar experience, using applied thermodynamics and discreet luxury delivery.
              We focus on controlled conditioning, staging, and diagnostics to improve blend-fidelity and smoking experience consistency across all brands.
            </p>

            <p className="small">
              The institute is founded by Anthony Azar, a thermodynamics engineer with a long relationship with cigars and the cigar world.
              The founder developed the Peak-Flavor System as a result of years of research and testing, employing machine-learning algorithms to
              diagnose and predict optimum smoking conditions for cigar blends (old or new). The model also supports aging and proper conditioning.
            </p>

            <p className="small">
              ICSI is part of CreateDeliverCapture Sàrl, a Geneva-based technical consultancy with offices in Geneva and Dubai.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}