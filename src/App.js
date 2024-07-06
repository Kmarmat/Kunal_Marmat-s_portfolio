import Layout from "./Components/Layout/Layout";
import About from "./Page/About/About";
import Education from "./Page/Education/Education";
import Techstack from "./Page/Techstack/Techstack";
import Projects from "./Page/projects/Projects";
import Contact from "./Page/Contact/Contact";
import ScrollToTop from "react-scroll-to-top";
import MobileNav from "./Components/MobileNav/Moblienav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <>
      <ToastContainer />
      <MobileNav />
      <Layout />
      <div className="container">
        <About />
        <Education />
        <Techstack />
        <Projects />
        <Contact />
      </div>
      <Footer />
      <ScrollToTop
        smooth
        color="white"
        style={{ backgroundColor: "Black", borderRadius: "80px" }}
      />
    </>
  );
}

export default App;
