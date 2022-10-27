import { createContext, useEffect, useState } from "react";

import { onAuthStateChangedListener, createUserDocFromAuth } from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
    isAccountOpen: false,
    setIsAccountOpen: () => {},
    currentUser: null,
    setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser]= useState(null);
    const [isAccountOpen, setIsAccountOpen] = useState(false);
    const value = {
        currentUser, 
        setCurrentUser, 
        isAccountOpen, 
        setIsAccountOpen
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if(user) {
                createUserDocFromAuth(user);
            }
            setCurrentUser(user);
        });
      
        return unsubscribe;
    }, [])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}