import React from "react";
import { Footer, Nav } from "../../components";
import Login from "./Login";
import { useNavigate } from "react-router-dom";

function User() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/register`;
    navigate(path);
  };
  return (
    <div className="login-page">
      <Nav />
      <div className="login-main flex-col-center">
        <form className="login flex-col">
          <div className="login-head">
            <h3 className="main-h3">
              <span id="login-head" className="prime-color">
                LOGIN
              </span>
              /
              <span id="register-head" onClick={routeChange}>
                REGISTER
              </span>
            </h3>
          </div>
          <div className="login-body flex-col">
            <Login />
            <div id="register-input" className="hide">
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
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default User;
