import React, {useEffect, useState} from "react";

export const TripContext = React.createContext({
    trip: {},
    setRole: () => {
    }
})

const TripContextProvider = (props) => {
    const [trip, setTrip] = useState({})

    useEffect(() => {
        setTrip(props.trip)
    }, [])

    return <TripContext.Provider value={{trip: trip, setTrip: setTrip}}>
        {props.children}
    </TripContext.Provider>
}

export default TripContextProvider