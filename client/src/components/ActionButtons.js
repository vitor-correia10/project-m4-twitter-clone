import React from "react";
import styled from "styled-components";
import { FiHeart, FiMessageCircle, FiRepeat, FiShare } from "react-icons/fi";

export const ActionButtons = () => {
    return (
        <Wrapper>
            <IconButton>
                <FiHeart />
            </IconButton>
            <IconButton>
                <FiMessageCircle />
            </IconButton>
            <IconButton>
                <FiRepeat />
            </IconButton>
            <IconButton>
                <FiShare />
            </IconButton>
        </Wrapper>
    )
}

const Wrapper = styled.ul`
    display: flex;
    list-style: none;
    justify-content: space-around;
`

const IconButton = styled.button`
    border: none;
    background: none;
    font-size: 20px;
`


