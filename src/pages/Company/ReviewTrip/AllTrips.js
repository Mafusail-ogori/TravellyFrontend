import ContentWrapper from "../../../UI/ContentWrapper";
import getToken from "../../../util/GetToken";
import axios from "axios";
import {useEffect, useState} from "react";
import TripCard from "../../../components/TripCard";
import ContentCard from "../../../UI/ContentCard";
import logo from "../../../assets/icons/logo.png";
import classes from "../../Home/Header.module.css";
import styles from "../SignUp/CompanySignUp.module.css";

const AllTrips = () => {
    const [allTrips, setAllTrips] = useState([])

    const getAllTrips =  async () => {
        await axios.get('http://localhost:8080/company/review-trip', {
            headers: {
                Authorization : `Bearer ${getToken()}`
            }
        }).then((res) => {
            setAllTrips(res.data)
        }).catch((e) => {
            console.log(e)
        })
    }
    useEffect(() => {
        getAllTrips()
    }, [])

    console.log(allTrips)


    return <ContentWrapper whiteText = "ПЕРЕГЛЯДАЙ" blackText = "ВДОСКОНАЛЮЙ" color = "#8194FF" height = "1000px">
        <ContentCard height = "700px">
            <img src = {logo} className={classes.header_logo} alt="Not found"/>
            <p className={styles.text}>ПУТІВКИ КОМПАНІЇ</p>
            {allTrips.map((trip) => (
                <TripCard trip_id = {trip.trip_id} peopleAmount = {trip.trip_people_amount} page = 'review' id = {trip.trip_id} title = {trip.trip_name} startCountry = {trip.trip_start_country}
                          endCountry = {trip.trip_destination_country} hotel = {trip.trip_hotel}
                transfer = {trip.trip_transfer} startDate = {trip.trip_start_date} endDate = {trip.trip_end_date} food = {trip.trip_food}
                price = {trip.trip_price} description = {trip.trip_description}/>
            ))}
        </ContentCard>
    </ContentWrapper>
}

export default AllTrips