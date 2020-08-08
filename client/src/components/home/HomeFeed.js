import React from "react";
import HomeHeader from "./HomeHeader";

import { TweetContext } from "../Tweet/Tweet";
import TweetFeed from "../Tweet/TweetFeed";

import { Link } from 'react-router-dom';

//style
import styled from 'styled-components/macro';

const HomeFeed = () => {
    const {
        tweetById,
        tweetIds
    } = React.useContext(TweetContext);
    console.log('HomeFeed', TweetContext)
    return (
        <>
            <HomeHeader />
            {Object.values(tweetIds).map((id) => {
                console.log(tweetById[id])
                return (
                    <Link to={`/tweet/${tweetById[id]}}`}>
                        <TweetFeed
                            tweet={tweetById[id]} key={id}
                        />
                    </Link>
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