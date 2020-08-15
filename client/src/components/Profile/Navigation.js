import React from "react";

import { NavLink } from 'react-router-dom';
import { CurrentUserContext } from "../CurrentUserContext";

//style
import styled from 'styled-components/macro';
import { COLORS } from "../styles/Constants";


const Navigation = () => {
    const {
        currentUser,
    } = React.useContext(CurrentUserContext);
    return (
        <Wrapper>
            <List>
                <NavigationLink to={`/${currentUser.handle}`} exact activeClassName="selected">Tweets</NavigationLink>
            </List>
            <List>
                <NavigationLink to={`/${currentUser.handle}/media`} activeClassName="selected">Media</NavigationLink>
            </List>
            <List>
                <NavigationLink to={`/${currentUser.handle}/likes`} activeClassName="selected">Likes</NavigationLink>
            </List>
        </Wrapper >
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
    padding: 10px 5px;
    width: 100%;
    text-align: center;
    
    &:hover{
        background: ${COLORS.primaryOpacity};
    }

    &.selected{
        text-decoration: underline;
    }
`

const NavigationLink = styled(NavLink)`
  text-decoration: none;

  &.selected{
    color: ${COLORS.primary};
  }
`

export default Navigation;