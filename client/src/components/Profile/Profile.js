import React from "react";

import Header from "./Header";
import Body from "./Body";
import { FiLoader } from "react-icons/fi";

import { CurrentUserContext } from "../CurrentUserContext";
import { TweetContext } from "../Tweet/TweetContext";

import { useParams } from "react-router-dom";

import Tweet from "../Tweet/Tweet";

//style
import styled from 'styled-components/macro';

const Profile = () => {
    const {
        currentUser,
    } = React.useContext(CurrentUserContext, TweetContext);

    const { handle } = useParams();

    const [profileTweets, setProfileTweets] = React.useState();
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const fetchTweet = async () => {
            try {
                const response = await fetch(`/api/${currentUser.handle}/feed`);
                const profileInfo = await response.json();
                setProfileTweets(Object.values(profileInfo.tweetsById));
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
            <Header
                bannerSrc={currentUser.bannerSrc}
                avatarSrc={currentUser.avatarSrc}
                displayName={currentUser.displayName}
                userName={currentUser.handle}

                location={currentUser.location}
                joined={currentUser.joined}
                bio={currentUser.bio}
                numFollowing={currentUser.numFollowing}
                numFollowers={currentUser.numFollowers}
            />
            <Body>
                {profileTweets.map((tweet) => {
                    return <Tweet tweet={tweet} />
                })
                }
            </Body>

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

export default Profile;