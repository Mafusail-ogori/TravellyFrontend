import ContentWrapper from "../../UI/ContentWrapper";
import {useEffect, useState} from "react";
import axios from "axios";
import ContentCard from "../../UI/ContentCard";
import TripCard from "../../components/TripCard";
import logo from "../../assets/icons/logo.png";
import classes from "../Home/Header.module.css";
import styles from "../Company/SignUp/CompanySignUp.module.css";
import getRole from "../../util/GetRole";

const SearchTrip = () => {
    const [trips, setTrips] = useState([])

    const getAllUserTrips = async () => {
        await axios.post('http://localhost:8080/company/get-user-trips', {
            country: localStorage.getItem('country')
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
        getAllUserTrips()
    }, [])

    console.log(trips)

    return <ContentWrapper whiteText="ПЕРЕГЛЯДАЙ" blackText="ОБИРАЙ" color="#8194FF" height = "1000px">
        <ContentCard height = "750px">
            {getRole() === 'user' ? <>
                <img src={logo} className={classes.header_logo} alt="Not found"/>
                <p className={styles.text}>ВАШІ РЕЗУЛЬТАТИ</p>
                {trips.map((trip) => (
                        <TripCard peopleAmount = {trip.trip_people_amount} page = 'search' id={trip.trip_id} title={trip.trip_name} startCountry={trip.trip_start_country}
                                  endCountry={trip.trip_destination_country} hotel={trip.trip_hotel}
                                  transfer={trip.trip_transfer} startDate={trip.trip_start_date}
                                  endDate={trip.trip_end_date} food={trip.trip_food}
                                  price={trip.trip_price} description = {trip.trip_description}/>
                    )
                )}</>
                : <>
                    <img src={logo} className={classes.header_logo} alt="Not found"/>
                    <p className={styles.text}>ДЛЯ ПОШУКУ НЕОБХІДНА АВТОРИЗАЦІЯ</p>
                </>}
        </ContentCard>
    </ContentWrapper>
}

export default SearchTrip