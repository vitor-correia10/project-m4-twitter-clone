import React from "react";
import styled from "styled-components/macro";
import { Button1 } from "../buttons/Buttons";
import { SmallAvatar } from "../Avatar";
import { CurrentUserContext } from "../CurrentUserContext";
import Head from "../Head";


const HomeHeader = () => {
    const {
        currentUser
    } = React.useContext(CurrentUserContext);

    const [countCharacters, setCountCharacters] = React.useState(280);
    const [status, setStatus] = React.useState('');
    const submit = e => {
        e.preventDefault()
        const requestOptions = {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status: { status } })
        };

        fetch("/api/tweet", requestOptions)
            .then(response => response.json())
            .then((data => setStatus(data.status))
            )

        if (countCharacters >= 0) {
            setCountCharacters(countCharacters - e.target.value.length);
            console.log(countCharacters)
        }
    }

    console.log(status);
    return (
        <>
            <Head>
                Home
            </Head>
            <Form>
                <Message>
                    <SmallAvatar avatarSrc={currentUser.avatarSrc} />
                    <TextArea name="status" value={status} onChange={e => setStatus(e.target.value)} placeholder="What's happening?" />
                </Message>
                <SendMessage>
                    {countCharacters}
                    <Button1 type="submit"> Meow </Button1>
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
    color: darkgray;
    font-size: 14px;
`

export default HomeHeader;