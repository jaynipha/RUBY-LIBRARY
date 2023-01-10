import React from "react";
import TopNav from "../../components/Nav/topNav";
import photo from "../../assets/images/Man reading a book about science.png";
import "./index.scss";

const About = () => {
  return (
    <div className="about-container">
      <TopNav />
      <div className="about-contents">
        <div className="left-section">
          <img src={photo} alt="" />
        </div>
        <div className="right-section">
          <h3> About Us </h3>
          <h5>We Are The Best Go TO Online Library for Tech Resources</h5>
          <p>
            Ruby’s library remains the best at the game in curating the best
            tech resources for everyone. Whether you’re looking to start a new
            career or improving upon the one you already have, our resources are
            your best guide.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
