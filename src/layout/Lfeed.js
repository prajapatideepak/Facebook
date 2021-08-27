/** @format */

import React, { useState, Fragment } from "react";

export const Lfeed = ({ username }) => {
  const [seemore, setSeemore] = useState(false);
  return (
    <div>
      <sidebar>
        <h2>
          <i class="fas fa-user-circle"> </i> {username} Prajapati
        </h2>
        <h2>
          <i class="fas fa-briefcase-medical"></i>
          COVID - 19 information Center
        </h2>
        <h2>
          <i class="fas fa-flag"> </i>
          Pages
        </h2>
        <h2>
          <i class="fas fa-users"></i>
          Friends
        </h2>
        <h2>
          <i class="fas fa-sms"></i>
          messenger
        </h2>
        <h2>
          <i class="fas fa-store"></i>
          Market Place
        </h2>
        <h2 onClick={(e) => setSeemore(!seemore)}>
          <i class="fas fa-caret-down">See More </i>
        </h2>
        {seemore ? (
          <Fragment>
            <h2>
              <i class="fas fa-briefcase-medical"></i>
              COVID - 19 information Center
            </h2>
            <h2>
              <i class="fas fa-users"> </i>
              Groups
            </h2>
            <h2>
              <i class="fab fa-youtube"></i>
              Videos
            </h2>
            <h2>
              <i class="fab fa-youtube"></i>
              Movies
            </h2>
            <h2>
              <i class="fab fa-youtube"></i>
              Most Recent
            </h2>
            <h2>
              <i class="fab fa-youtube"></i>
              Friend List
            </h2>
          </Fragment>
        ) : null}
        <hr />
      </sidebar>
    </div>
  );
};

export default Lfeed;
