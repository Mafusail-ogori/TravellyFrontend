import styles from "../Modal.module.css";
import stylesLogo from "../Header.module.css";
import Input from "../../UI/Input";
import SubmitButton from "../../UI/SubmitButton";
import {useState} from "react";

const ModalSignUp = (props) => {
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState("")
    const mailInputHandler = (event) => {
        setMail(event.target.value)
    }

    const passwordInputHandler = (event) => {
        setPassword(event.target.value)
    }

    const loginInputHandler = (event) => {
        setLogin(event.target.value)
    }

    const newUser = {
        mail: mail,
        password: password,
        login: login
    }

    const [result, setResult] = useState(true);
    const addUserHandler = async () => {
        const res = await fetch('http://localhost:8080/', {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json()
        data.message === 'User added successfully' ? setResult(true) : setResult(false);
        console.log(data.message)
    }

    return <form className={styles.modal_signUp}>
        <img className={stylesLogo.header_logo} src={require("../../assets/icons/logo.png")}
             alt="Image Not Found"></img>
        <p style={{textAlign: "left"}}>Створюй!</p>
        <Input height="50px" placeholder="Електронна пошта" type="email" fontSize="15px" handler={mailInputHandler} status = {result}/>
        <Input height="50px" placeholder="Логін" type="text" fontSize="15px" handler={passwordInputHandler} status = {result}/>
        <Input height="50px" placeholder="Пароль" type="password" fontSize="15px" handler={loginInputHandler} status = {result}/>
        <p className={styles.modal_signUp_text}>Ви вже у спільноті? Поверніться <a
            onClick={props.openLogInModal}>НАЗАД!</a></p>
        <SubmitButton text="ПІДТВЕРДИТИ" onClick={addUserHandler}/>
    </form>
}

export default ModalSignUp