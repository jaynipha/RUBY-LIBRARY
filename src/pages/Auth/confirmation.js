import React from "react";
import { Link } from "react-router-dom";
import Image from "../../assets/images/Completed successfully.png";
import Back from "../../assets/images/Go Back.png";
import "./confirmation.scss";

const Confirmation = () => {
  return (
    <div className="confirmation-container">
      <Link to="/">
        <img className="back-icon" src={Back} alt="" />
      </Link>
      <div className="confirmation-display">
        <img className="bigxv-img" src={Image} alt="" />
        <h4> Success! </h4>

        <div className="txt-box">
          <p>
            Congratulations you have successfully signed up on The Ruby’s
            Library and your account is ready.
          </p>
        </div>

        <div style={{ padding: 10 }}>
          <Link className="to-login-link" to="/login">
            {" "}
            Login Now{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
