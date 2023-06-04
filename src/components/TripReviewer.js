import ContentWrapper from "../UI/ContentWrapper";
import ContentCard from "../UI/ContentCard";
import TripCard from "./TripCard";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../storage/AuthContext";
import logo from "../assets/icons/logo.png";
import classes from "../pages/Home/Header.module.css";
import styles from "../pages/Company/SignUp/CompanySignUp.module.css";
import axios from "axios";
import getToken from "../util/GetToken";
import {useLocation} from "react-router-dom";

const TripReviewer = () => {
    const location = useLocation()
    const [trips, setTrips] = useState([])
    const getUserCartTripsHandler = async () => {
        await axios.get('http://localhost:8080/user/user-cart-trips', {
            headers: {
                Authorization: `Bearer ${getToken()}`
            }
        }).then((res) => {
            setTrips(res.data)
        }).catch((e) => {
            console.log(e)
        })
    }

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

    const getAllCompanyTrips = async () => {
        await axios.get('http://localhost:8080/company/review-trip', {
            headers: {
                Authorization: `Bearer ${getToken()}`
            }
        }).then((res) => {
            setTrips(res.data)
        }).catch((e) => {
            console.log(e)
        })
    }

    const getAllBoughtTrips = async () => {
        await axios.get('http://localhost:8080/user/user-bought-trips', {
            headers: {
                Authorization: `Bearer ${getToken()}`
            }
        }).then((res) => {
            setTrips(res.data)
        }).catch((e) => {
            console.log(e)
        })
    }

    useEffect(() => {
        if (location.pathname === '/cart') {
            getUserCartTripsHandler()
        } else if (location.pathname === '/user/search-trip') {
            getAllUserTrips()
        } else if (location.pathname === '/company/review-trip') {
            getAllCompanyTrips()
        } else if (location.pathname === '/user/bought') {
            getAllBoughtTrips()
        }
    }, [location])

    const {role} = useContext(AuthContext)

    console.log(location.pathname)

    return <ContentWrapper whiteText="ПЕРЕГЛЯДАЙ" blackText="ВДОСКОНАЛЮЙ" color="#8194FF" height="900px">
        <ContentCard height="700px">
            {(role === 'user' && location.pathname === '/cart') &&
                <>
                    <img src={logo} className={classes.header_logo} alt="Not found"/>
                    <p className={styles.text}>ВАШ КОШИК</p>
                    {trips.map((trip) => (
                            <TripCard peopleAmount={trip.trip_people_amount}
                                      id={trip.trip_id} title={trip.trip_name} startCountry={trip.trip_start_country}
                                      endCountry={trip.trip_destination_country} hotel={trip.trip_hotel}
                                      transfer={trip.trip_transfer} startDate={trip.trip_start_date}
                                      endDate={trip.trip_end_date} food={trip.trip_food}
                                      price={trip.trip_price * trip.amount} description={trip.trip_description}/>
                        )
                    )}
                </>}
            {(role === 'user' && location.pathname === '/user/search-trip') && <>
                <img src={logo} className={classes.header_logo} alt="Not found"/>
                <p className={styles.text}>ВАШІ РЕЗУЛЬТАТИ</p>
                {trips.map((trip) => (
                        <TripCard peopleAmount={trip.trip_people_amount} id={trip.trip_id} title={trip.trip_name}
                                  startCountry={trip.trip_start_country}
                                  endCountry={trip.trip_destination_country} hotel={trip.trip_hotel}
                                  transfer={trip.trip_transfer} startDate={trip.trip_start_date}
                                  endDate={trip.trip_end_date} food={trip.trip_food}
                                  price={trip.trip_price} description={trip.trip_description}/>
                    )
                )}</>}
            {(role === 'user' && location.pathname === '/user/bought') && <>
                <img src={logo} className={classes.header_logo} alt="Not found"/>
                <p className={styles.text}>ПРИДБАНІ ПУТІВКИ</p>
                {trips.map((trip) => (
                        <TripCard peopleAmount={trip.trip_people_amount} id={trip.trip_id} title={trip.trip_name}
                                  startCountry={trip.trip_start_country}
                                  endCountry={trip.trip_destination_country} hotel={trip.trip_hotel}
                                  transfer={trip.trip_transfer} startDate={trip.trip_start_date}
                                  endDate={trip.trip_end_date} food={trip.trip_food}
                                  price={trip.trip_price} description={trip.trip_description}/>
                    )
                )}</>}
            {(role === 'company' && location.pathname === '/company/review-trip') && <>
                <img src={logo} className={classes.header_logo} alt="Not found"/>
                <p className={styles.text}>ПУТІВКИ КОМПАНІЇ</p>
                {trips.map((trip) => (
                    <TripCard peopleAmount={trip.trip_people_amount} id={trip.trip_id} title={trip.trip_name}
                              startCountry={trip.trip_start_country}
                              endCountry={trip.trip_destination_country} hotel={trip.trip_hotel}
                              transfer={trip.trip_transfer} startDate={trip.trip_start_date}
                              endDate={trip.trip_end_date} food={trip.trip_food}
                              price={trip.trip_price} description={trip.trip_description}/>
                ))}
            </>}
            {role === 'none' && <>
                <img src={logo} className={classes.header_logo} alt="Not found"/>
                <p className={styles.text}>ДЛЯ ПЕРЕГЛЯДУ КОРЗИНИ НЕОБХІДНО ЗАРЕЄСТРУВАТИСЬ</p>
            </>}
        </ContentCard>
    </ContentWrapper>
}
export default TripReviewer