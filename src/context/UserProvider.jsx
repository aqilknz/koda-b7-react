import React from 'react'
import { useReducer } from "react";
import { userContext as UserContext } from "./UserContext.jsx";

function UserProvider({ children }) {
    const initialState = {
        user: JSON.parse(localStorage.getItem("user")) || {},
    }
    // console.log(initialState);\

    const [state, dispatch] = useReducer((prevState, action) => {
        switch (action.type) {
            case "LOGIN": {
                const user = { ...prevState, user: action.payload }
                localStorage.setItem("user", JSON.stringify(user.user))
                return user;
            }
            case "LOGOUT": {
                const user = { ...prevState, user: {} }
                localStorage.removeItem("user")
                return user;
            }
            case "EDIT_PROFILE": {
                const user = { ...prevState, user: action.payload };
                localStorage.setItem("user", JSON.stringify(user.user));
                return user;
            }
            default: {
                return prevState
            }
        }
    }, initialState)

    return (
        <UserContext.Provider value={{ state, dispatch }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider