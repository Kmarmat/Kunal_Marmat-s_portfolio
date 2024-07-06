import React, { useEffect } from "react";
import "./Menu.css";
import { FcHome } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";
import { IoSchoolSharp } from "react-icons/io5";
import { SiHyperskill } from "react-icons/si";
import { GiLaptop } from "react-icons/gi";
import { MdContactPhone } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";

const Menu = ({ toggle }) => {
  useEffect(() => {
    AOS.init({ duration: 1500, delay: "200" });
  });
  return (
    <>
      {toggle ? (
        <>
          <div className="navbar-profile-pic" data-aos="zoom-in">
            <img
              src="https://media.licdn.com/dms/image/D4D03AQF6QL5Bo0Ve2w/profile-displayphoto-shrink_200_200/0/1712387094765?e=2147483647&v=beta&t=fTizYL3Rb9b2aiAXoENrD2KHmle_FNMw8DAGU62Aayc"
              alt="Profile Pic"
            />
            <h3>
              Kunal Marmat <br />
            </h3>
            <p>
              <FaLocationDot />
              Ujjain, Madhya Pradesh
            </p>
          </div>

          <div className="navbar-items" data-aos="fade-right">
            <div className="navbar-item">
              <div className="navbar-link">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcHome />
                  Home
                </Link>
              </div>
              <div className="navbar-link">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcAbout />
                  About
                </Link>
              </div>
              <div className="navbar-link">
                <Link
                  to="education"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <IoSchoolSharp />
                  Eduction
                </Link>
              </div>
              <div className="navbar-link">
                <Link
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <SiHyperskill />
                  Skills
                </Link>
              </div>
              <div className="navbar-link">
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <GiLaptop />
                  My Projects
                </Link>
              </div>
              <div className="navbar-link">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <MdContactPhone />
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <h1>
          <div className="navbar-items">
            <div className="navbar-item">
              <div className="navbar-link">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcHome />
                </Link>
              </div>
              <div className="navbar-link">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcAbout />
                </Link>
              </div>
              <div className="navbar-link">
                <Link
                  to="education"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <IoSchoolSharp />
                </Link>
              </div>
              <div className="navbar-link">
                <Link
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <SiHyperskill />
                </Link>
              </div>
              <div className="navbar-link">
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <GiLaptop />
                </Link>
              </div>
              <div className="navbar-link">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <MdContactPhone />
                </Link>
              </div>
            </div>
          </div>
        </h1>
      )}
    </>
  );
};

export default Menu;
