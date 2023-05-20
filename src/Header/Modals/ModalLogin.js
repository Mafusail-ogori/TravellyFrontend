import styles from "../Modal.module.css"
import stylesLogo from "../Header.module.css"
import Input from "../../UI/Input"
import SubmitButton from "../../UI/SubmitButton"
import {useState} from "react"
import {NavLink} from "react-router-dom";
import axios from "axios";

const ModalLogin = (props) => {
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState("")
    const loginInputHandler = (event) => {
        setLogin(event.target.value)
    }

    const passwordInputHandler = (event) => {
        setPassword(event.target.value)
    }

    const [status, setStatus] = useState(true)

    const validateUserHandler = async () => {
        await axios.post('http://localhost:8080/log-in', {
            login: login,
            password: password
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
            console.log(res)
        })
            .catch((e) => {
            console.log(e)
        })
    }

    return <form className={styles.modal_login} onSubmit={(e) => {
        e.preventDefault()
    }}>
        <img className={stylesLogo.header_logo} src={require("../../assets/icons/logo.png")}
             alt="Image Not Found"></img>
        <p style={{textAlign: "left"}}>З поверненням !</p>
        <Input height="50px" placeholder="Логін або електронна пошта" type="text" fontSize="15px"
               handler={loginInputHandler} status={status}/>
        <Input height="50px" placeholder="Пароль" type="password" fontSize="15px" handler={passwordInputHandler}
               status={status}/>
        <p className={styles.modal_signUp_text}>Немаєте акаунту? Ви завжди можете створити новий <a
            onClick={props.openSignUpModal} className={styles.link}>ТУТ!</a></p>
        <SubmitButton text="ПІДТВЕРДИТИ" onClick={validateUserHandler}/>
        <p className={styles.modal_signUp_text}>Бажаєте увійти як компанія? Перейдіть
            <NavLink onClick={props.onClick} to='/create-company'
                     className={styles.link}> СЮДИ!</NavLink>
        </p>
    </form>
}

export default ModalLogin
