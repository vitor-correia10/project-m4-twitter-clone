import React from "react";
import styled from "styled-components/macro";
import Navigation from "./Navitagion";


const Body = ({
    displayName,
    userName,
    avatarSrc,
    bannerSrc,
    location,
    joined,
    bio,
    numFollowing,
    numFollowers,
    children
}) => {
    return (
        <>
            <Navigation />
            {children}
        </>

    )
};



export default Body;
