import React from "react";

import { Link } from 'react-router-dom';

import Head from "../Head";
import GoBack from "../GoBack";

import { FiLoader } from "react-icons/fi";

import { CurrentUserContext } from "../CurrentUserContext";

//style
import styled from 'styled-components/macro';

const Followers = () => {
    const {
        currentUser,
    } = React.useContext(CurrentUserContext);

    const [followers, setFollowers] = React.useState();
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const fetchTweet = async () => {
            try {
                const response = await fetch(`/api/${currentUser.handle}/followers`);
                const followersData = await response.json();
                setFollowers(followersData);
                setLoading(false);
            } catch (err) {
                console.log('Error Followers', err);
            }
        };
        fetchTweet();
    }, []);
    if (loading) {
        return <Load> <FiLoader /></Load>
    }

    return (
        <Wrapper>
            <Head>
                <GoBack />
                Followers
            </Head>

        </Wrapper>
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

export default Followers;