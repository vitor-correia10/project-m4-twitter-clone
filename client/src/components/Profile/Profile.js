import React from "react";

import Header from "./Header";

import { CurrentUserContext } from "../CurrentUserContext";
import { TweetContext } from "../Tweet/TweetContext";
import Tweet from "../Tweet/Tweet";

//style
import styled from 'styled-components/macro';
import HomeFeed from "../home/HomeFeed";

const Profile = () => {
    const {
        currentUser,
        tweetById
    } = React.useContext(CurrentUserContext, TweetContext);
    return (
        <>
            <Header
                bannerSrc={currentUser.bannerSrc}
                avatarSrc={currentUser.avatarSrc}
                displayName={currentUser.displayName}
                userName={currentUser.handle}

                location={currentUser.location}
                joined={currentUser.joined}
                bio={currentUser.bio}
                numFollowing={currentUser.numFollowing}
                numFollowers={currentUser.numFollowers}
            />
        </>
    )
};


export default Profile;