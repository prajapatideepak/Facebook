/** @format */

import React, { Fragment, useContext } from "react";
import ReactDOM from "react-dom";
import { PostContext } from "./PostContext";

export const Model = ({
  postmodel,
  stopmodel,
  username,
  textareapost,
  settextareapost,
  postthedata,
}) => {
  //eslint-disable-next-line
  const [Post, AddPost] = useContext(PostContext);
  const throwdata = () => {
    //eslint-disable-next-line
    {
      console.log(textareapost);
      AddPost((prevdata) => [
        {
          name: username,
          textofpost: textareapost,
        },
        ...prevdata,
      ]);

      stopmodel();
    }
  };

  if (!postmodel) {
    return null;
  }
  return ReactDOM.createPortal(
    <Fragment>
      <div className="popuppost">
        <div className="postkepost">
          <button onClick={stopmodel} className="close">
            {" "}
            X{" "}
          </button>
          <h1>Create Post</h1>
          <hr />
          <h3>
            <i class="fas fa-user-circle"> </i> {username}
          </h3>
          <select>
            <option value="Public"> Public </option>
            <option value="Friends"> Friends </option>
            <option value="Friends Of Friends"> Friends of Friends </option>
          </select>{" "}
          <br />
          <textarea
            value={textareapost}
            onChange={(e) => settextareapost(e.target.value)}
            onBlur={(e) => settextareapost(e.target.value)}
            placeholder={`What's On Your Mind ??  ${username}`}
          ></textarea>
          <button className="postbutton" onClick={throwdata}>
            {" "}
            Post{" "}
          </button>
        </div>
      </div>
    </Fragment>,
    document.getElementById("model")
  );
};

export default Model;
