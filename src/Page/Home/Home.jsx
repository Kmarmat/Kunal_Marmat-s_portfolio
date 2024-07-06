import React, { useEffect } from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/My_new_resume.pdf";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, delay: "200" });
  });
  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="container home-content">
          <h1 data-aos="fade-left">Hi 👋, I 'm Kunal Marmat</h1>

          <h2 data-aos="fade-left">
            <Typewriter
              options={{
                strings: [
                  "Mern Stack Developer .",
                  "Web Developer .",
                  "Android Developer .",
                  "Data Analyst .",
                  "UI/UX Designer .",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>

          <div className="home-btn" data-aos="fade-up">
            <a
              className="btn btn-hire"
              href="https://api.whatsapp.com/send?phone=918827344181"
              rel="noreferrer"
              target="_blank"
            >
              Hire Me
            </a>
            <a
              className="btn btn-resume"
              href={Resume}
              download="Kunal Marmat resume.pdf"
            >
              My Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
