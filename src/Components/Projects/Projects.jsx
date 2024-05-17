import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="container-fluid my-5 py-5 text-center" id="projects">
      <h3 className="py-5">
        My<span> Projects</span>
      </h3>
      <div className="container my-5">
        <div className="row">
          <div className="col-12 col-md-6 px-4 py-4">
            <a href="https://github.com/lekhireddyvineethreddy/ecommerce-app" target="_blank" rel="noopener noreferrer">
              <img
                src="/assets/project1.png"
                alt="Project 1"
                className="img-fluid shadow rounded projImg"
              />
            </a>
          </div>
          <div className="col-12 col-md-6 px-4 py-4">
            <a href="https://expensetracker-eta-lemon.vercel.app/" target="_blank" rel="noopener noreferrer">
              <img
                src="/assets/project2.png"
                alt="Project 2"
                className="img-fluid shadow rounded projImg"
              />
            </a>
          </div>
          <div className="col-12 col-md-6 px-4 py-4">
            <a href="https://mailbox-gamma.vercel.app/" target="_blank" rel="noopener noreferrer">
              <img
                src="/assets/project3.png"
                alt="Project 3"
                className="img-fluid shadow rounded projImg"
              />
            </a>
          </div>
          <div className="col-12 col-md-6 px-4 py-4">
            <a href="https://vinny-info.vercel.app/" target="_blank" rel="noopener noreferrer">
              <img
                src="/assets/project4.png"
                alt="Project 4"
                className="img-fluid shadow rounded projImg"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
