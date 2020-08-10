import React from "react";
import styled from 'styled-components/macro';

const Head = ({ children }) => {
    return (
        <>
            <Header>
                {children}
            </Header>
        </>
    )
};

const Header = styled.div`
    border-bottom: 1px solid lightgray;
    padding: 10px;
    font-size: 22px;
    font-weight: 600;
`

export default Head;