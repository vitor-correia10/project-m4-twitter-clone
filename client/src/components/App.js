import React from "react";

import {
  BrowserRouter as Router
  , Switch, Route
} from "react-router-dom";

import { CurrentUserContext } from "./CurrentUserContext";
import { TweetContext } from "./Tweet/TweetContext";
import { FiLoader } from "react-icons/fi";

//Components
import Bookmarks from "./bookmarks/Bookmarks";
import HomeFeed from "./home/HomeFeed";
import Notifications from "./notifications/Notifications";
import Profile from "./profile/Profile";
import TweetDetails from "./twitterDetails/TweetDetails";
import Sidebar from "./sidebar/Sidebar";
import Followers from "./follow/Followers";
import Following from "./follow/Following";

//Style
import styled from "styled-components/macro";
import GlobalStyles from "../components/styles/GlobalStyle";
import { SidebarRight } from "./sidebar/SidebarRight";

const App = () => {
  const {
    loading
  } = React.useContext(CurrentUserContext);
  const {
    tweetById
  } = React.useContext(TweetContext);
  return (
    <Router>
      <GlobalStyles />
      {loading ? <Load> <FiLoader /></Load> :
        <Wrapper>
          <Sidebar />
          <Main>
            <Switch>
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
              <Route exact path="/:profile">
                <Profile />
              </Route>
              <Route path="/:profile/followers">
                <Followers />
              </Route>
              <Route path="/:profile/following">
                <Following />
              </Route>
            </Switch>
          </Main>
          <SidebarRight />
        </Wrapper>
      }
    </Router >
  )
};

const Load = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  animation: spin 4s infinite linear;
  height: 100vh;

  @keyframes spin {
    from {transform:rotate(0deg);}
    to {transform:rotate(360deg);}
}
`
const Wrapper = styled.div`
  display: flex;
`

const Main = styled.div`
  width: 65%;
`
export default App;