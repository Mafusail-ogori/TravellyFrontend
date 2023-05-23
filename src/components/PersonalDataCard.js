import styles from './PersonalDataCard.css';
import editIcon from "../../assets/icons/edit.svg";
import userIcon from "../../assets/icons/userIcon.png";

const PersonalDataCard = (props) => {
    return (
        <div className={styles.container}>
            <img className={styles.user_icon} src={userIcon} alt="Not Found" />
            <div className={styles.user_info}>
                <p className={styles.title}>Welcome back, {props.username}!</p>
                <p className={styles.mail}>{props.mail}</p>
                <div className={styles.stats_wrapper}>
                    <div className={styles.user_stats}>
                        <p className={styles.stats_title}>Total spendings</p>
                        <p className={styles.loss}>{props.spendings} UAH</p>
                    </div>
                    <div className={styles.user_stats}>
                        <p className={styles.stats_title}>Total income</p>
                        <p className={styles.profit}>{props.income} UAH</p>
                    </div>
                </div>
            </div>
            <button className={styles.edit_button} onClick={props.onClick}>
                <img
                    src={editIcon}
                    style={{ fill: "white", width: "30px" }}
                    alt="Not Found"
                />
            </button>
        </div>
    );
};

export default PersonalDataCard;