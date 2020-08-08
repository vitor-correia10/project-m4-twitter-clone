import React from "react";
import styled from "styled-components/macro";
import { FiHeart, FiMessageCircle, FiRepeat, FiShare } from "react-icons/fi";

export const ActionButtons = () => {
    return (
        <Wrapper>
            <IconButton hover="message">
                <FiMessageCircle />
            </IconButton>
            <IconButton hover="retweet">
                <FiRepeat />
            </IconButton>
            <IconButton hover="heart">
                <FiHeart />
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