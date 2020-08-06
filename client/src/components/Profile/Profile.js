import React from "react";

import Header from "./Header";

import { CurrentUserContext } from "../CurrentUserContext";

//style
import styled from 'styled-components';

const Profile = () => {
    const {
        currentUser
    } = React.useContext(CurrentUserContext);
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
            >
            </Header>
        </>
    )
};


export default Profile;