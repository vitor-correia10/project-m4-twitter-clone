import React from "react";
import styled from "styled-components";

import { SmallAvatar } from "../Avatar";

import moment from 'moment';

const TweetDetails = ({
    tweet
}) => {
    const date = moment(tweet.timestamp).format("MMM Do");
    let mediaURL;
    if (tweet.media[0]) {
        mediaURL = tweet.media[0].url;
    }
    return (
        <>
            <Wrapper>
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
            </Wrapper>
        </>
    )
};

const Wrapper = styled.div`
  width: 100%;
  padding: 10px;
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
export default TweetDetails;
