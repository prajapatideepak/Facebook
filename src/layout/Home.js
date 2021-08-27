/** @format */

import React, { useState } from "react";
import Lfeed from "./Lfeed";
import Mfeed from "./Mfeed";

function Home() {
  const [username] = useState("Umang");

  return (
    <div>
      <Lfeed username={username} />
      <Mfeed />
    </div>
  );
}

export default Home;
