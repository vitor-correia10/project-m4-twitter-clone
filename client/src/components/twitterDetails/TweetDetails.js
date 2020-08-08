import React from "react";
import styled from "styled-components/macro";
import { useParams } from "react-router-dom";

import { FiLoader } from "react-icons/fi";

import Details from "./Details"


const TweetDetails = () => {
    const { tweetId } = useParams();

    const [tweet, setTweet] = React.useState();
    const [loading, setLoading] = React.useState(true);


    console.log('TweetDetails', tweetId);

    React.useEffect(() => {
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
        fetchTweet();
    }, []);
    if (loading) {
        return <Load> <FiLoader /></Load>
    }
    return (
        <>
            <Head>
                Meow
            </Head>
            <Details
                tweet={tweet}
            />
        </>
    )
};

const Head = styled.div`
    border-bottom: 1px solid lightgray;
    padding: 10px;
    font-size: 22px;
    font-weight: 600;
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

export default TweetDetails;