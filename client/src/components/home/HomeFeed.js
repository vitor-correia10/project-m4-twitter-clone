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
        tweetIds
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

export default HomeFeed;