import React from "react";

const PostTweet = () => {
    React.useEffect(() => {
        const requestOptions = {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status: "your text here" })
        };

        fetch("/api/tweet", requestOptions)
            .then(response => response.json())
            .then((data => setStatus(data.status))
    }, [])
};

export default PostTweet;