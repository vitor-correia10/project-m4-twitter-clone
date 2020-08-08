import React from "react";
import HomeHeader from "./HomeHeader";

import { TweetContext } from "../Tweet/Tweet";
import TweetDetails from "../Tweet/TweetDetails";

//style
import styled from 'styled-components';

const HomeFeed = () => {
    const {
        tweetById,
        tweetIds
    } = React.useContext(TweetContext);
    console.log(TweetContext)
    return (
        <>
            <HomeHeader />
            {Object.values(tweetIds).map((id) => {
                return (
                    <TweetDetails
                        tweet={tweetById[id]} key={id}
                    />
                )
            })
            }

        </>
    );
};

const Item = styled.div`
    height: 100px;
`

export default HomeFeed;