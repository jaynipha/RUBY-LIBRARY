import React from "react";
import TopNav from "../../components/Nav/topNav";
import "./index.scss";
import { Link } from "react-router-dom"

const Index = () => {
  return (
    <div className="index-container">
      {/* <div className="bg-img"></div> */}
      <div className="topnav-container">
      <TopNav visible={false} />
      </div>
      <div className="welcome-container">
        <h1> WELCOME </h1>
        <p>
          Information is life! At THE GREAT LIBRARY we bring information to your
          doorstep with our immense, large storage of resources from different
          writers on important issues of life.
        </p>
        <Link to="/login"> Login </Link>
      </div>
    </div>
  );
};

export default Index;
