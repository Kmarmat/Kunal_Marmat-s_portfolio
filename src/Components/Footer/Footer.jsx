import React, { useEffect } from "react";
import "./Footer.css";
import { FaHome } from "react-icons/fa";
import { FaEnvelope, FaPhone } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, delay: "200" });
  });
  return (
    <>
      <div className="footer bg-dark">
        <div
          className=" footer-content row py-4 text-white text-center"
          data-aos="fade"
        >
          <div className=" col-md-4 col-sm-12">
            <h3 className="text-warning">Kunal Marmat's Portfolio</h3>
            <br />
            <p>
              Thank you for visiting my personal portfolio website. Connect with
              me over socials. Always try to be best version of yourself🚀
            </p>
          </div>
          <div className="col-md-4 col-sm-12">
            <h3 className="text-warning text-center">Contact Info</h3>
            <br />
            <FaHome /> Ujjain, Madhya Pradesh, India - 456010 <br></br>
            <br></br>
            <FaPhone /> +91 8827344181 <br></br>
            <br></br>
            <FaEnvelope /> marmatkunal2909@gmail.com<br></br>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
