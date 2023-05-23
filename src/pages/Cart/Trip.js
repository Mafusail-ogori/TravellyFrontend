import styles from './Trip.module.css'
import TripCard from "../../UI/TripCard";

const Trip = (props) => {
    return <TripCard>
        <img className={styles.trip_image} src={props.image} alt="Image not found"/>
        <p className={styles.trip_title}>{props.title}</p>
        <p className={styles.trip_description}>{props.description}</p>
    </TripCard>
}

export default Trip