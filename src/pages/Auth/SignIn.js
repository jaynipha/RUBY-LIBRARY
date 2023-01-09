import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import TopNav from "../../components/Nav/topNav";
import "./auth.scss";
import Image from "../../assets/images/Welcome (1).png";
import { login, reset } from "../../features/userSlice";
import { Space, Spin } from "antd";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPassword] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [erroMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { isError, isLoading, user, isSuccess, message } = useSelector(
    (state) => state.userReducer
  );

  const handleEmail = (e) => {
    setEmail(e.target.value.toLowerCase());
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newData = { email, pwd };
    if (isSubmit) {
      console.log(newData);
      dispatch(login(newData));
    }
  };

  console.log(message);

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
    }
  }, [formErrors, isSubmit]);

  useEffect(() => {
    let values = {
      email,
      pwd,
    };
    setFormErrors(validate(values));
  }, [email, pwd]);

  //validation
  const validate = (values) => {
    const errors = { email: "", pwd: "" };
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!values.email) {
      errors.email = "Email is Required";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "Invalid Email Format!";
    }

    if (!values.pwd) {
      errors.pwd = "Password is Required.";
    } else if (!/\d/.test(values.pwd)) {
      errors.pwd = "Password Should Contain AtLeast A Number.";
    } else if (!/[a-z]/.test(values.pwd)) {
      errors.pwd = "Password Should Contain Lower Case.";
    } else if (!/[A-Z]/.test(values.pwd)) {
      errors.pwd = "Password Should Contain Upper Case.";
    } else if (!/[!#=@$%&*)(_-]/.test(values.pwd)) {
      errors.pwd = "Password Should Contain A Special Character.";
    } else if (values.pwd.length < 8) {
      errors.pwd = "Password Should Contain At Least 8 characters.";
    }

    if (errors.email.length === 0 && errors.pwd.length === 0) {
      setIsSubmit(true);
    } else {
      setIsSubmit(false);
    }

    return errors;
  };

  useEffect(() => {
    const controller = new AbortController();
    if (isError) {
      // if (message.response.data === "Unauthorized") {
        setErrorMsg("Error! Invalid username or password");
        setTimeout(() => {
          setErrorMsg("");
        }, 2000);
        dispatch(reset());
      // }
    }
    if (isSuccess) {
      
      dispatch(reset());
      // navigate(from, { replace: true });
      // if (message.roles[0] === 2001) {
        navigate("/home", { replace: true });
      } else {
        // navigate("/profile");
      }
    // }
    return () => controller.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError, isSuccess, isLoading, message, navigate, user]);

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
                  name="pwd"
                  value={pwd}
                  onChange={handlePassword}
                  placeholder="Password"
                />
                <small className="error">{formErrors.pwd}</small>
              </div>

              <input
                className="form-input"
                type="radio"
                name="save_password"
                id=""
              />
              <label htmlFor=""> Save Password</label>

              <p className="error">{erroMsg}</p>
              <button
                className="btn-submit"
                type="submit"
                onClick={handleSubmit}
                disabled={isLoading}
              >
                {isLoading ? (
                  <Space size="middle">
                    <Spin size="small" />
                  </Space>
                ) : (
                  "Log now"
                )}
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
