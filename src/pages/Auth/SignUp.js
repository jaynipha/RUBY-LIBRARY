import { useState } from "react";
import { Link } from "react-router-dom";
import TopNav from "../../components/Nav/topNav";
import "./auth.scss";
import Image from "../../assets/images/Welcome.png";

const SignUp = () => {
  return (
    <div className="auth-container">
      <TopNav visible={false} />
      <div className="auth-box">
        <div className="left-auth-container">
          <img src={Image} alt="" />
        </div>

        <div className="right-auth-container">
          <div className="form-container">
            <h2>Sign Up</h2>

            <form action="">
              <div className="form-group">
                <input
                  className="form-input"
                  type="text"
                  name="firstName"
                  value=""
                  placeholder="First Name *"
                />
              </div>

              <div className="form-group">
                <input
                  className="form-input"
                  type="text"
                  name="lastName"
                  value=""
                  placeholder="Last Name *"
                />
              </div>
              <div className="form-group">
                <input
                  className="form-input"
                  type="tel"
                  name="phone"
                  value=""
                  placeholder="Mobile *"
                />
              </div>

              <div className="form-group">
                <input
                  className="form-input"
                  type="email"
                  name="email"
                  value=""
                  placeholder="Email *"
                />
              </div>

              <div className="form-group">
                <input
                  className="form-input"
                  type="password"
                  name="password"
                  value={""}
                  placeholder="Password *"
                />
              </div>

              <div className="form-group">
                <input
                  className="form-input"
                  type="password"
                  name="confirmPassword"
                  value={""}
                  placeholder="Re-enter Password *"
                />
              </div>

              <input
                className="form-input"
                type="radio"
                name="terms"
                id=""
              />
              <label htmlFor="">
                I agree to Terms & conditions in accordance with its privacy
                policy.
              </label>

              <button className="btn-submit" type="submit">
                Sign up
              </button>
            </form>
          </div>

          <p>
            Already have an account? <Link to="/login"> Login </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
