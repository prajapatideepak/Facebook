/** @format */

import React, { useState, createContext } from "react";

export const PostContext = createContext();

export const PostProivder = (props) => {
  const [Post, AddPost] = useState([
    {
      name: "Deepak",
      textofpost:
        "The wave crashed and hit the sandcastle head-on. The sandcastle began to melt under the waves force and as the wave receded, half the sandcastle was gone. The next wave hit, not quite as strong, but still managed to cover the remains of the sandcastle and take more of it away. The third wave, a big one, crashed over the sandcastle completely covering and engulfing it. When it receded, there was no trace the sandcastle ever existed and hours of hard work disappeared forever.",
      id: Math.floor(Math.random() * 1000),
      isLIked: false,
    },
    {
      name: "Vikas",
      textofpost:
        "The wave crashed and hit the sandcastle head-on. The sandcastle began to melt under the waves force and as the wave receded, half the sandcastle was gone. The next wave hit, not quite as strong, but still managed to cover the remains of the sandcastle and take more of it away. The third wave, a big one, crashed over the sandcastle completely covering and engulfing it. When it receded, there was no trace the sandcastle ever existed and hours of hard work disappeared forever.",
      id: Math.floor(Math.random() * 1000),
      isLIked: false,
    },
    {
      name: "Gautam",
      textofpost:
        "The wave crashed and hit the sandcastle head-on. The sandcastle began to melt under the waves force and as the wave receded, half the sandcastle was gone. The next wave hit, not quite as strong, but still managed to cover the remains of the sandcastle and take more of it away. The third wave, a big one, crashed over the sandcastle completely covering and engulfing it. When it receded, there was no trace the sandcastle ever existed and hours of hard work disappeared forever.",
      id: Math.floor(Math.random() * 1000),
      isLIked: false,
    },
    {
      name: "Chirag",
      textofpost:
        "me faug hu .... aur me SuperHero bhi hu me spiderman hu........",
      isLIked: false,
      id: Math.floor(Math.random() * 1000), // returns a random integer from 0 to 9
    },
  ]);
  return (
    <PostContext.Provider value={[Post, AddPost]}>
      {props.children}
    </PostContext.Provider>
  );
};
