import React from "react";
import styled from 'styled-components';

import Logo from "../assets/logo.svg";

import { NavLink } from 'react-router-dom';

import { COLORS } from "../../src/components/styles/Constants";

import { FiHome, FiBell, FiBookmark, FiUser } from "react-icons/fi";

const Sidebar = () => {
    return (
        <Wrapper>
            <Image src={Logo} alt="critter logo" />
            <Navigation>
                <List>
                    <NavigationLink to="/" exact activeClassName="selected"> <FiHome /> Home</NavigationLink>
                </List>
                <List>
                    <NavigationLink to="/profile/abc" exact activeClassName="selected"> <FiUser /> Profile</NavigationLink>
                </List>
                <List>
                    <NavigationLink to="/notifications" exact activeClassName="selected"> <FiBell /> Notifications</NavigationLink>
                </List>
                <List>
                    <NavigationLink to="/bookmarks" exact activeClassName="selected"> <FiBookmark /> Bookmarks</NavigationLink>
                </List>
            </Navigation>
            <Button>Meow</Button>
        </Wrapper>
    )
};

//Style
const Wrapper = styled.aside`
    height: 100vw;
    width: 25%;
    min-width: 240px;
    border-right: 1px solid lightgray;
    padding: 20px 10px 20px 50px;
`;

const Image = styled.img`
    width: 80px;
    margin-bottom: 20px;
`

const Navigation = styled.ul`
    display: flex;
    flex-direction: column;
    font-size: 20px;
    font-weight: 600;
    list-style-type:none;
`

const List = styled.li`
    margin-bottom: 20px;
    padding: 5px;
`

const NavigationLink = styled(NavLink)`
  text-decoration: none;

  &.hover{
        background: black;
        padding: 10px;
        color: white;
    }

  &.selected{
    color: ${COLORS.primary};
  }
`

const Button = styled.button`
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

export default Sidebar;