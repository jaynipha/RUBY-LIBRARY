import { useState } from "react";
import { Link } from "react-router-dom";
import TopNav from "../../components/Nav/topNav";
import "./auth.scss";
import Image from "../../assets/images/Welcome (1).png";

const SignIn = () => {
  return (
    <div className="auth-container">
      <TopNav visible={false} />
      <div className="auth-box">
        <div className="left-auth-container">
          <img src={Image} alt="" />
        </div>

        <div className="right-auth-container">
          <div className="form-container">
            <h2>Login</h2>

            <form action="">
              <div className="form-group">
                <input
                  className="form-input"
                  type="email"
                  name="email"
                  value={""}
                  placeholder="Email"
                />
              </div>

              <div className="form-group">
                <input
                  className="form-input"
                  type="password"
                  name="password"
                  value={""}
                  placeholder="Password"
                />
              </div>

              <input
                className="form-input"
                type="radio"
                name="save_password"
                id=""
              />
              <label htmlFor=""> Save Password</label>

              <button className="btn-submit" type="submit">
                {" "}
                Login now
              </button>
            </form>

            <Link to={"/forgotpassword"}> Forgot Password </Link>
          </div>

          <p>
            Don't have an account? <Link to="/signup"> Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
