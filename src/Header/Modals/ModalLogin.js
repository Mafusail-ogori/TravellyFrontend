import styles from "../Modal.module.css"
import stylesLogo from "../Header.module.css"
import Input from "../../UI/Input"
import SubmitButton from "../../UI/SubmitButton"
import  {useState} from "react"

const ModalLogin = (props) =>{
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState("")
    const mailInputHandler = (event) =>{
        setMail(event.target.value)
    }

    const passwordInputHandler = (event) => {
        setPassword(event.target.value)
    }

    return  <form className={styles.modal_login}>
        <img className={stylesLogo.header_logo} src={require("../../assets/icons/logo.png")} alt="Image Not Found"></img>
        <p style={{textAlign: "left"}}>З поверненням !</p>
        <Input height="50px" placeholder="Логін або електронна пошта" type="email" fontSize="15px" handler = {mailInputHandler}/>
        <Input height="50px" placeholder="Пароль" type="password" fontSize="15px" handler = {passwordInputHandler}/>
        <p className={styles.modal_signUp_text}>Немаєте акаунту? Ви завжди можете створити новий <a
            onClick={props.openSignUpModal}>ТУТ!</a></p>
        <SubmitButton text="ПІДТВЕРДИТИ"/>
    </form>
}

export default ModalLogin
