import React, {useEffect, useState} from "react";
import getRole from "../util/GetRole";

export const SearchContext = React.createContext({
    country: "none",
    setCountry: () => {
    }
})

const SearchContextProvider = (props) => {
    const [country, setCountry] = useState("none")

    useEffect(() => {
        setCountry(props.country)
    }, [])

    return <SearchContext.Provider value={{country: country, setCountry: setCountry}}>
        {props.children}
    </SearchContext.Provider>
}

export default SearchContextProvider