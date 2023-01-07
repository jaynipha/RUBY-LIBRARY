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
            Whether you do a search for ux resources, web dev resources or a
            variety of other highly competitive resources in the world of tech,
            we completely dominate our competitors at our own game. Further ,
            you will see we are the top rated online library with 235 reviews on
            google giving us 4.8 stars.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
