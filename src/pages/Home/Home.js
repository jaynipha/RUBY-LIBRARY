import React from "react";
import TopNav from "../../components/Nav/topNav";
import photo from "../../assets/images/Component 1.png";
import "./index.scss";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <TopNav />
      <div className="home-contents">
        <div className="left-section">
          <p>
            The Ruby’s Library was created in the year 2019 by the Ruby project
            team of the Nsonye project program to solve learner and designer’s
            need of accessing right resources during research and teases
            studies.
          </p>
          <p>
            Libero ultrices risus egestas in aliquam eu. Tincidunt pretium ac
            purus a nibh. Purus nulla lacus egestas fusce vitae morbi. Elit nunc
            eget facilisis sed nec dictumst ornare. Consequat non pulvinar duis
            sed. Et mattis tempor ipsum facilisi vivamus morbi. Vitae tortor
            dictumst felis viverra. Massa duis facilisis et nibh porta purus at.
            Pulvinar commodo porttitor pulvinar justo vitae elementum
          </p>

          <div>
            <Link to="/searchbooks"> Available books </Link>
          </div>
        </div>
        <div className="right-section">
          <img src={photo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
