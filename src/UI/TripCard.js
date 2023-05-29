import styles from './TripCard.module.css'
import photo from '../assets/photos/Nature.jpg'

const TripCard = (props) =>{
    return <div className={styles.form_card}>
        <img src = {photo} className={styles.photo}></img>
        <div className={styles.info_container}>
            <div className={styles.options_container}>
                <h2>{props.title}</h2>
                <h2>{props.price} <i className={"fa-solid fa-hryvnia-sign"}/></h2>
            </div>
            <div className={styles.options_container}>
                <div>
                    <p>Звідки: <span>{props.startCountry}</span></p>
                    <p>Куди: <span>{props.endCountry}</span></p>
                    <p>Готель: <span>{props.hotel}</span></p>
                    <p>Трансфер: <span>{props.transfer}</span></p>
                </div>
                <div>
                    <p>Починається: <span>{props.startDate}</span></p>
                    <p>Закінчується: <span>{props.endDate}</span></p>
                    <p>Що по їжі: <span>{props.food}</span></p>
                </div>
            </div>
        </div>
    </div>
}

export default TripCard