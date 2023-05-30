import styles from '../Modal.module.css'
import stylesLogo from "../../pages/Home/Header.module.css";
import {useState} from "react";
import Input from "../../UI/Input";
import Button from "../../UI/Button";
import Backdrop from "../../UI/Backdrop";

const ModalPayment = (props) => {
    const [status, setStatus] = useState(true)

    return <>
        <Backdrop onClick = {props.onClose}/>
        <form className={styles.modal_login}>
            <img className={stylesLogo.header_logo} src={require("../../assets/icons/logo.png")}
                 alt="Image Not Found"></img>
            <p className={status ? styles.hidden : styles.failure}>Помилка створення, такий акаунт вже існує, або
                вказані не
                всі дані</p>
            {/*<p className={success ? styles.success : styles.hidden}>Дані успішно додані,поверніться назад аби увійти в*/}
            {/*    акаунт! </p>*/}
            <p>Сплачуй, Подорожуй!</p>

            <Input height="50px" placeholder="Номер картки" type="text" fontSize="15px"
                   status={status} label="Номер картки" pattern="[0-9]{16}"/>
            <Input height="50px" placeholder="Власник картки" type="text" fontSize="15px"
                   status={status} label="Власник картки"/>
            <Input height="50px" placeholder="Термін дії" type="month" fontSize="15px"
                   status={status} label="Термін дії"/>
            <Input height="50px" placeholder="CVV код" type="text" fontSize="15px"
                   label="CVV код" status={status} pattern="[0-9]{3}"/>
            <Button text='ОПЛАТИТИ'/>
        </form>
    </>
}

export default ModalPayment