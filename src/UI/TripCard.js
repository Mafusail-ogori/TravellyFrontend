import styles from './TripCard.module.css'

const TripCard = (props) =>{
    return<div className={styles.form_card}>
        {props.children}
    </div>
}

export default TripCard