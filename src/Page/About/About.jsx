import React, { useEffect } from "react";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, delay: "200" });
  });
  return (
    <>
      <div className="about" id="about" data-aos="zoom-in-left">
        <div className="row">
          <div className="col-md-4 about-img">
            <img
              src="https://media.licdn.com/dms/image/D4D03AQF6QL5Bo0Ve2w/profile-displayphoto-shrink_200_200/0/1712387094765?e=2147483647&v=beta&t=fTizYL3Rb9b2aiAXoENrD2KHmle_FNMw8DAGU62Aayc"
              alt="Profile Pic"
            />
          </div>
          <div className="col-md-8 about-content">
            <h1>About Me</h1>
            <p>
              Hello! I'm Kunal Marmat, a passionate Computer Science Engineering
              student with a diverse skill set and a keen interest in various
              facets of technology. My journey in the tech world has equipped me
              with expertise in web development, particularly as a MERN stack
              developer, and in Android development. I have a flair for frontend
              development and UI/UX design, which allows me to create intuitive
              and visually appealing user interfaces.
              <br />
              <br />
              In addition to my development skills, I am also a data analyst
              with a growing interest in machine learning and artificial
              intelligence. This blend of skills enables me to tackle a wide
              range of technical challenges and continuously expand my knowledge
              in emerging technologies.
              <br />
              <br />
              Beyond my professional pursuits, I indulge in various creative and
              intellectual hobbies. I enjoy painting, which allows me to express
              my artistic side, and singing, which brings me joy and relaxation.
              Playing the harmonium is another passion of mine, offering a
              melodic escape from my technical work. Additionally, I have a deep
              interest in history and the research of philosophies, which
              broadens my perspective and enriches my understanding of the
              world.
              <br />
              <br />
              Feel free to explore my portfolio to see my projects and get in
              touch if you'd like to collaborate or learn more about my work.
              Thank you for visiting!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
