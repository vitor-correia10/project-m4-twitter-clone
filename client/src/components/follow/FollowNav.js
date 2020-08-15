import React from "react";

import { NavLink } from 'react-router-dom';

//style
import styled from 'styled-components/macro';
import { COLORS } from "../styles/Constants";
import { CurrentUserContext } from "../CurrentUserContext";


const FollowNav = () => {
    const {
        currentUser,
    } = React.useContext(CurrentUserContext);
    return (
        <Wrapper>
            <List>
                <NavigationLink to={`/${currentUser.handle}/following`} exact activeClassName="selected">Following</NavigationLink>
            </List>
            <List>
                <NavigationLink to={`/${currentUser.handle}/followers`} exact activeClassName="selected">Followers</NavigationLink>
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

export default FollowNav;