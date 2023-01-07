import React from "react";
import TopNav from "../../components/Nav/topNav";
import photo from "../../assets/images/young man in headset using computer.png";
import "./index.scss";

const Contact = () => {
  return (
    <div className="about-container">
      <TopNav />
      <div className="about-contents">
        <div className="left-section">
          <img src={photo} alt="" />
        </div>
        <div className="right-section">
          <h3> Contact Us </h3>
          <div className="contact-section">
            <div className="cs-email">
              <h4> Email</h4>
              <p> Ruby’sLibrary@hotmail.com</p>
              <p>Rubyonlinelibrary729@gmail.com</p>
            </div>

            <div className="cs-email">
              <h4>Contact</h4>
              <p> 01-0773245-6778</p>
              <p> +222700234570178</p>
            </div>
          </div>
          <div className="newsletter">
            <label htmlFor=""> Subscribe to our Newsletter </label>
            <div className="newsletter-form">
              <input
                type="text"
                className="newsletter-input"
                placeholder="enter email..."
              />
              <button type="submit"> Subscribe </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
