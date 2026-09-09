import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout({ children, topBanner = null }) {
  return (
    <>
      {topBanner}
      <Nav />
      {children}
      <Footer />
    </>
  );
}
