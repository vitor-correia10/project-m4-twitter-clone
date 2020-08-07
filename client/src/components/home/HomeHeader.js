import React from "react";
import styled from "styled-components";
import { Button1 } from "../Buttons";
import { SmallAvatar } from "../Avatar";
import { CurrentUserContext } from "../CurrentUserContext";


const HomeHeader = () => {
    const {
        currentUser
    } = React.useContext(CurrentUserContext);
    return (
        <>
            <Head>
                Home
            </Head>
            <Text>
                <Message>
                    <SmallAvatar avatarSrc={currentUser.avatarSrc} />
                    <TextArea placeholder="What's happening?" />
                </Message>
                <SendMessage>
                    280
                <Button1> Meow </Button1>
                </SendMessage>
            </Text>
        </>
    )
}

const Head = styled.div`
    border-bottom: 1px solid lightgray;
    padding: 10px;
    font-size: 22px;
    font-weight: 600;
`
const Text = styled.div`
    border-bottom: 8px solid lightgray;
    padding: 5px;
`

const Message = styled.div`
    display:flex;
`

const TextArea = styled.textarea`
    width: 100%;
    height: 100px;
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