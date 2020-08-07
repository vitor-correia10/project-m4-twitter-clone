import React from "react";
import styled from "styled-components";
import moment from 'moment';

import { Button1 } from "../Buttons";

import { FiMapPin, FiCalendar } from "react-icons/fi";

const Header = ({
  displayName,
  userName,
  avatarSrc,
  bannerSrc,
  location,
  joined,
  bio,
  numFollowing,
  numFollowers
}) => {
  const date = moment(joined).format('MMMM YYYY');
  return (
    <>
      <Banner src={bannerSrc} />
      <Wrapper>
        <EditProfile>
          <Avatar src={avatarSrc} />
          <Button1>Edit Profile</Button1>
        </EditProfile>
        <Name>
          <DisplayName>{displayName}</DisplayName>
          <Username>@{userName}</Username>
        </Name>
        <Bio>{bio}</Bio>
        <Location><FiMapPin /> {location}
          <Joined><FiCalendar /> Joined {date}</Joined>
        </Location>
        <Follow>
          <Following>{numFollowing} </Following> Following
          <Follower> {numFollowers} </Follower> Followers
        </Follow>
      </Wrapper>
    </>
  )
};

const Banner = styled.img`
  width: 100%;
  max-height: 200px;
`

const Wrapper = styled.div`
  padding: 0 15px;
`
const EditProfile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: relative;
  z-index: 2;
  top: -30px;
  box-shadow: 0px 0px 4px 4px white;
`

const Name = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 16px;
`;


const Bio = styled.p`
  margin: 10px auto;
`

const Location = styled.p`
  color: darkgray;
`

const Joined = styled.span`
  padding-left: 20px;
  color: darkgray;
`

const Follow = styled.p`
  color: darkgray;
  margin: 10px auto;
`
const Following = styled.span`
  font-weight: 600;
  color: black;
`
const Follower = styled.span`
  margin-left: 20px;
  font-weight: 600;
  color: black;
`

const DisplayName = styled.div`
    font-size: 15px;
    line-height: 20px;
    font-weight: bold;
  `;

const Username = styled.div`
    font-size: 15px;
    line-height: 20px;
    color: rgb(101, 119, 134);
  `;

export default Header;
