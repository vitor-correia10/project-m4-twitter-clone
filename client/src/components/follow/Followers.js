import React from "react";

import Head from "../Head";
import GoBack from "../GoBack";

import { FiLoader } from "react-icons/fi";

import { CurrentUserContext } from "../CurrentUserContext";
import { SmallAvatar } from "../Avatar";
import { Button3 } from "../buttons/Buttons";
import FollowNav from "./FollowNav";

//style
import styled from 'styled-components/macro';

const Followers = () => {
    const {
        currentUser,
    } = React.useContext(CurrentUserContext);

    const [followers, setFollowers] = React.useState();
    const [loadingFollowers, setLoadingFollowers] = React.useState(true);

    React.useEffect(() => {
        const fetchTweet = async () => {
            try {
                if (loadingFollowers) {
                    const response = await fetch(`/api/${currentUser.handle}/followers`);
                    const followersData = await response.json();
                    setFollowers(Object.values(followersData));
                    setLoadingFollowers(false);
                }
            } catch (err) {
                console.log('Error Followers', err);
            }
        };
        fetchTweet();
    }, []);
    if (loadingFollowers) {
        return <Load> <FiLoader /></Load>
    }
    return (
        <>
            <Head>
                <GoBack />
                Followers
            </Head>
            <FollowNav />
            {followers[0].map((follow) => {
                return (
                    <Wrapper>
                        <FollowersData>
                            <Avatar>
                                <SmallAvatar avatarSrc={follow.avatarSrc} />
                            </Avatar>
                            <FollowersName>
                                <FollowersUserDiv>
                                    <div>
                                        <FollowersAuthor>
                                            {follow.displayName}
                                        </FollowersAuthor>
                                        <Handle>@{follow.handle}</Handle>
                                    </div>
                                    <Button3>{follow.isBeingFollowedByYou ? 'Following' : 'Follow'}</Button3>
                                </FollowersUserDiv>
                                <Bio>{follow.bio} </Bio>
                            </FollowersName>
                        </FollowersData>
                    </Wrapper>
                )
            })
            }
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

const Wrapper = styled.div`
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid lightgray;

  &:hover{
      background: #F0F0F0;
  }
`

const Avatar = styled.div`
    padding-right: 10px;
`

const FollowersName = styled.div`
    font-size: 15px;
    line-height: 20px;
    font-weight: bold;
    width: 100%;
  `;

const FollowersData = styled.div`
    display: flex;
`

const FollowersAuthor = styled.p`
    font-weight: 600;
    font-size: 14px;
`

const Handle = styled.span`
    color: darkgray;
    font-size: 14px;
    font-weight: 400;
`

const FollowersUserDiv = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5px 0;
`

const Bio = styled.p`
    font-weight: 400;
    font-size: 14px;
`

export default Followers;