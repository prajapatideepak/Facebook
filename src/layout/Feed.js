/** @format */

import React from "react";
import NavFeed from "./NavFeed";
import { PostProivder } from "./PostContext";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import Videos from "./Videos";

export const Feed = () => {
  return (
    <div className="feed">
      <PostProivder>
        <NavFeed />

        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>

          <Route exact path="/video" component={Videos} />
        </Switch>
      </PostProivder>
    </div>
  );
};

export default Feed;
