import React from "react";

import { NavLink } from 'react-router-dom';
import { COLORS } from "../styles/Constants";
import { Button2 } from "../buttons/Buttons";
//style
import styled from 'styled-components/macro';
import Logo from "../../assets/logo.svg";
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
                    <NavigationLink to="/profile" exact activeClassName="selected"> <FiUser /> Profile</NavigationLink>
                </List>
                <List>
                    <NavigationLink to="/notifications" exact activeClassName="selected"> <FiBell /> Notifications</NavigationLink>
                </List>
                <List>
                    <NavigationLink to="/bookmarks" exact activeClassName="selected"> <FiBookmark /> Bookmarks</NavigationLink>
                </List>
            </Navigation>
            <Button2>Meow</Button2>
        </Wrapper>
    )
};

//Style
const Wrapper = styled.aside`
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
    font-size: 18px;
    font-weight: 600;
    list-style-type:none;
`

const List = styled.li`
    margin-bottom: 15px;
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

export default Sidebar;