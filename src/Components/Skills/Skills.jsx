import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="container-fluid my-5 py-5 text-center" id="skills">
      <h3 className="py-5 ">
        My <span>Tech Stack </span> {/* &#9733 &#9733 */}
      </h3>
      <div className="container my-5 py-5 text-center" id="skillsContainer">
        <div className="row align-items-center justify-content-center">
          <div className="col-12 col-lg-6 my-3">
            <div className="row mx-3 align-items-center mb-5 justify-content-center">
              <div className="col-6 col-lg-4 py-3 px-3">
                <a href="#" className="text-decoration-none">
                  <img
                    src="../src/assets/icons/html.png"
                    alt="HTML"
                    className="img-fluid w-50"
                  />
                  <h6 className="text-white mt-3">
                    
                  </h6>
                </a>
              </div>
              <div className="col-6 col-lg-4 py-3 px-3">
                <a href="#" className="text-decoration-none">
                  <img
                    src="../src/assets/icons/css.png"
                    alt="CSS"
                    className="img-fluid w-50"
                  />
                  <h6 className="text-white mt-3">
                   
                  </h6>
                </a>
              </div>
              <div className="col-6 col-lg-4 py-3 px-3">
                <a href="#" className="text-decoration-none">
                  <img
                    src="../src/assets/icons/js.png"
                    alt="JavaScript"
                    className="img-fluid w-50"
                  />
                  <h6 className="text-white mt-3">
                   
                  </h6>
                </a>
              </div>
              <div className="col-6 col-lg-4 py-3 px-3">
                <a href="#" className="text-decoration-none">
                  <img
                    src="../src/assets/icons/bootstrap.png"
                    alt="Bootstrap"
                    className="img-fluid w-50"
                  />
                  <h6 className="text-white mt-3">
                   
                  </h6>
                </a>
              </div>
              <div className="col-6 col-lg-4 py-3 px-3">
                <a href="#" className="text-decoration-none">
                  <img
                    src="../src/assets/icons/java.png"
                    alt="Java"
                    className="img-fluid w-50"
                  />
                  <h6 className="text-white mt-3">

                  </h6>
                </a>
              </div>
              <div className="col-6 col-lg-4 py-3 px-3">
                <a href="#" className="text-decoration-none">
                  <img
                    src="../src/assets/icons/react.png"
                    alt="React"
                    className="img-fluid w-50"
                  />
                  <h6 className="text-white mt-3">
                  
                  </h6>
                </a>
              </div>
              <div className="col-6 col-lg-4 py-3 px-3">
                <a href="#" className="text-decoration-none">
                  <img
                    src="../src/assets/icons/redux.png"
                    alt="Redux"
                    className="img-fluid w-50"
                  />
                  <h6 className="text-white mt-3">

                  </h6>
                </a>
              </div>
              <div className="col-6 col-lg-4 py-3 px-3">
                <a href="#" className="text-decoration-none">
                  <img
                    src="../src/assets/icons/next-js.png"
                    alt="Next"
                    className="img-fluid w-50"
                  />
                  <h6 className="text-white mt-3">

                  </h6>
                </a>
              </div>
              <div className="col-6 col-lg-4 py-3 px-3">
                <a href="#" className="text-decoration-none">
                  <img
                    src="../src/assets/icons/firebase.png"
                    alt="Firebase"
                    className="img-fluid w-50"
                  />
                  <h6 className="text-white mt-3">

                  </h6>
                </a>
              </div>

            </div>
            <p className="my-3 mx-3" id="skillsText">
              Embrace growth, each step forward gets you closer transforming
              <span> mastery</span>. <br />
              Build upon your skills, transforming
              <span> 3s into 4s</span>, and <span>4s into 5s</span>, one at a
              time..!!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
