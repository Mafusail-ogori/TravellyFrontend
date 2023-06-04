import styles from '../Modal.module.css'
import stylesLogo from "../../pages/Home/Header.module.css";
import {useState} from "react";
import Input from "../../UI/Input";
import Button from "../../UI/Button";
import Backdrop from "../../UI/Backdrop";
import axios from "axios";
import getToken from "../../util/GetToken";

const ModalPayment = (props) => {
    const [status, setStatus] = useState(true)
    const [cardNumber, setCardNumber] = useState(0)
    const [expireDate, setExpireDate] = useState('')
    const [cvv, setCvv] = useState(0)

    const cardNumberInputHandler = (event) => {
        setCardNumber(event.target.value)
    }

    const expireDateInputHandler = (event) => {
        setExpireDate(event.target.value)
    }

    const cvvInputHandler = (event) => {
        setCvv(event.target.value)
    }

    const paymentHandler = async (event) => {
        event.preventDefault()
        await axios.post('http://localhost:8080/user/payment', ({
            tripId: props.tripId,
            cardNumber: cardNumber,
            amount: props.amount
        }), ({
            headers: {
                'Authorization': `Bearer ${getToken()}`
            }
        }))
            .then((res) => {
                setStatus(true)
            }).catch((e) => {
                console.log(e)
            })
    }

    return <>
        <Backdrop onClick={props.onClose}/>
        <form className={styles.modal_login} onSubmit={paymentHandler}>
            <img className={stylesLogo.header_logo} src={require("../../assets/icons/logo.png")}
                 alt="Image Not Found"></img>
            <p className={status ? styles.hidden : styles.failure}>Помилка створення, такий акаунт вже існує, або
                вказані не
                всі дані</p>
            <p>Сплачуй, Подорожуй!</p>

            <Input height="50px" placeholder="Номер картки (16 цифр)" type="text" fontSize="15px"
                   status={status} label="Номер картки" pattern="[0-9]{16}" handler={cardNumberInputHandler}/>
            <Input height="50px" placeholder="MM/YY" type="text" fontSize="15px"
                   status={status} pattern="(0[1-9]|1[0-2])\/[0-9]{2}" label="Термін дії"
                   handler={expireDateInputHandler}/>
            <Input height="50px" placeholder="CVV (3 цифри)" type="text" fontSize="15px"
                   label="CVV код" status={status} pattern="[0-9]{3}" handler={cvvInputHandler}/>
            <Button text='ОПЛАТИТИ' type="submit"/>
        </form>
    </>
}

export default ModalPayment