import React from "react";
import { Link } from "react-router-dom";
import Image from "../../assets/images/404 error.png";
import Back from "../../assets/images/Go Back.png";
import "./confirmation.scss";

const NotFound = () => {
  return (
    <div className="confirmation-container">
      <Link to="/">
        <img className="back-icon" src={Back} alt="" />
      </Link>

      <div className="confirmation-display">
        <img className="bigxv-img2" src={Image} alt="" />
        <h4> Page Not Found! </h4>

        <div style={{ padding: 10 }}>
          <Link className="back-to"to="/"> Go back to Homepage </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
