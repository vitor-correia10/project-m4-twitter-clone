import React from "react";
import styled from "styled-components/macro";
import { FiHeart, FiMessageCircle, FiRepeat, FiShare } from "react-icons/fi";

import { TweetContext } from "../Tweet/TweetContext";

export const ActionButtons = ({ onClick }) => {
    const {
        numOfLikes,
        numOfRetweets,
        handleToggleLike,
        handleToggleRetweet,
    } = React.useContext(TweetContext);

    return (
        <Wrapper>
            <IconButton>
                <FiMessageCircle />
            </IconButton>
            <IconButton
                hover="retweet"
                onClick={handleToggleRetweet}
                numOfRetweets={numOfRetweets}
            >
                <FiRepeat />
                <ActionNumber> {numOfRetweets}</ActionNumber>
            </IconButton>
            <IconButton
                hover="heart"
                onClick={handleToggleLike}
                numOfLikes={numOfLikes}
            >
                <FiHeart />
                <ActionNumber> {numOfLikes} </ActionNumber>
            </IconButton>
            <IconButton>
                <FiShare />
            </IconButton>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    list-style: none;
    justify-content: space-around;
`

const IconButton = styled.button`
    border: none;
    background: none;
    font-size: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 8px;

    &:hover{
        background: ${props => props.hover === "heart" ? "rgba(255,204,203, 0.5)" : props.hover === "retweet" ? "rgba(208,240,192, 0.5)" : "rgba(173,216,230, 0.5)"};
        border-radius: 50%;
        padding: 8px;
    }
`

const ActionNumber = styled.span`
    font-size: 14px;
    padding-left: 5px;
    color: darkgray;
`