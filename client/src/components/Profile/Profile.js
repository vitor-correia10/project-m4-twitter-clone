import React from "react";

import Header from "./Header";

import { CurrentUserContext } from "../CurrentUserContext";
import { TweetContext } from "../Tweet/Tweet";
import TweetDetails from "../Tweet/TweetDetails";

//style
import styled from 'styled-components';

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

            <TweetDetails

            />

        </>
    )
};


export default Profile;