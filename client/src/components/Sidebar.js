import React from "react";
import styled from 'styled-components';

import logo from "../assets/logo.svg"

import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <Wrapper>
            {/* <Logo>logo</Logo> */}
            <Navigation>
                <li>
                    <NavigationLink to="/" exact activeClassName="selected">Home</NavigationLink>
                </li>
                <li>
                    <NavigationLink to="/profile/abc" exact activeClassName="selected">Profile</NavigationLink>
                </li>
                <li>
                    <NavigationLink to="/notifications" exact activeClassName="selected">Notifications</NavigationLink>
                </li>
                <li>
                    <NavigationLink to="/bookmarks" exact activeClassName="selected">Bookmarks</NavigationLink>
                </li>
            </Navigation>
        </Wrapper>
    )
};

const Wrapper = styled.aside`
    height: 100vw;
    width: 30%;
    font-size: 16px;
    font-weight: 600;
    border-right: 1px solid lightgray;
`;

const Navigation = styled.ul`
    display: flex;
    flex-direction: column;
    font-size: 22px;
    list-style-type:none;
  `

const NavigationLink = styled(NavLink)`
  text-decoration: none;
  margin-left: 15px;

  &.selected{
    color: red;
    text-decoration-line: underline;
  }
`

export default Sidebar;