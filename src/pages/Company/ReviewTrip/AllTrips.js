import ContentWrapper from "../../../UI/ContentWrapper";
import FormCard from "../../../UI/FormCard";
import getToken from "../../../util/GetToken";
import axios from "axios";
import {useEffect, useState} from "react";
import TripCard from "../../../UI/TripCard";

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

    return <ContentWrapper whiteText = "ПЕРЕГЛЯДАЙ" blackText = "ВДОСКОНАЛЮЙ" color = "#8194FF" height = "1000px">
        <FormCard>
            {allTrips.map((trip) => (
                <TripCard image = {trip.trip_image} title = {trip.trip_name} startCountry = {trip.trip_start_country}
                          endCountry = {trip.trip_destination_country} hotel = {trip.trip_hotel}
                transfer = {trip.trip_transfer} startDate = {trip.trip_start_date} endDate = {trip.trip_end_date} food = {trip.trip_food}
                price = {trip.trip_price}/>
            ))}
        </FormCard>
    </ContentWrapper>
}

export default AllTrips