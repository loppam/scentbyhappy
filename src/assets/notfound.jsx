import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
const notfound = () => {
  return (
    <div>
      <Header />
      <div className="the_error">
        <img src="/img/404.png" alt="not found" />
        <h2 className="err">Page Not Found</h2>
        <p>
          Back to <Link to="/">Home</Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default notfound;
