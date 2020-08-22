import React from "react";

import { FiLoader } from "react-icons/fi";

import styled from "styled-components/macro";

export const TweetContext = React.createContext();

export const TweetProvider = ({ children }) => {
    const [tweetById, setTweetById] = React.useState([]);
    const [tweetIds, setTweetIds] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [toggleLike, setToggleLike] = React.useState(false);
    const [toggleRetweet, setToggleRetweet] = React.useState(false);

    const handleToggleLike = (tweetId) => {
        const isLiked = tweetById[tweetId].isLiked
        fetch(`/api/tweet/${tweetId}/like`, {
            "method": "PUT",
            "headers": {
                "content-type": "application/json"
            },
            "body": JSON.stringify({
                like: !isLiked
            })
        })
            .then(response => {
                setToggleLike(!toggleLike);
            })
            .catch(err => {
                console.log('Error', err);
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
                retweet: !isRetweeted
            })
        })
            .then(response => {
                setToggleRetweet(!toggleRetweet);
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
                if (tweet !== undefined) {
                    setTweetById(tweet.tweetsById);
                    setTweetIds(tweet.tweetIds);
                    setLoading(false);
                }
            } catch (err) {
                console.log('Error Tweet Message', err);
            }
        };
        fetchTweet();
    }, [toggleLike, toggleRetweet]);

    const addToTweetById = (data) => {
        let tweetDataId = data.tweet.id;
        setTweetById({ ...tweetById, [tweetDataId]: data.tweet })
        setTweetIds([tweetDataId, ...tweetIds])
    };

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
            addToTweetById,
            toggleLike,
            setToggleLike,
            toggleRetweet,
            setToggleRetweet
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