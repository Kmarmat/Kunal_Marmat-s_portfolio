import React, { useEffect } from "react";
import "./Projects.css";
import Project3 from "..//..//assets/docs/Rohit_sharma_statistics.pbix";
import AOS from "aos";
import "aos/dist/aos.css";
const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, delay: "200" });
  });
  return (
    <>
      <div className="continer project" id="projects">
        <h1
          className="col-12 mt-3 mb-1 text-center text-uppercase"
          data-aos="flip-down"
        >
          About My porjects
        </h1>

        <hr />

        <div className="para" data-aos="zoom-in-left">
          <h3 className="mt-5 pb-3 text-justify">
            1. Full Stack Online Examination System :
          </h3>
          <p className="mt-1 pb-1 text-justify">
            Developed a comprehensive Online Examination System as part of a
            team project. Designed and implemented the frontend using HTML and
            CSS to ensure a user-friendly interface. Integrated PHP for database
            management and SQL for efficient backend operations, ensuring secure
            and seamless data handling. This project showcased proficiency in
            full stack development, encompassing frontend design, backend
            functionality, and database management to deliver a robust online
            platform for conducting examinations.
          </p>
          <h3 className="mt-5 pb-3 text-justify">
            2. Py game Visual Graphics Generation :
          </h3>
          <p className="mt-1 pb-1 text-justify">
            Implemented a visual graphics generation project using Pygame with
            Python as the primary coding language. Developed interactive and
            visually appealing graphics through Pygame's libraries,
            demonstrating proficiency in Python for both frontend visualizations
            and backend logic. This project highlighted skills in game
            development, including event handling, animation, and user interface
            design, leveraging Pygame's capabilities to create engaging
            graphical applications.
          </p>
          <h3 className="mt-5 pb-3 text-justify">
            3. Time Management Application :
          </h3>
          <p className="mt-1 pb-1 text-justify">
            Developed a comprehensive Time Management application using Java and
            Kotlin for Android frontend development, and React with Node.js for
            web frontend and backend implementation. Integrated Firebase to
            manage backend functionalities including real-time database
            operations and user authentication. Ensured seamless synchronization
            of data across platforms to enhance productivity and organizational
            capabilities.
          </p>
          <h3 className="mt-5 pb-3 text-justify">
            4. Alma Website Development :
          </h3>
          <p className="mt-1 pb-1 text-justify">
            Designed and developed a responsive website for a new startup using
            React. Implemented modern UI/UX principles to create a user-friendly
            interface. Collaborated closely with stakeholders to ensure the
            website met business goals and brand identity. Integrated
            functionalities to enhance user engagement and optimize performance.
          </p>
          <h3 className="mt-5 pb-3 text-justify">
            5.Working on college academic android Project "Fusion" :
          </h3>
          <p className="mt-1 pb-1 text-justify">
            Currently involved in the development of "Fusion," an Android
            project for college. Contributing to the design and implementation
            of features aimed at enhancing user experience and functionality.
            Collaborating within a team to ensure project milestones are met and
            aligning with project objectives. Gaining hands-on experience in
            Android development, problem-solving, and teamwork.
          </p>
          <h3 className="mt-5 pb-3 text-justify">
            6. Machine Learning Project: Cutting Tool Remaining Useful Life
            (RUL) Prediction :
          </h3>
          <p className="mt-1 pb-1 text-justify">
            Led a project focused on predicting the Remaining Useful Life (RUL)
            of cutting tools using machine learning techniques. Implemented
            classification models including Support Vector Machines (SVM),
            K-Nearest Neighbors (KNN), and Gaussian Naive Bayes (GNB) to
            classify tool conditions. Additionally, applied regression models
            such as Convolutional Neural Networks (CNN), Long Short-Term Memory
            networks (LSTM), and Light GBM for accurate RUL estimation. Analyzed
            and compared model performances to optimize predictive accuracy and
            reliability. Developed insights into tool maintenance scheduling and
            operational efficiency through data-driven approaches.
          </p>
          <h3 className="mt-5 pb-3 text-justify">
            7. Rohit Sharama Career Statistics Analysis Dash Board ( Data
            Analytics ) :
          </h3>
          <p className="mt-1 pb-5 text-justify">
            Making a user friendly data analysis dashboard based on rohit sharma
            career statistics of Test , ODI and T20I Cricket format and year
            wise innings with help of Google sheets ,Excel, Power BI and data
            analytics concept .
          </p>
        </div>

        <h1
          className="col-12 mt-3 mb-1 text-center text-uppercase"
          data-aos="flip-down"
        >
          Top recent Projects
        </h1>
        <hr />
        {/* card design */}
        <div className="row" id="ads">
          <div className="col-md-4" data-aos="flip-left">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">
                  Full stack Development
                </span>
                <img
                  src="https://media.licdn.com/dms/image/D4D12AQG4IB_DzzIwAw/article-cover_image-shrink_600_2000/0/1684046370605?e=2147483647&v=beta&t=sj6vy0ji1qj5m3HPUyUkjyTJYSjVDknAr6wliLCE0wY"
                  alt="project1"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">HTML</span>
                <span className="card-detail-badge">CSS</span>
                <span className="card-detail-badge">PHP</span>
                <span className="card-detail-badge">MY SQL</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5>Online Examination system</h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://github.com/Kmarmat/Online_Exam_system.git"
                >
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4" data-aos="flip-left">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Website development</span>
                <img
                  src="https://media.licdn.com/dms/image/D4D12AQGXY8rVDHU2wQ/article-cover_image-shrink_720_1280/0/1683186693180?e=2147483647&v=beta&t=scw7bN0fCM3g4FKEpHMdk_TWNxY1jbv2pgHudGQ0Reo"
                  alt="project2"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Reactjs</span>
                <span className="card-detail-badge">Scss</span>
                <span className="card-detail-badge">Nodejs</span>
                <span className="card-detail-badge">Tailwind</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5>"Alma" Website</h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://github.com/Kmarmat/Newalmaweb.git"
                >
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4" data-aos="flip-left">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">
                  Data Analyst dashboard
                </span>
                <img
                  src="https://s3-alpha.figma.com/hub/file/5078515398/a52473a4-ef26-4abc-9bc5-6b6630184b25-cover.png"
                  alt="project1"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">MS Excel</span>
                <span className="card-detail-badge">Google sheets</span>
                <span className="card-detail-badge">Power BI</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5>Rohit Sharama Dashboard</h5>
                </div>

                <a className="ad-btn" href={Project3}>
                  View
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
