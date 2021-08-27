/** @format */

import React, { useState } from "react";

function Lvideo() {
  const [Search, onSearch] = useState("Search Video......");
  return (
    <div className="lvideo">
      <div>
        <h1>Watch</h1>
        <input
          type="text"
          placeholder={Search}
          onChange={(e) => onSearch(e.target.value)}
        />
        <li key="youtube-watch">
          <h3>
            <i class="fab fa-youtube"></i>
            Home
          </h3>
        </li>
        <li key="video">
          <h3>
            <i class="fas fa-video"></i>
            Shows
          </h3>
        </li>
        <li key="live-movie">
          <h3>
            <i class="fas fa-play-circle"></i>
            Live
          </h3>
        </li>
        <li key="saved">
          <h3>
            <i class="fas fa-file-download"></i>
            Saved
          </h3>
        </li>
        <hr />
        <h2>Your WatchList</h2>
      </div>
    </div>
  );
}

export default Lvideo;
