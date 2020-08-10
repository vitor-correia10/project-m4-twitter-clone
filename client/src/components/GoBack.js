import React from "react";
import { useHistory } from "react-router-dom";

import { FiArrowLeft } from "react-icons/fi";

import styled from "styled-components/macro";
import { COLORS } from "../../src/components/styles/Constants";

const GoBack = () => {
    let history = useHistory();

    return (
        <Return onClick={() => history.goBack()}> <FiArrowLeft /></Return>
    )
}

const Return = styled.button`
    outline: none;
    border: none;
    background: none;
    font-size: 16px;
    margin-right: 15px;
    cursor: pointer;
`

export default GoBack