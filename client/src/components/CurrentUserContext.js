import React from "react";
import moment from 'moment';

export const CurrentUserContext = React.createContext();

export const CurrentUserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const fetchUser = async () => {
            const response = await fetch("/api/me/profile");
            const user = await response.json();
            if (loading) {
                setCurrentUser(user.profile);
                setLoading(false);
            }
        };
        fetchUser();
    }, [loading]);

    return (
        <CurrentUserContext.Provider
            value={{
                currentUser,
                loading
            }}>
            {children}
        </CurrentUserContext.Provider>
    );
};