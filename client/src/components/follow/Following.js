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

const Following = () => {
    const {
        currentUser,
    } = React.useContext(CurrentUserContext);

    const [following, setFollowing] = React.useState();
    const [loadingFollowing, setLoadingFollowing] = React.useState(true);

    React.useEffect(() => {
        const fetchTweet = async () => {
            try {
                if (loadingFollowing) {
                    const response = await fetch(`/api/${currentUser.handle}/following`);
                    const followingData = await response.json();
                    setFollowing(Object.values(followingData));
                    setLoadingFollowing(false);
                }
            } catch (err) {
                console.log('Error Following', err);
            }
        };
        fetchTweet();
    }, []);
    if (loadingFollowing) {
        return <Load> <FiLoader /></Load>
    }
    return (
        <>
            <Head>
                <GoBack />
                Following
            </Head>
            <FollowNav />
            {following[0].map((follow) => {
                return (
                    <Wrapper>
                        <FollowingData>
                            <Avatar>
                                <SmallAvatar avatarSrc={follow.avatarSrc} />
                            </Avatar>
                            <FollowingName>
                                <FollowingUserDiv>
                                    <div>
                                        <FollowingAuthor>
                                            {follow.displayName}
                                        </FollowingAuthor>
                                        <Handle>@{follow.handle}</Handle>
                                    </div>
                                    <Button3>Following</Button3>
                                </FollowingUserDiv>
                                <Bio>{follow.bio} </Bio>
                            </FollowingName>
                        </FollowingData>
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

const FollowingName = styled.div`
    font-size: 15px;
    line-height: 20px;
    font-weight: bold;
    width: 100%;
  `;

const FollowingData = styled.div`
    display: flex;
`

const FollowingAuthor = styled.p`
    font-weight: 600;
    font-size: 14px;
`

const Handle = styled.span`
    color: darkgray;
    font-size: 14px;
    font-weight: 400;
`

const FollowingUserDiv = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5px 0;
`

const Bio = styled.p`
    font-weight: 400;
    font-size: 14px;
`

export default Following;