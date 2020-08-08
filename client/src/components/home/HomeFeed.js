import React from "react";
import HomeHeader from "./HomeHeader";

import { TweetContext } from "../Tweet/TweetContext";
import Tweet from "../Tweet/Tweet";

import { Link } from 'react-router-dom';

//style
import styled from 'styled-components/macro';

const HomeFeed = () => {
    const {
        tweetById,
        tweetIds
    } = React.useContext(TweetContext);
    console.log('HomeFeed', tweetIds)
    return (
        <>
            <HomeHeader />
            {tweetIds.map((id) => {
                console.log('HomeFeed *****', tweetById[id].id)

                return (
                    <Link to={`/tweet/${id}`}>
                        <Tweet
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