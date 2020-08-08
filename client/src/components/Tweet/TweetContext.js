import React from "react";

import { FiLoader } from "react-icons/fi";

import styled from "styled-components/macro";

export const TweetContext = React.createContext();

export const TweetProvider = ({ children }) => {
    const [tweetById, setTweetById] = React.useState([]);
    const [tweetIds, setTweetIds] = React.useState([]);
    const [numOfLikes, setNumOfLikes] = React.useState();
    const [numOfRetweets, setNumOfRetweets] = React.useState();
    const [isLiked, setIsLiked] = React.useState(false);
    const [isRetweeted, setIsRetweeted] = React.useState(false);
    const [loading, setLoading] = React.useState(true);

    const handleToggleLike = () => {
        setIsLiked(!isLiked);

        !isLiked ? setNumOfLikes(numOfLikes + 1) : setNumOfLikes(numOfLikes - 1);
    };

    const handleToggleRetweet = () => {
        setIsRetweeted(!isRetweeted);

        !isRetweeted ? setNumOfRetweets(numOfRetweets + 1) : setNumOfRetweets(numOfRetweets - 1);
    };

    React.useEffect(() => {
        const fetchTweet = async () => {
            try {
                const response = await fetch("/api/me/home-feed");
                const tweet = await response.json();
                if (loading) {
                    setTweetById(tweet.tweetsById);
                    setTweetIds(tweet.tweetIds);
                    setNumOfLikes(tweet.numOfLikes);
                    setLoading(false);
                }
            } catch (err) {
                console.log('Error Tweet Message', err);
            }
        };
        fetchTweet();
    }, []);

    if (loading) {
        return <Load> <FiLoader /></Load>
    }
    return (<TweetContext.Provider
        value={{
            tweetById,
            tweetIds,
            loading,
            handleToggleLike,
            handleToggleRetweet,
            isRetweeted,
            isLiked,
            numOfLikes,
            numOfRetweets,
        }}>
        {children}
    </TweetContext.Provider>
    );
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