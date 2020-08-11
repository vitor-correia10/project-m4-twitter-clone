import React from "react";

import { FiLoader } from "react-icons/fi";

import styled from "styled-components/macro";

export const TweetContext = React.createContext();

export const TweetProvider = ({ children }) => {
    const [tweetById, setTweetById] = React.useState([]);
    const [tweetIds, setTweetIds] = React.useState([]);
    const [numLikes, setNumLikes] = React.useState();
    const [numRetweets, setNumRetweets] = React.useState();
    const [isLiked, setIsLiked] = React.useState(false);
    const [isRetweeted, setIsRetweeted] = React.useState(false);
    const [loading, setLoading] = React.useState(true);

    const handleToggleLike = (tweetId) => {
        setIsLiked(!isLiked);

        !isLiked ? setTweetById({ ...tweetById, [tweetId]: { ...tweetById[tweetId], numLikes: tweetById[tweetId].numLikes + 1 } }) : setTweetById({ ...tweetById, [tweetId]: { ...tweetById[tweetId], numLikes: tweetById[tweetId].numLikes - 1 } });
    };

    const handleToggleRetweet = (tweetId) => {
        setIsRetweeted(!isRetweeted);

        !isRetweeted ? setTweetById({ ...tweetById, [tweetId]: { ...tweetById[tweetId], numRetweets: tweetById[tweetId].numRetweets + 1 } }) : setTweetById({ ...tweetById, [tweetId]: { ...tweetById[tweetId], numRetweets: tweetById[tweetId].numRetweets - 1 } });
    };

    React.useEffect(() => {
        const fetchTweet = async () => {
            try {
                const response = await fetch("/api/me/home-feed");
                const tweet = await response.json();
                console.log(tweet)
                if (loading) {
                    setTweetById(tweet.tweetsById);
                    setTweetIds(tweet.tweetIds);
                    setNumLikes(tweet.numLikes);
                    setNumRetweets(tweet.numRetweets);
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
            isRetweeted,
            isLiked,
            numLikes,
            numRetweets,
            setNumLikes,
            setNumRetweets,
            handleToggleLike,
            handleToggleRetweet,
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