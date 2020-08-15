import React from "react";
import styled from "styled-components/macro";
import { Button1 } from "../buttons/Buttons";
import { SmallAvatar } from "../Avatar";
import { CurrentUserContext } from "../CurrentUserContext";
import Head from "../Head";
import { TweetContext } from "../Tweet/TweetContext";

const NUMCHATACTERS = 280;

const HomeHeader = () => {
    const {
        currentUser
    } = React.useContext(CurrentUserContext);
    const {
        addToTweetById
    } = React.useContext(TweetContext);

    const [countCharacters, setCountCharacters] = React.useState(NUMCHATACTERS);
    const [status, setStatus] = React.useState('');

    const submit = e => {
        e.preventDefault()
        const requestOptions = {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status: status })
        };

        fetch("/api/tweet", requestOptions)
            .then(response => response.json())
            .then((data => {
                setStatus(data.tweet.status)
                addToTweetById(data);
            })
            )

        setCountCharacters(countCharacters - status.length);
    }
    React.useEffect(() => {
        setCountCharacters(NUMCHATACTERS - status.length);
    }, [status]);


    return (
        <>
            <Head>
                Home
            </Head>
            <Form onSubmit={submit}>
                <Message>
                    <SmallAvatar avatarSrc={currentUser.avatarSrc} />
                    <TextArea name="status" value={status} onChange={e => setStatus(e.target.value)}
                        placeholder="What's happening?" />
                </Message>
                <SendMessage
                    style={{
                        color: (countCharacters < 0) ? 'red'
                            : (countCharacters <= 55) ? 'yellow' : 'darkgray',
                    }}>
                    {countCharacters < 0 ? 0 : countCharacters}
                    <Button1
                        type="submit"
                        disabled={countCharacters < 0}
                    >
                        Meow
                    </Button1>
                </SendMessage>
            </Form>
        </>
    )
}

const Form = styled.form`
    border-bottom: 8px solid lightgray;
    padding: 10px;
`

const Message = styled.div`
    display:flex;
`

const TextArea = styled.textarea`
    width: 100%;
    height: 70px;
    border: none;
    resize: none;
    outline: none;
    padding: 10px;
`
const SendMessage = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 14px;
`

export default HomeHeader;