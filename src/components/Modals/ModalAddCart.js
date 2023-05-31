import stylesLogo from "../../pages/Home/Header.module.css";
import Backdrop from "../../UI/Backdrop";
import styles from "../Modal.module.css";
import Input from "../../UI/Input";
import Button from "../../UI/Button";
import axios from "axios";
import getToken from "../../util/GetToken";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const ModalAddCart = (props) => {

    const [amount, setAmount] = useState(0)
    const [status, setStatus] = useState(true)
    const navigation = useNavigate()

    const setAmountHandler = (event) => {
        setAmount(event.target.value)
    }
    const chooseTripHandler = async (event) => {
        event.preventDefault()
        await axios.post('http://localhost:8080/user/user-choose-trip', {
            tripId: props.tripId,
            amount: amount
        }, {
            headers: {
                'Authorization': `Bearer ${getToken()}`,
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            setStatus(true)
            navigation('/cart')
        }).catch((e) => {
            console.log(e)
            setStatus(false)
        })
    }

    return <>
        <Backdrop onClick={props.onClose}/>
        <form className={styles.modal_login} onSubmit={chooseTripHandler}>
            <img className={stylesLogo.header_logo} src={require("../../assets/icons/logo.png")}
                 alt="Image Not Found"/>
            <p className={status ? styles.hidden : styles.failure}>Помилка надсилання. Недопустима кількість, або інша
                проблема</p>
            <p>ВВЕДІТЬ КІЛЬКІСТЬ!</p>
            <Input status={status} height="50px" placeholder="Введіть кількість путівок" type="number" fontSize="15px"
                   label="Кількість путівок" handler={setAmountHandler}/>
            <Button text='ОПЛАТИТИ' type="submit"/>
        </form>
    </>
}

export default ModalAddCart