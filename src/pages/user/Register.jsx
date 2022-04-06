import React from "react";
import { Footer, Nav } from "../../components";

function Register() {
  return (
    <div className="login-page">
      <Nav />
      <div className="login-main flex-col-center">
        <form className="login flex-col">
          <div className="login-head">
            <h3 className="main-h3">REGISTER</h3>
          </div>
          <div id="register-input">
            <h4 className="main-h4">First Name</h4>
            <input
              type="text"
              placeholder="Enter First name"
              className="input-md all-border-input"
            />
            <h4 className="main-h4">Last Name</h4>
            <input
              type="text"
              placeholder="Enter Last name"
              className="input-md all-border-input"
            />
            <h4 className="main-h4">Email</h4>
            <input
              type="text"
              placeholder="Enter email"
              className="input-md all-border-input"
            />
            <h4 className="main-h4">Password</h4>
            <input
              type="password"
              placeholder="Enter Password"
              className="input-md all-border-input"
            />
            <h4 className="main-h4">Re-Enter Password</h4>
            <input
              type="password"
              placeholder="Re-Enter Password"
              className="input-md all-border-input"
            />
          </div>
          <div className="login-btn flex-col-center">
            <button className="btn-primary btn">REGISTER</button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export { Register };
