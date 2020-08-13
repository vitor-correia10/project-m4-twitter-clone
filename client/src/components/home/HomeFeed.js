import React from "react";
import HomeHeader from "./HomeHeader";

import { TweetContext } from "../Tweet/TweetContext";
import Tweet from "../Tweet/Tweet";
import { ActionButtons } from '../buttons/ActionButtons';

import { Link } from 'react-router-dom';

//style
import styled from 'styled-components/macro';

const HomeFeed = () => {
    const {
        tweetById,
        tweetIds,
    } = React.useContext(TweetContext);
    return (
        <>
            <HomeHeader />
            {tweetIds.map((id) => {
                return (
                    <Wrapper>
                        <Link to={`/tweet/${id}`}>
                            <Tweet
                                tweet={tweetById[id]} key={id}
                            />
                        </Link>
                        <Action>
                            <ActionButtons
                                id={id}
                                numLikes={tweetById[id].numLikes}
                                numRetweets={tweetById[id].numRetweets}
                                isLiked={tweetById[id].isLiked}
                            />
                        </Action>
                    </Wrapper>
                )
            })
            }
        </>
    );
};

const Wrapper = styled.div`
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid lightgray;

  &:hover{
      background: #F0F0F0;
  }
`

const Item = styled.div`
    height: 100px;
`

const Action = styled.div`
    padding-left: 40px;
`

const Load = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  animation: spin 4s infinite linear;
  height: 100vh;

  @keyframes spin {
    from {transform:rotate(0deg);}
    to {transform:rotate(360deg);}
}
`

export default HomeFeed;