import styles from "../Modal.module.css";
import stylesLogo from "../Header.module.css";
import Input from "../../UI/Input";
import SubmitButton from "../../UI/SubmitButton";
import {useState} from "react";
import axios from "axios";

const ModalSignUp = (props) => {
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState("")
    const [selectedFile, setSelectedFile] = useState(null)
    const [uploaded, setUploaded] = useState()
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

    const [result, setResult] = useState(true);

    const formData = new FormData();
    formData.append('mail', mail)
    formData.append('login', login)
    formData.append('password', password)
    formData.append('image', selectedFile)

    const addUserHandler = async () => {
        await axios.post('http://localhost:8080/sign-up', formData)
            .then((res) => {
                console.log(res.message)
            })
            .catch((e) => {
                console.log(e)
            })
    }

    return <form className={styles.modal_signUp} onSubmit={(e) => {
        e.preventDefault()
    }}>
        <img className={stylesLogo.header_logo} src={require("../../assets/icons/logo.png")}
             alt="Image Not Found"></img>
        <p>Створюй!</p>
        <Input height="50px" placeholder="Електронна пошта" type="email" fontSize="15px" handler={mailInputHandler}
               status={result}/>
        <Input height="50px" placeholder="Логін" type="text" fontSize="15px" handler={loginInputHandler}
               status={result}/>
        <Input height="50px" placeholder="Аватар" type="file" fontSize="15px" handler={imageInputHandler}
               status={result}
               accept=".png, .jpeg"/>
        <Input height="50px" placeholder="Пароль" type="password" fontSize="15px" handler={passwordInputHandler}
               status={result}/>
        <p className={styles.modal_signUp_text}>Ви вже у спільноті? Поверніться <a
            onClick={props.openLogInModal} className={styles.link}>НАЗАД!</a></p>
        <SubmitButton text="ПІДТВЕРДИТИ" onClick={addUserHandler}/>
    </form>
}

export default ModalSignUp