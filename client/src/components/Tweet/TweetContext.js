import React from "react";

import { FiLoader } from "react-icons/fi";

import styled from "styled-components/macro";

export const TweetContext = React.createContext();

export const TweetProvider = ({ children }) => {
    const [tweetById, setTweetById] = React.useState([]);
    const [tweetIds, setTweetIds] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    const handleToggleLike = (tweetId) => {
        const isLiked = tweetById[tweetId].isLiked
        fetch(`/api/tweet/${tweetId}/like`, {
            "method": "PUT",
            "headers": {
                "content-type": "application/json"
            },
            "body": JSON.stringify({
                "like": !isLiked
            })
        })
            .then(response => {

                console.log('***', isLiked)
                !isLiked ? setTweetById({ ...tweetById, [tweetId]: { ...tweetById[tweetId], numLikes: tweetById[tweetId].isLiked + 1 } }) : setTweetById({ ...tweetById, [tweetId]: { ...tweetById[tweetId], numLikes: tweetById[tweetId].isLiked - 1 } });

            })
            .catch(err => {
                console.log(err);
            });
    }
    const handleToggleRetweet = (tweetId) => {
        const isRetweeted = tweetById[tweetId].isRetweeted
        fetch(`/api/tweet/${tweetId}/retweet`, {
            "method": "PUT",
            "headers": {
                "content-type": "application/json"
            },
            "body": JSON.stringify({
                "retweet": !isRetweeted
            })
        })
            .then(response => {
                !isRetweeted ? setTweetById({ ...tweetById, [tweetId]: { ...tweetById[tweetId], numRetweets: tweetById[tweetId].isRetweeted + 1 } }) : setTweetById({ ...tweetById, [tweetId]: { ...tweetById[tweetId], numRetweets: tweetById[tweetId].isRetweeted - 1 } });
            })
            .catch(err => {
                console.log(err);
            });

    };

    React.useEffect(() => {
        const fetchTweet = async () => {
            try {

                const response = await fetch("/api/me/home-feed");
                const tweet = await response.json();
                console.log('Fecth Tweet', tweet)
                if (loading) {
                    setTweetById(tweet.tweetsById);
                    setTweetIds(tweet.tweetIds);
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
        }}>
        {children}
    </TweetContext.Provider>
    );
}

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