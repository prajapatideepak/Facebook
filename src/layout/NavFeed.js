/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";

export const NavFeed = () => {
  const [username] = useState("Umang");
  const [add, setadd] = useState(false);
  const [message, setMaessage] = useState(false);
  const [notification, setNotification] = useState(false);
  const [more, setMore] = useState(false);

  const [homecolor, sethome] = useState("black");
  const [watch, setwatch] = useState(false);

  const likeblue = () => {
    sethome("blue");
  };
  return (
    <div>
      <navf>
        <Link to="/" style={{ backgroundColor: "white", color: { homecolor } }}>
          <i className="fab fa-facebook" />
        </Link>

        <input
          type="text"
          placeholder="Search Facebook"
          className="fab fa-search"
        />
        <menu>
          <Link to="/home" style={{ color: { homecolor } }} onClick={likeblue}>
            <i class="fas fa-home "></i>
          </Link>
          <Link to="/video">
            <i class="fab fa-youtube"></i>
          </Link>
          <i class="fas fa-store"></i>
          <i class="fas fa-users"></i>
          <i class="fas fa-user-headset"></i>
        </menu>
        <userdetail>
          <i class="fas fa-user-circle"> </i>
          {username}
          <dropmenu>
            <i
              class="fas fa-plus-circle"
              onClick={(e) => {
                setadd(!add);
                setMaessage(false);
                setMore(false);
                setNotification(false);
              }}
            ></i>
            <i
              class="fab fa-facebook-messenger"
              onClick={(e) => {
                setMaessage(!message);
                setadd(false);
                setMore(false);
                setNotification(false);
              }}
            ></i>
            <i
              class="fas fa-bell"
              onClick={(e) => {
                setNotification(!notification);
                setadd(false);
                setMaessage(false);
              }}
            ></i>
            <i
              class="fas fa-caret-down"
              onClick={(e) => {
                setMore(!more);
                setadd(false);
                setMaessage(false);
                setNotification(false);
              }}
            ></i>{" "}
            {add ? (
              <div className="dropdown">
                <h1>Create</h1>
                <li key="post">
                  <a href="/">
                    {" "}
                    <i class="far fa-edit"> Post</i>{" "}
                    <p>Share your post on news feed</p>
                  </a>
                </li>
                <li key="story">
                  <a href="/">
                    <i class="fas fa-book-open"> Story</i>
                    <p>Share a photo or Write Something</p>
                  </a>
                </li>
                <hr />
                <li key="page">
                  <a href="/">
                    <i class="fas fa-flag"> Page</i>
                    <p>Connect and Share with Customers or fans</p>
                  </a>
                </li>
                <li key="Group">
                  <a href="/">
                    <i class="fas fa-users"> Group</i>
                    <p>Connect with People who Share your interst </p>
                  </a>
                </li>
              </div>
            ) : null}
            {message ? (
              <div className="dropdown">
                <h1>message</h1>
                <input type="text" placeholder="Search Contact" />
                <li key="contact">
                  <i class="fas fa-sad-tear"> You have No messages.. </i>
                </li>
                <li key="ost">
                  <a href="/">
                    <button> See All in Messanger</button>
                  </a>
                </li>
              </div>
            ) : null}
            {notification ? (
              <div className="dropdown">
                <h1>Notification</h1>

                <li key="contact">
                  <i class="fas fa-sad-tear"> You have No notification </i>
                </li>
              </div>
            ) : null}
            {more ? (
              <div className="dropdown">
                <h1>{username}</h1>

                <li key="contact">
                  <a href="/">
                    <i class="fas fa-exclamation-triangle"> Give feedback </i>
                  </a>
                  <p></p>
                </li>
                <li>
                  <a href="/">
                    <i class="fas fa-cog"> Setting Privary </i>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i class="fas fa-question-circle"> Help and Support</i>
                  </a>
                </li>

                <li>
                  <a href="/">
                    <i class="fas fa-adjust"> Dark Mode</i>
                  </a>
                </li>

                <li>
                  <a href="/">
                    <i class="fas fa-sign-out-alt"> Log Out</i>
                  </a>
                </li>
              </div>
            ) : null}
          </dropmenu>
        </userdetail>
      </navf>
    </div>
  );
};

export default NavFeed;
