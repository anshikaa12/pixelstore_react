import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  function passwordHandler() {
    setPasswordVisibility(!passwordVisibility);
  }
  return (
    <div>
      <div id="login-input">
        <h4 className="main-h4">Username</h4>
        <input
          type="text"
          placeholder="Enter Username"
          className="input-md all-border-input"
        />
        <h4 className="main-h4">Password</h4>
        <div className="password-div">
          <input
            type={passwordVisibility ? "text" : "password"}
            placeholder="Enter Password"
            className="input-md all-border-input"
          />
          <i className="fas fa-eye-slash" onClick={passwordHandler}></i>
        </div>
      </div>
      <div className="login-btn flex-col-center">
        <button className="btn-primary btn">LOGIN</button>
        <Link to="/" id="login-link" className="prime-color-text wt-md h5-text">
          Forgot Password?
        </Link>
        <Link
          to="/register"
          id="register-link"
          className="prime-color-text wt-md h5-text"
        >
          Don't have an account? Register here
        </Link>
      </div>
    </div>
  );
}

export default Login;
