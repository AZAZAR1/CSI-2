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

              The institute is founded by Anthony Azar, a thermodynamics engineer who has a profound and long relationship with cigars and the cigar world. The founder developed the Peak-Flavor System that is the result of years of research and testing, employing machine-learning algorithms in the process to diagnose and predict the optimum smoking conditions for any cigar blend in the world (old or new). The scientific model also supports aging and proper conditioning.
              
              ICSI is part of CreateDeliverCapture Sarl. A Geneva based technical consultancy firm with offices in Geneva and Dubai. 
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
