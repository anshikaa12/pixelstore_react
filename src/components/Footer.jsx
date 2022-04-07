import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <p className="foot-p">
        Made with <i className="fas fa-heart prime-color-text"></i> by Anshika
        Agarwal
      </p>
      <ul className=" complement-text-color nav-links flex-row">
        <Link
          to="https://github.com/anshikaa12"
          className="nav-connect-a li-link-a"
        >
          <li className="connect-link li-link">
            <i className="fab fa-github i-link-connect"></i>
          </li>
        </Link>
        <Link
          to="https://twitter.com/anshikaa_12"
          target="_blank"
          className="nav-connect-a li-link-a "
        >
          <li className="connect-link li-link i-link-connect">
            <i className="fab fa-twitter"></i>
          </li>
        </Link>
        <Link
          to="https://www.linkedin.com/in/anshikaagarwal12/"
          target="_blank"
          className="nav-connect-a li-link-a"
        >
          <li className="connect-link li-link">
            <i className="fab fa-linkedin-in i-link-connect"></i>
          </li>
        </Link>
      </ul>
      <p className="foot-p  flex-col-center">© 2022 PixelUI</p>
    </div>
  );
}

export default Footer;
