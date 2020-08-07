import React from "react";

export const TweetContext = React.createContext();

export const TweetProvider = ({ children }) => {
    const [tweetById, setTweetById] = React.useState([]);
    const [tweetIds, setTweetIds] = React.useState([]);

    React.useEffect(() => {
        const fetchTweet = async () => {
            try {
                const response = await fetch("/api/me/home-feed");
                const tweet = await response.json();
                setTweetById(tweet.tweetsById);
                setTweetIds(tweet.tweetIds);

                console.log(tweet.tweetsById)
            } catch (err) {
                console.log('Error Tweet Message', err);
            }
        };
        fetchTweet();
    }, []);

    return (
        <TweetContext.Provider
            value={{
                tweetById,
                tweetIds
            }}>
            {children}
        </TweetContext.Provider>
    );
};