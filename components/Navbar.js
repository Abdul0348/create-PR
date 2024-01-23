import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div>
          <li>
            <ul>
              {" "}
              <a href="/">Home</a>
            </ul>
          </li>
          <li>
            <ul>
              {" "}
              <a href="/contact">Contact Us</a>
            </ul>
          </li>
        </div>
      </div>
    </>
  );
};

export default Navbar;
