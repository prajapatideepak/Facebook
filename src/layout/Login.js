/** @format */

import React from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <content>
      <div className="login">
        <div className="loginr">
          <img
            src={"https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"}
            alt="logo"
          />
          <p>
            Facebook helps you connect and share <br /> with the people in your
            life.
          </p>
        </div>
        <div className="loginl">
          <box>
            {" "}
            <input
              type="text"
              placeholder="Email address or phone number"
            />{" "}
            <br />
            <input type="pass" placeholder="Password" /> <br />
            <Link to="/home">
              <button className="logbut"> Log in </button> <br />
            </Link>
            <a href="www.google.com"> Forgotten account ?</a>
            <hr />
            <button className="newbut">Create new account</button>
          </box>
        </div>{" "}
      </div>
      <div className="footer">
        <p>
          English (UK) ગુજરાતી हिन्दी मराठी اردو മലയാളം বাংলা తెలుగు தமிழ்
          ਪੰਜਾਬੀ
          <hr />
          Español Sign Up Log In Messenger Facebook Lite Watch People Pages Page
          categories Places Games Locations Marketplace Facebook PayGroups
          Oculus Portal Instagram LocalFund raisersServices AboutCreate adCreate
          PageDevelopers Careers Privacy Cookies AdChoices Terms Help Settings
          Activity log Facebook © 2020
        </p>
      </div>
    </content>
  );
};

export default Login;
