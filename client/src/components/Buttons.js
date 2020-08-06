import React from "react";
import styled from "styled-components";

import { COLORS } from "../../src/components/styles/Constants";

export const Button1 = ({ children }) => {
    return (
        <SmallButton>
            {children}
        </SmallButton>
    )
}

export const Button2 = ({ children }) => {
    return (
        <MediumButton>
            {children}
        </MediumButton>
    )
}

const SmallButton = styled.button`
    background: ${COLORS.primary};
    padding: 8px;
    font-weight: 600;
    border-radius: 25px;
    color: white;
    font-size: 14px;
    margin-top: 5px;
`

const MediumButton = styled.button`
    background: ${COLORS.primary};
    padding: 8px;
    font-weight: 600;
    border-radius: 25px;
    width: 100%;
    max-width: 180px;
    color: white;
    font-size: 16px;
    margin-top: 5px;
`