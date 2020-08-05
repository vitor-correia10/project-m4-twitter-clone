import React from "react";

import {
  BrowserRouter as Router
  , Switch, Route
} from "react-router-dom";

import { CurrentUserContext } from "./CurrentUserContext";

//Components
import Bookmarks from "./Bookmarks";
import HomeFeed from "./HomeFeed";
import Notifications from "./Notifications";
import Profile from "./Profile";
import TweetDetails from "./TweetDetails";
import Sidebar from "./Sidebar";

//Style
import styled from "styled-components";
import GlobalStyles from "../components/styles/GlobalStyle";

const App = () => {
  const {
    currentUser,
    loading
  } = React.useContext(CurrentUserContext);
  return (
    <Router>
      <GlobalStyles />
      {loading ? <Load>... Loading</Load> :
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
      }
    </Router>
  )
};

const Load = styled.div`
  display:flex;
  height: 100vw;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`
export default App;