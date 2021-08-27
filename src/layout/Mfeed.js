/** @format */

import React, { useState, useEffect } from "react";
import Model from "./Model";
import Post from "./Post";

export const Mfeed = () => {
  const [postmodel, setPostModel] = useState(false);
  const [username] = useState("Umang");
  const [textareapost, settextareapost] = useState("");

  const stopmodel = () => {
    setPostModel(false);
  };

  const a = [];
  useEffect(() => {
    a.push({
      name: username,
      text: textareapost,
    });
    //eslint-disable-next-line
  });

  return (
    <div>
      <mfeed>
        <div className="Popost">
          <i class="fas fa-user-circle">
            {" "}
            <input
              type="text"
              placeholder="What's on Your Mind"
              onClick={(e) => setPostModel(true)}
            />
            <hr />
            <mediapost>
              <i class="fas fa-video red">
                {" "}
                <h3> Live Video</h3>{" "}
              </i>
              <i class="fas fa-photo-video green">
                {" "}
                <h3>Photo/Video</h3>{" "}
              </i>
              <i class="fas fa-smile-beam yello">
                <h3>Share Feeling activity</h3>
              </i>
            </mediapost>
            <Model
              postmodel={postmodel}
              stopmodel={stopmodel}
              username={username}
              textareapost={textareapost}
              settextareapost={settextareapost}
            ></Model>
          </i>
        </div>
        <Post />
      </mfeed>
    </div>
  );
};

export default Mfeed;
