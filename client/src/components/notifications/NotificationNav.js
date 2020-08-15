import React from "react";

import { NavLink } from 'react-router-dom';

//style
import styled from 'styled-components/macro';
import { COLORS } from "../styles/Constants";


const NotificationNav = () => {
    return (
        <Wrapper>
            <List>
                <NavigationLink to="/notifications" exact activeClassName="selected">All</NavigationLink>
            </List>
            <List>
                <NavigationLink to="/notifications/mentions" exact activeClassName="selected">Mentions</NavigationLink>
            </List>
        </Wrapper>
    )
};

const Wrapper = styled.ul`
    width: 100%;
    min-width: 240px;
    border-bottom: 1px solid lightgray;
    display: flex;
    flex-direction: row;
    font-size: 18px;
    font-weight: 600;
    list-style-type:none;
    justify-content: space-around;
`;

const Image = styled.img`
    width: 80px;
    margin-bottom: 20px;
`

const List = styled.li`
    padding: 15px;
    width: 100%;
    text-align: center;

    &:hover{
        background: ${COLORS.primaryOpacity};
    }
`

const NavigationLink = styled(NavLink)`
  text-decoration: none;

  &.selected{
    color: ${COLORS.primary};
  }
`

export default NotificationNav;