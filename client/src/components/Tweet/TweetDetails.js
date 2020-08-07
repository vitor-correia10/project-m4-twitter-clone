import React from "react";
import styled from "styled-components";
import { FiRepeat } from "react-icons/fi";
import moment from 'moment';

import { SmallAvatar } from "../Avatar";
import { ActionButtons } from '../ActionButtons';

const TweetDetails = ({
    tweet
}) => {
    const date = moment(tweet.timestamp).format("MMM Do");

    let mediaURL;
    if (tweet.media[0]) {
        mediaURL = tweet.media[0].url;
    }

    let retweet;
    if (tweet.retweetFrom) {
        retweet = tweet.retweetFrom.displayName;
    }

    return (
        <>
            <Wrapper>
                {retweet && (
                    <Retweet>
                        <FiRepeat /> {retweet} retweeted
                    </Retweet>
                )}
                <TweetData>
                    <SmallAvatar avatarSrc={tweet.author.avatarSrc} />
                    <TweetText>
                        <TweetAuthor>
                            {tweet.author.displayName}
                            <Handle>@{tweet.author.handle} • {date}</Handle>
                        </TweetAuthor>
                        <TweetDescription>{tweet.status}</TweetDescription>
                    </TweetText>
                </TweetData>
                <TweetImage src={mediaURL} />
                <ActionButtons />
            </Wrapper>
        </>
    )
};

const Wrapper = styled.div`
  width: 100%;
  padding: 15px;
  border-bottom: 1px solid lightgray;

  &:hover{
      background: #F0F0F0;
  }
`
const DisplayName = styled.div`
    font-size: 15px;
    line-height: 20px;
    font-weight: bold;
  `;

const TweetData = styled.div`
    display: flex;
`

const TweetAuthor = styled.p`
    font-weight: 600;
    font-size: 14px;
`

const Handle = styled.span`
    color: darkgray;
    font-size: 12px;
    padding-left: 5px;
    font-weight: 400;
`

const TweetText = styled.div`
    padding-left: 10px;
`

const TweetDescription = styled.div`
    font-size: 14px;
    padding-top: 5px;
`

const TweetImage = styled.img`
    width: 100%;
    border-radius: 10px;
    margin: 10px auto;
`

const Retweet = styled.div`
    padding: 5px 30px;
    color: darkgray;
`

export default TweetDetails;
