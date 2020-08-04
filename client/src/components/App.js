import React from "react";
import styled from 'styled-components';

import {
  BrowserRouter as Router
  , Switch, Route
} from 'react-router-dom';

//Components
import Bookmarks from "./Bookmarks";
import HomeFeed from "./HomeFeed";
import Notifications from "./Notifications";
import Profile from "./Profile";
import TweetDetails from "./TweetDetails";
import Sidebar from "./Sidebar";

//Style
import GlobalStyles from "../components/styles/GlobalStyle";

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Switch>
        <Sidebar />
        <Route exact path="/">
          <HomeFeed />
        </Route>
        <Route path="/notifications">
          <Notifications />
        </Route>
        <Route path="/bookmarks">
          <Bookmarks />
        </Route>
        <Route path="/tweet/:tweetId">
          <TweetDetails />
        </Route>
        <Route path="/:profile">
          <Profile />
        </Route>
      </Switch>
    </Router>
  )
};

export default App;