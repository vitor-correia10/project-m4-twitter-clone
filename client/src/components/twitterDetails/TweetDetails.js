import React from "react";
import styled from "styled-components/macro";
import { useParams } from "react-router-dom";

import { FiLoader } from "react-icons/fi";

import Details from "./Details";

import Head from "../Head";
import GoBack from "../GoBack";

import { ActionButtons } from '../buttons/ActionButtons';

const TweetDetails = () => {
    const { tweetId } = useParams();

    const [tweet, setTweet] = React.useState();
    const [loading, setLoading] = React.useState(true);

    const fetchTweet = async () => {
        try {
            const response = await fetch(`/api/tweet/${tweetId}`);
            const tweetInfo = await response.json();
            setTweet(tweetInfo.tweet);
            setLoading(false);
        } catch (err) {
            console.log('Error Tweet Message', err);
        }
    };
    React.useEffect(() => {
        fetchTweet();
    }, []);
    if (loading) {
        return <Load> <FiLoader /></Load>
    }
    return (
        <>
            <Head>
                <GoBack />
                Meow
            </Head>
            <Details
                tweet={tweet}
            >
                <ActionButtons
                    id={tweet.id}
                    numLikes={tweet.numLikes}
                    numRetweets={tweet.numRetweets}
                    onRetweet={fetchTweet}
                    onLike={fetchTweet}
                />
            </Details>
        </>
    )
};

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

export default TweetDetails;