import styles from './TripCard.module.css'
import {useEffect, useState} from "react";

const TripCard = (props) => {
    const [tripImage, setTripImage] = useState('')

    useEffect(() => {
        const fetchCompanyImage = async () => {
            try {
                const response = await fetch('http://localhost:8080/company/trip-image', {
                    method: 'POST',
                    body: JSON.stringify({id: props.id}),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                if (response.ok) {
                    const blob = await response.blob();
                    const objectURL = URL.createObjectURL(blob);
                    setTripImage(objectURL)
                } else {
                    console.error('Error fetching image:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching image:', error);
            }
        };
        fetchCompanyImage();
    }, [])

    console.log(tripImage)
    return <div className={styles.form_card}>
        <img src={tripImage} className={styles.photo}></img>
        <div className={styles.info_container}>
            <h2>{props.title} {props.price}<i className={"fa-solid fa-hryvnia-sign"}/></h2>
            <div className={styles.options_container}>
                <ul>
                    <li>Звідки: <span>{props.startCountry}</span></li>
                    <li>Куди: <span>{props.endCountry}</span></li>
                    <li>Готель: <span>{props.hotel}</span></li>
                    <li>Трансфер: <span>{props.transfer}</span></li>
                </ul>
                <ul>
                    <li>Починається: <span>{props.startDate}</span></li>
                    <li>Закінчується: <span>{props.endDate}</span></li>
                    <li>Харчування: <span>{props.food}</span></li>
                </ul>
            </div>
        </div>
    </div>
}

export default TripCard