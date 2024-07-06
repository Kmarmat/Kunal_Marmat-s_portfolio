import React, { useEffect } from "react";
import "./Techstack.css";
import { TechstackList } from "../../utils/TechstackList";
import AOS from "aos";
import "aos/dist/aos.css";

const Techstack = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, delay: "200" });
  });
  return (
    <>
      <div className="conatainer techstack" id="skills">
        <h1
          className="col-12 mt-3 mb-1 text-center text-uppercase"
          data-aos="flip-down"
        >
          Skills Stack
        </h1>
        <hr />
        <p className="pb-3 text-center" data-aos="fade">
          👉 Programming Languages, Frameworks, Databses, Front-end and Back-end
          tools, Android tools, APIs and Data Analyst Tools.
        </p>

        <div className="row">
          {TechstackList.map((tech) => (
            <div key={tech._id} className="col-md-3" data-aos="zoom-out-left">
              <div className="card m-2">
                <div className="card-content">
                  <div className="card-body">
                    <div className="media d-flex justify-content-center">
                      <div className="alig-self-center">
                        <tech.icon className="tech-icon" />
                      </div>
                      <div className="media-body">
                        <h5>{tech.name}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Techstack;
