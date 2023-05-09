import styles from './Modal.module.css'
import Backdrop from "../UI/Backdrop";
import Input from "../UI/Input";
import stylesLogo from './Header.module.css'
import SubmitButton from "../UI/SubmitButton";

const Modal = (props) =>{
    return<Backdrop onClick = {props.onClose}>
        <form className={styles.modal}>
            <img className={stylesLogo.header_logo} src = {require("../assets/icons/logo.png")} alt="Image Not Found"></img>
            <p style = {{textAlign : "left"}}>З поверненням !</p>
            <Input height = "50px" placeholder = "Логін або електронна пошта" type = "email" fontSize = "15px"/>
            <Input height = "50px" placeholder = "Пароль" type = "password" fontSize = "15px"/>
            <SubmitButton text = "ПІДТВЕРДИТИ"/>
        </form>
    </Backdrop>
}

export default Modal