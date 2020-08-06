import React from "react";

export const CurrentUserContext = React.createContext();

export const CurrentUserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch("/api/me/profile");
                const user = await response.json();
                if (loading) {
                    setCurrentUser(user.profile);
                    setLoading(false);
                }
            } catch (err) {
                console.log(err);
            }
        };
        fetchUser();
    }, [loading]);

    return (
        <CurrentUserContext.Provider
            value={{
                currentUser,
                loading,
            }}>
            {children}
        </CurrentUserContext.Provider>
    );
};