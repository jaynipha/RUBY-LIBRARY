import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TopNav from "../../components/Nav/topNav";
import "./auth.scss";
import Image from "../../assets/images/Welcome.png";

const SignUp = () => {
  //state for local component to track error---- validation
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [checkbox, setCheckBox] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleInputs = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheck = (e) => {
    if (e.target.checked) {
      setCheckBox(true);
    } else {
      setCheckBox(false);
    }
  };

  //validation
  const handleValidation = () => {
    setFormErrors(validate(formData));
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
    }
  }, [formErrors, isSubmit]);

  // useEffect(() => {
  
  //   setFormErrors(validate(formData));
  // }, [formData]);

  const validate = (values) => {
    const errors = {};

    let phoneRegex =
      /(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/g;
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

    if (!values.confirm_password) {
      errors.confirm_password = "Confirm Password is Required";
    } else if (values.password !== values.confirm_password) {
      errors.confirm_password = "Passwords Do Not Match.";
    }
    if (!checkbox) {
      errors.checkbox = "Please accept terms and conditions";
    }
    // check for no errors before allowing to send
    if (!values.firstName) {
      errors.firstName = "First Name is Required";
    } else if (values.firstName.length < 3) {
      errors.firstName = "First Name should be more than 3";
    }

    if (!values.lastName) {
      errors.lastName = "Last Name is Required";
    } else if (values.lastName.length < 3) {
      errors.lastName = "Last Name should be more than 3";
    }

    if (!values.phone) {
      errors.phone = "Phone Number is Required";
    } else if (!phoneRegex.test(values.phone)) {
      errors.phone = "Invalid Phone Number";
    }

    // check for no errors before allowing to send

    if (Object.keys(errors).length === 0) {
      setIsSubmit(true);
      //   navigate("/register-contd", {
      // state: formData1,
      // });
      // nextStep();
    } else {
      setIsSubmit(false);
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = {
      firstName: formData.firstName,
      otherName: formData.otherName,
      email: formData.email,
      phone: formData.phone,
      password: formData.password,
      comfirmPassword: formData.confirm_password,
    };
    handleValidation();
    if (isSubmit) {
      // 	resStatus === "success" && clearInputs();
    }
  };

  console.log(formData)

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

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  className="form-input"
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputs}
                  placeholder="First Name *"
                />
                <small className="error">{formErrors.firstName}</small>
              </div>

              <div className="form-group">
                <input
                  className="form-input"
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputs}
                  placeholder="Last Name *"
                />
                <small className="error">{formErrors.lastName}</small>
              </div>
              <div className="form-group">
                <input
                  className="form-input"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputs}
                  placeholder="Mobile *"
                />
                <small className="error">{formErrors.phone}</small>
              </div>

              <div className="form-group">
                <input
                  className="form-input"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputs}
                  placeholder="Email *"
                />
                <small className="error">{formErrors.email}</small>
              </div>

              <div className="form-group">
                <input
                  className="form-input"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputs}
                  placeholder="Password *"
                />
                <small className="error">{formErrors.password}</small>
              </div>

              <div className="form-group">
                <input
                  className="form-input"
                  type="password"
                  name="confirmPassword"
                  value={formData.confirm_password}
                  onChange={handleInputs}
                  placeholder="Re-enter Password *"
                />
                <small className="error">{formErrors.confirm_password}</small>
              </div>

              <input
                className="form-input"
                type="checkbox"
                name="terms"
                value={checkbox}
                onClick={handleCheck}
                id=""
              />
              <label htmlFor="">
                I agree to Terms & conditions in accordance with its privacy
                policy.
              </label>
              <small className="error">{formErrors.checkbox}</small>

              <button
                className="btn-submit"
                type="submit"
                // onClick={() => handleSubmit()}
              >
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
