import React from "react";
import { Link } from "react-router-dom";
function Login() {
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
        <input
          type="password"
          placeholder="Enter Password"
          className="input-md all-border-input"
        />
      </div>
      <div className="login-btn flex-col-center">
        <button className="btn-primary btn">LOGIN</button>
        <a href="" id="login-link" className="prime-color-text wt-md h5-text">
          Forgot Password?
        </a>
        <Link
          to="/user/register"
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
