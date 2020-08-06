import React from "react";

import {
  BrowserRouter as Router
  , Switch, Route
} from "react-router-dom";

import { CurrentUserContext } from "./CurrentUserContext";
import { FiLoader } from "react-icons/fi";

//Components
import Bookmarks from "./Bookmarks";
import HomeFeed from "./HomeFeed";
import Notifications from "./Notifications";
import Profile from "./Profile/Profile";
import TweetDetails from "./TweetDetails";
import Sidebar from "./Sidebar";

//Style
import styled from "styled-components";
import GlobalStyles from "../components/styles/GlobalStyle";
import { SidebarRight } from "./SidebarRight";

const App = () => {
  const {
    loading
  } = React.useContext(CurrentUserContext);
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
              <Route path="/:profile">
                <Profile />
              </Route>
            </Switch>
          </Main>
          <SidebarRight />
        </Wrapper>
      }
    </Router>
  )
};

const Load = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  animation: spin 4s infinite linear;

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