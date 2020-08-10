import React from "react";
import styled from 'styled-components/macro';

import Head from '../Head';
import GoBack from '../GoBack';

const Bookmarks = () => {
    return (
        <>
            <Head>
                <GoBack />
                Bookmarks
            </Head>
            <Wrapper>
                <MessageHeader>You haven’t added any Tweets to your Bookmarks yet</MessageHeader>
                <Paragraph>When you do, they’ll show up here.</Paragraph>
            </Wrapper>
        </>
    )
};

const Wrapper = styled.div`
    padding: 20px;
`

const MessageHeader = styled.h2`
    text-align: center;
    margin-bottom: 10px;
`

const Paragraph = styled.p`
    text-align: center;
    font-size: 15px;
`

export default Bookmarks;