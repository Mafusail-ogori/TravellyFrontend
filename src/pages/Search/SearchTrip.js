import ContentWrapper from "../../UI/ContentWrapper";
import {SearchContext} from "../../storage/SearchContext";
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import ContentCard from "../../UI/ContentCard";
import TripCard from "../../UI/TripCard";
import logo from "../../assets/icons/logo.png";
import classes from "../Home/Header.module.css";
import styles from "../Company/SignUp/CompanySignUp.module.css";

const SearchTrip = () => {
    const {country} = useContext(SearchContext)
    const [trips, setTrips] = useState([])
    const getAllTrips = async () => {
        await axios.post('http://localhost:8080/company/get-user-trips', {
            country: country
        })
            .then((res) => {
                console.log(res)
                setTrips(res.data)
            })
            .catch((e) => {
                console.log(e)
            })
    }

    useEffect(() => {
        getAllTrips()
    }, [])

    return <ContentWrapper whiteText="ПЕРЕГЛЯДАЙ" blackText="ОБИРАЙ" color="#8194FF">
        <ContentCard>
            <img src={logo} className={classes.header_logo} alt="Not found"/>
            <p className={styles.text}>ВАШІ РЕЗУЛЬТАТИ</p>
            {trips.map((trip) => {
                <TripCard id={trip.trip_id} title={trip.trip_name} startCountry={trip.trip_start_country}
                          endCountry={trip.trip_destination_country} hotel={trip.trip_hotel}
                          transfer={trip.trip_transfer} startDate={trip.trip_start_date}
                          endDate={trip.trip_end_date} food={trip.trip_food}
                          price={trip.trip_price}/>

            })}
        </ContentCard>
    </ContentWrapper>
}

export default SearchTrip