/** @format */

import React, { useContext } from "react";
import { PostContext } from "./PostContext";
import Postk from "./Postk";

export const Post = ({ username, textareapost }) => {
  const [Post] = useContext(PostContext);

  return (
    <div>
      {Post.map((po) => {
        console.log(po);
        return <Postk po={po} key={po.id} />;
      })}
    </div>
  );
};

export default Post;
