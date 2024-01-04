import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="content">
        <img className="bg" src="/img/bg.png" alt="" />
        <p>SCENTS BY HAPPY</p>
      </Link>
    </div>
  );
};

export default Navbar;
