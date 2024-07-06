import React, { useEffect } from "react";
import "./Contact.css";
import { BsFacebook, BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, delay: "200" });
  });
  return (
    <>
      <div className=" contact" id="contact" data-aos="zoom-in-left">
        <div className="card card0 border-0">
          <div className="row" data-aos="Zoom-in-left">
            <div
              className="col-md-6 col-lg-6 col-xl-6 col-sm-12"
              data-aos="Zoom-in-left"
            >
              <div className="card1">
                <div className="row border-line">
                  <img
                    src="https://img.freepik.com/free-photo/contact-register-feedback-support-help-concept_53876-124243.jpg"
                    alt="ocontact"
                    className="image"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="card2 d-flex card border-0 px-4 py-5">
                <div className="row">
                  <div className="row">
                    <h6>
                      Contact With
                      <a
                        href="https://github.com/Kmarmat"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <BsGithub color="black" size={30} className="ms-2" />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/kunal-marmat-013870237/"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <BsLinkedin color="blue" size={30} className="ms-2" />
                      </a>
                      <a
                        href="https://www.instagram.com/kunal_marmat/"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <BsInstagram color="Red" size={30} className="ms-2" />
                      </a>
                      <a
                        href="https://www.facebook.com/profile.php?id=100079322214804"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <BsFacebook color="blue" size={30} className="ms-2" />
                      </a>
                    </h6>
                  </div>
                  <div className="row px-3 mb-4">
                    <div className="line" />
                    <small className="or text-center">OR</small>
                    <div className="line" />
                  </div>

                  <form action="https://formspree.io/f/mgvweyyv" method="post">
                    <div className="row px-3">
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your Name"
                        className="mb-3"
                        autoComplete="off"
                        required
                      />
                    </div>
                    <div className="row px-3">
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter Your Email Address"
                        className="mb-3"
                        autoComplete="off"
                        required
                      />
                    </div>
                    <div className="row px-3">
                      <textarea
                        type="text"
                        name="msg"
                        placeholder="Write your message"
                        className="mb-3"
                        autoComplete="off"
                        required
                      />
                    </div>
                    <div className="row px-3">
                      <input
                        type="submit"
                        className="submit"
                        value="Send Message"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
