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
              International Cigar Sommelier Institute (ICSI), a Switzerland-based educational organization dedicated to advancing professional knowledge and structured training in the field of premium cigars.
              ICSI has developed a scientific and structured educational framework around cigar diagnostics, sensory evaluation, and optimal storage and staging. 
              Our programs are designed to bring academic rigor and standardized methodology to an industry that has traditionally relied on informal expertise.
              We ensure that our courses meet the highest standards of educational quality, transparency, and pedagogical structure.
            </p>
            <p className="small">
              ICSI is currently headquartered in Geneva and our objective is to establish the institute as the global reference for professional cigar education through structured, research-based training programs.
            </p>
            <p className="small">
              The institute is founded by Anthony Azar, a thermodynamics engineer with a long relationship with cigars and the cigar world.
              The founder developed the Cigar Peak-Flavor System as a result of years of research and testing, employing machine-learning algorithms to
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
