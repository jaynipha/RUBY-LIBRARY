import { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import Book from "../../assets/images/stackofbooksmockup.png";
import "./topNav.scss";
import bars from "../../assets/images/hamburger.15d0622c.svg";

const TopNav = ({ visible = true, index = false }) => {
  const [open, setOpen] = useState(true);
  const handleClick = () => setOpen(!open);

  const dropbox = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      //cleanup
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const handleClickOutside = (event) => {
    if (dropbox.current && !dropbox.current.contains(event.target)) {
      setOpen(true);
    }
  };
  return (
    <nav ref={dropbox}>
      <div className="nav-header">
        <img src={Book} alt="" className="nav-img" />
        <Link to="/" style={{ color: index ? "#fff" : "#2028F4" }}>
          {" "}
          RUBY'S LIBRARY{" "}
        </Link>
      </div>

      {visible && (
        <>
          <div
            className={open ? "bars-box bars-box-active" : "bars-box"}
            onClick={handleClick}
          >
            <img src={bars} alt="" />
          </div>
          <div className={open ? "nav-contents nav-contents-active" : "nav-contents"}>
            <NavLink activeclassname="active" to="/home">
              {" "}
              Home{" "}
            </NavLink>
            <NavLink activeclassname="active" to="/searchbooks">
              {" "}
              Search{" "}
            </NavLink>
            <NavLink activeclassname="active" to="/about">
              {" "}
              About Us{" "}
            </NavLink>
            <NavLink activeclassname="active" to="/contact">
              {" "}
              Contact Us{" "}
            </NavLink>
          </div>
        </>
      )}
    </nav>
  );
};

export default TopNav;
