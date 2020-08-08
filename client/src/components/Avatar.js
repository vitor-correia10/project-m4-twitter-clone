import React from "react";
import styled from "styled-components/macro";

export const SmallAvatar = ({ avatarSrc }) => {
  return (

    <Image src={avatarSrc} />

  );
};

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 0px 0px 4px 4px white;
`