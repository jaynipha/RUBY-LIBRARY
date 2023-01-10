import React from "react";
import TopNav from "../../components/Nav/topNav";
import "./index.scss";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="index-container">
      {/* <div className="bg-img"></div> */}
      <div className="topnav-container">
        <TopNav visible={false} index={true} />
      </div>
      <div className="welcome-container">
        <h1> WELCOME </h1>
        <p>
          Information is life! <br />
          At RUBY's LIBRARY, we bring you a wide range of educational resources
          that meets the needs of users in the tech industry.
        </p>
        <Link to="/login"> Login </Link>
      </div>
    </div>
  );
};

export default Index;
