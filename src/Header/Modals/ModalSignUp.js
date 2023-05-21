import styles from "../Modal.module.css";
import stylesLogo from "../Header.module.css";
import Input from "../../UI/Input";
import SubmitButton from "../../UI/SubmitButton";
import {useState} from "react";
import axios from "axios";

const ModalSignUp = (props) => {
    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")
    const [login, setLogin] = useState("")
    const [selectedFile, setSelectedFile] = useState(null)
    const [status, setStatus] = useState(true)
    const mailInputHandler = (event) => {
        setMail(event.target.value)
    }

    const passwordInputHandler = (event) => {
        setPassword(event.target.value)
    }

    const loginInputHandler = (event) => {
        setLogin(event.target.value)
    }

    const imageInputHandler = (event) => {
        setSelectedFile(event.target.files[0])
    }

    const formData = new FormData();
    formData.append('mail', mail)
    formData.append('login', login)
    formData.append('password', password)
    formData.append('image', selectedFile)

    const addUserHandler = async () => {
        await axios.post('http://localhost:8080/sign-up', formData)
            .then((res) => {
                if(res.message === 'Found same user'){
                    setStatus(false)
                }
                else{
                    setStatus(true)
                }
            })
            .catch((e) => {
                console.log(e)
                setStatus(false)
            })
    }

    return <form className={styles.modal_signUp} onSubmit={(e) => {
        e.preventDefault()
    }}>
        <img className={stylesLogo.header_logo} src={require("../../assets/icons/logo.png")}
             alt="Image Not Found"></img>
        <p className={status ? styles.hidden : styles.failure}>Помилка створення, такий акаунт вже існує, або вказані не всі дані</p>
        <p>Створюй!</p>
        <Input height="50px" placeholder="Електронна пошта" type="email" fontSize="15px" handler={mailInputHandler}
               status={status}/>
        <Input height="50px" placeholder="Логін" type="text" fontSize="15px" handler={loginInputHandler}
               status={status}/>
        <Input height="50px" placeholder="Аватар" type="file" fontSize="15px" handler={imageInputHandler}
               status={status}
               accept=".png, .jpeg"/>
        <Input height="50px" placeholder="Пароль" type="password" fontSize="15px" handler={passwordInputHandler}
               status={status}/>
        <p className={styles.modal_signUp_text}>Ви вже у спільноті? Поверніться <a
            onClick={props.openLogInModal} className={styles.link}>НАЗАД!</a></p>
        <SubmitButton text="ПІДТВЕРДИТИ" onClick={addUserHandler}/>
    </form>
}

export default ModalSignUp