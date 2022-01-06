import {createContext, useState} from "react";

// create the Context
export const LoginContext = createContext({})

// create the Provider Component
export const LoginContextProvider = ({children}) => {
    const [username, setUsername] = useState("")

    return (
        <LoginContext.Provider value={{
            username,
            setUsername
        }}>
            {children}
        </LoginContext.Provider>
    )
}
