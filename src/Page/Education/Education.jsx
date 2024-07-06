import React, { useEffect } from "react";
import "./Education.css";
import { FaLocationDot } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";

const Education = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, delay: "200" });
  });
  return (
    <>
      <div className="edu" id="education" data-aos="zoom-in-left">
        <h1>Education</h1>
        <div className="row">
          <div className="col-md-4 edu-img">
            <div className="college">
              <img
                src="https://dasaciwg.com/wp-content/uploads/2023/10/IIIT-Jabalpur1.jpeg"
                alt="Profile Pic"
              />
            </div>
            <div className="school">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdcvc8bbh_9nlFFeApy5WR0rcKyKAyqIkNZQ&s"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-8 edu-content">
            <p>
              <h2>College Education</h2>
              <br />
              <h4>🎓 Bachelor of Technology in Computer Science Engineering</h4>
              <br />
              <h5>
                Pandit Dwarka Prasad Mishra Indian Institute of Information
                Technology, Design and Manufacturing, Jabalpur, Madhya Pradesh{" "}
              </h5>
              <p>
                The member of the music club of college "Sazz", literary club
                "Samvaad" and member of the club of social and education welfare
                for rural and backward students "Jagarati". <br />
                Participate in social survey of the backward villages across
                Jabalpur under the DM (District magistrate) of Jabalpur. IIIT
                Jabalpur
                <br />
                <br />
                <FaLocationDot />
                Jabalpur, Madhya Pradesh <br />
              </p>
            </p>
            <p>
              <h2>School Education</h2>
              <br />
              <h5>🏫 Govt. Excellence H. S. School, Madhav nagar, Ujjain</h5>
              <p>
                94% in 10th Board and awarded by the Direct General Of Police
                (DGP) of Madhya Pradesh for the excellent performance in
                education.
                <br />
                <br />
                95% in 12th Board and also the head of Muscic club of the school
                and also lead the annual function of the school as student
                leader and school convener. Also active member of the NSS.
                <br />
                <br />
                <FaLocationDot />
                Ujjain, Madhya Pradesh <br />
              </p>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
