import React from "react";

import { Link } from 'react-router-dom';

import Header from "./Header";
import Body from "./Body";
import { FiLoader } from "react-icons/fi";

import { CurrentUserContext } from "../CurrentUserContext";

import { useParams } from "react-router-dom";

import Tweet from "../Tweet/Tweet";
import { ActionButtons } from '../buttons/ActionButtons';

//style
import styled from 'styled-components/macro';

const Profile = () => {
    const {
        currentUser,
    } = React.useContext(CurrentUserContext);

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
                    return (
                        <Wrapper>
                            <Link to={`/tweet/${tweet.id}`}>
                                <Tweet tweet={tweet} />
                            </Link>
                            <Action>
                                <ActionButtons
                                    id={tweet.id}
                                    numLikes={tweet.numLikes}
                                    numRetweets={tweet.numRetweets}
                                />
                            </Action>
                        </Wrapper>
                    )
                })
                }
            </Body>

        </>
    )
};

const Wrapper = styled.div`
    width: 100%;
    padding: 10px;
    border-bottom: 1px solid lightgray;
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

const Action = styled.div`
    padding-left: 40px;
`

export default Profile;