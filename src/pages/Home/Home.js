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
            The Ruby’s library was created majorly to solve the problem of tech
            newbies searching for the right resources and books to start their
            career. The internet is filled with so many resources and anyone
            who’s just starting out can get confused. This is why Ruby’s library
            contains a wide range of educational books in almost the faucets
            of tech which includes - web development, product design, data
            analysis, product management and artificial intelligence.
          </p>
          <p>
            We have a vast library of carefully curated books to meet the needs
            of everyone who’s about to start a career in tech! No matter what
            you’re searching for, you’ll find it here. You can checkout and pay
            for any book you desire.
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
