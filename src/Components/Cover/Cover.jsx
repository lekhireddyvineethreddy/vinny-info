import React from "react";
import "./Cover.css";

const Cover = () => {
  return (
    <div className="container py-5 mb-5 my-5" id="home">
      <div className="row align-items-center my-5 py-5">
        <div className="col-lg-7 py-5 order-2 order-lg-1 px-4">
          <h4 className="font-weight-bold">Hello, It's me</h4>
          <h2 className="font-weight-bold">Lekhireddy Vineethreddy</h2>
          <h4 className="font-weight-bold mb-4 pb-2">
            I'm a <span>Web Developer</span>
          </h4>
          <p className="font-weight-normal">
            I'm a Student. Interested in Web Development and Freelancing
          </p>

          <div className="social-media py-3">
            <a
              href="https://www.linkedin.com/in/vineeth-reddy-lekhireddy-151370277/"
              target="_blank"
              className="mx-2"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a
              href="https://github.com/lekhireddyvineethreddy"
              target="_blank"
              className="mx-2"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.instagram.com/mr__redwolf/"
              target="_blank"
              className="mx-2"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="mailto:lekhireddyvineeth@gmail.com"
              target="_blank"
              className="mx-2"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
          <button
            onClick={() => window.open("https://drive.google.com/file/d/1JComJLR_YwvLJ18ExG9NMhHo3nx3_gR6/view?usp=sharing", "_blank")}
            className="button my-3"
          >
            Download Resume🫠
          </button>
        </div>
        <div className="col-12 col-lg-4 offset-lg-1 text-center order-1 order-lg-2 py-5">
          <img
            src="../src/assets/my image.jpg"
            alt="vineethreddy"
            className="img-fluid rounded-circle"
          />
        </div>
      </div>
    </div>
  );
};

export default Cover;
