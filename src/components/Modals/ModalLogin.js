import styles from "../Modal.module.css"
import stylesLogo from "../../pages/Home/Header.module.css"
import Input from "../../UI/Input"
import Button from "../../UI/Button"
import { NavLink, useNavigation} from "react-router-dom";
import axios from "axios";
import localStorage from "localStorage";
import {useState} from "react";

const ModalLogin = (props) => {

    const [status, setStatus] = useState(true)
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")

    const loginInputHandler = (event) => {
        setLogin(event.target.value)
    }

    const passwordInputHandler = (event) => {
        setPassword(event.target.value)
    }

    const submitHandler = async (event) => {
        event.preventDefault()
        await axios.post('http://localhost:8080/log-in', {
            login: login,
            password: password
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                if (res.data.message) {
                    localStorage.setItem('token', res.data.message)
                    setStatus(true)
                    console.log(localStorage.getItem('token'))
                }
            })
            .catch((e) => {
                console.log(e)
                setStatus(false)
            })
    }

    return <form className={styles.modal_login} onSubmit={submitHandler}>
        <img className={stylesLogo.header_logo} src={require("../../assets/icons/logo.png")}
             alt="Image Not Found"></img>
        <p className={status ? styles.hidden : styles.failure}>Помилка реєстрації, помилковий логін або пароль</p>
        <p style={{textAlign: "left"}}>З поверненням !</p>
        <Input height="50px" placeholder="Логін або електронна пошта" type="text" fontSize="15px"
               status={status} handler={loginInputHandler}/>
        <Input height="50px" placeholder="Пароль" type="password" fontSize="15px"
               status={status} handler={passwordInputHandler}/>
        <p className={styles.modal_signUp_text}>Немаєте акаунту? Ви завжди можете створити новий <a
            onClick={props.openSignUpModal} className={styles.link}>ТУТ!</a></p>
        <Button type="submit" text="ПІДТВЕРДИТИ"/>
        <p className={styles.modal_signUp_text}>Бажаєте увійти як компанія? Перейдіть
            <NavLink onClick={props.onClick} to='/create-company'
                     className={styles.link}> СЮДИ!</NavLink>
        </p>
    </form>
}

export default ModalLogin