import ContentWrapper from "../../UI/ContentWrapper";
import ContentCard from "../../UI/ContentCard";
import TripCard from "../../components/TripCard";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../storage/AuthContext";
import logo from "../../assets/icons/logo.png";
import classes from "../Home/Header.module.css";
import styles from "../Company/SignUp/CompanySignUp.module.css";
import axios from "axios";
import getToken from "../../util/GetToken";

const Cart = () => {

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

    useEffect(() => {
        getUserCartTripsHandler()
    }, [])

    const {role} = useContext(AuthContext)
    return <ContentWrapper whiteText="ПОПУЛЯРНЕ" blackText="НЕЙМОВІРНЕ" color="#8194FF" height="900px">
        <ContentCard height="700px">
            {role === 'user' ?
                <>
                    <img src={logo} className={classes.header_logo} alt="Not found"/>
                    <p className={styles.text}>ВАШІ РЕЗУЛЬТАТИ</p>
                    {trips.map((trip) => (
                            <TripCard orderAmount={trip.amount} peopleAmount={trip.trip_people_amount} page='cart'
                                      id={trip.trip_id} title={trip.trip_name} startCountry={trip.trip_start_country}
                                      endCountry={trip.trip_destination_country} hotel={trip.trip_hotel}
                                      transfer={trip.trip_transfer} startDate={trip.trip_start_date}
                                      endDate={trip.trip_end_date} food={trip.trip_food}
                                      price={trip.trip_price * trip.amount} description={trip.trip_description}/>
                        )
                    )}</>
                :
                <>
                    <img src={logo} className={classes.header_logo} alt="Not found"/>
                    <p className={styles.text}>ДЛЯ ПЕРЕГЛЯДУ КОРЗИНИ НЕОБХІДНО ЗАРЕЄСТРУВАТИСЬ</p>
                </>}
        </ContentCard>
    </ContentWrapper>
}
export default Cart