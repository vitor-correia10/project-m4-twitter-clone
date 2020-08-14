import React from "react";
import Navigation from "./Navigation";


const Body = ({
    children
}) => {
    return (
        <>
            <Navigation />
            {children}
        </>

    )
};

export default Body;
