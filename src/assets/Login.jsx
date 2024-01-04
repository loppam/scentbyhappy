import { useState } from "react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [Username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Username === "Admin" && password === "Admin") {
      console.log("Logged in as Admin");
      navigate("/admin");
    } else {
      console.log("Not submitted");
      alert("Wrong Details");
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h3>Admin Login</h3>
        <input
          type="text"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
          placeholder="Username"
        />
        <input
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          type="password"
          placeholder="Password"
        />
        <button type="submit">Submit</button>
        <Link className="button-86" to="/explore">{"<-Go Back"}</Link>
      </form>
    </div>
  );
};

export default Login;
