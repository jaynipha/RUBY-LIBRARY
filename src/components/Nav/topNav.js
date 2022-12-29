import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Book from "../../assets/images/stackofbooksmockup.png"
import "./topNav.scss";

const TopNav = ({ visible = true, index = false }) => {
  return (
    <nav>
      <div className="nav-header">
        <img src={Book} alt="" className="nav-img"/>
        <Link to="/" style={{ color: index ? "#fff" : "#2028F4" }}> RUBY'S LIBRARY </Link>
      </div>

      {visible && (
        <>
          <div className="nav-contents">
            <NavLink to="/home"> Home </NavLink>
            <NavLink to="/search"> Search </NavLink>
            <NavLink to="/about"> About Us </NavLink>
            <NavLink to="/contact"> Contact Us </NavLink>
          </div>
        </>
      )}
    </nav>
  );
};

export default TopNav;
