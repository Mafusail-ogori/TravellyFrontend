import React, {useEffect, useState} from "react";
import getToken from "../util/GetToken";

export const AuthContext = React.createContext({
    isLogged: false,
    setIsLogged: () => {
    }
})

const AuthContextProvider = (props) => {
    const [isLogged, setIsLogged] = useState(false)

    useEffect(() => {
        if (getToken()) {
            setIsLogged(true)
        }
    }, [])

    return <AuthContext.Provider value={{isLogged: isLogged, setIsLogged: setIsLogged}}>
        {props.children}
    </AuthContext.Provider>
}

export default AuthContextProvider