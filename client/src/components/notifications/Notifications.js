import React from "react";
import Head from "../Head";
import NotificationNav from "./NotificationNav";

import GoBack from "../GoBack";

const Notifications = () => {
    return (
        <>
            <Head>
                <GoBack />
                Notifications
            </Head>
            <NotificationNav />
        </>
    );
};

export default Notifications;