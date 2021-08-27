/** @format */

import React, { useState } from "react";

export const Postk = ({ po }) => {
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

  return (
    <div>
      <div id="posst" key={po.id}>
        <div>
          <i class="fas fa-user-circle"></i>
          <h1>{po.name}</h1>
          <p>{po.textofpost}</p>
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
      </div>
    </div>
  );
};

export default Postk;
