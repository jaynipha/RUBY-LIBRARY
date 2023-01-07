import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TopNav from "../../components/Nav/topNav";
import "./auth.scss";
import Image from "../../assets/images/Welcome (1).png";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [erroMsg, setErrorMsg] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newData = { email, password };
    if (isSubmit) {
      console.log(newData);
    }
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
    }
  }, [formErrors, isSubmit]);

  useEffect(() => {
    let values = {
      email,
      password,
    };
    setFormErrors(validate(values));
  }, [email, password]);

  //validation
  const validate = (values) => {
    const errors = { email: "", password: "" };
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!values.email) {
      errors.email = "Email is Required";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "Invalid Email Format!";
    }

    if (!values.password) {
      errors.password = "Password is Required.";
    } else if (!/\d/.test(values.password)) {
      errors.password = "Password Should Contain AtLeast A Number.";
    } else if (!/[a-z]/.test(values.password)) {
      errors.password = "Password Should Contain Lower Case.";
    } else if (!/[A-Z]/.test(values.password)) {
      errors.password = "Password Should Contain Upper Case.";
    } else if (!/[!#=@$%&*)(_-]/.test(values.password)) {
      errors.password = "Password Should Contain A Special Character.";
    } else if (values.password.length < 8) {
      errors.password = "Password Should Contain At Least 8 characters.";
    }

    if (errors.email.length === 0 && errors.password.length === 0) {
      setIsSubmit(true);
    } else {
      setIsSubmit(false);
    }

    return errors;
  };
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
                  value={email}
                  onChange={handleEmail}
                  placeholder="Email"
                />
                <small className="error">{formErrors.email}</small>
              </div>

              <div className="form-group">
                <input
                  className="form-input"
                  type="password"
                  name="password"
                  value={password}
                  onChange={handlePassword}
                  placeholder="Password"
                />
                <small className="error">{formErrors.email}</small>
              </div>

              <input
                className="form-input"
                type="radio"
                name="save_password"
                id=""
              />
              <label htmlFor=""> Save Password</label>

              <button
                className="btn-submit"
                type="submit"
                onClick={handleSubmit}
              >
                Login now
              </button>
            </form>
            <div
              style={{
                textAlign: "center",
              }}
            >
              <Link to={"/forgotpassword"}> Forgot Password </Link>
            </div>
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
