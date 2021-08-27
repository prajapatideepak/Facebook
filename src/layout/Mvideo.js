/** @format */

import React, { useState } from "react";
import video1 from "../videos/1. Browser JavaScript vs Node.js.mp4";
import video2 from "../videos/2. Globals in Node.js.mp4";
import video3 from "../videos/3. Node.js Modules.mp4";
import video4 from "../videos/4. Creating Node Modules.mp4";

function Mvideo() {
  const [colori, setcolor] = useState("black");
  const [like, setomarlike] = useState(0);
  const styleOfLike = () => {
    if (colori === "black") {
      setcolor("blue");
      setomarlike(like + 1);
    } else {
      setcolor("black");
      setomarlike(like - 1);
    }

    console.log("click ho raha he");
  };
  var style = {
    color: colori,
  };

  const videos = [
    {
      username: "Deepak",
      src: video1,
      textarea: "This is so funny",
      id: 1,
    },
    {
      username: "Deepak",
      src: video2,
      textarea: "This is so funny",
      id: 2,
    },
  ];
  return (
    <div className="mvideo">
      {videos.map((video) => {
        return (
          <div key={video.id}>
            <h1>{video.username}</h1>
            <p>{video.textarea}</p>
            <video src={video.src} controls></video>
            <hr />
            <button id="butforlike" onClick={styleOfLike}>
              {" "}
              <i style={style} class="fas fa-thumbs-up like">
                {like}{" "}
              </i>
            </button>
            <i class="fas fa-comment comment"> Comment</i>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default Mvideo;
