import React from "react";
import styled from "styled-components";

export const SidebarRight = () => {
    return (
        <Wrapper />
    )
}

const Wrapper = styled.div`
    @media (min-width: 800px) {
        
        width: 20%;
        min-width: 100px;
        border-left: 1px solid lightgray;
    }
`