import styles from './Modal.module.css'
import Backdrop from "../UI/Backdrop";
import Input from "../UI/Input";
import stylesLogo from './Header.module.css'
import SubmitButton from "../UI/SubmitButton";
import {useState} from "react";


const Modal = (props) => {
    const ModalLogin = ({openSignUpModal}) => <form className={styles.modal_login}>
        <img className={stylesLogo.header_logo} src={require("../assets/icons/logo.png")} alt="Image Not Found"></img>
        <p style={{textAlign: "left"}}>З поверненням !</p>
        <Input height="50px" placeholder="Логін або електронна пошта" type="email" fontSize="15px"/>
        <Input height="50px" placeholder="Пароль" type="password" fontSize="15px"/>
        <p className={styles.modal_signUp_text}>Немаєте акаунту? Ви завжди можете створити новий <a
            onClick={openSignUpModal}>ТУТ!</a></p>
        <SubmitButton text="ПІДТВЕРДИТИ"/>
    </form>

    const ModalSignUp = ({openLogInModal}) => <form className={styles.modal_signUp}>
        <img className={stylesLogo.header_logo} src={require("../assets/icons/logo.png")} alt="Image Not Found"></img>
        <p style={{textAlign: "left"}}>Створюй!</p>
        <Input height="50px" placeholder="Електронна пошта" type="email" fontSize="15px"/>
        <Input height="50px" placeholder="Логін" type="email" fontSize="15px"/>
        <Input height="50px" placeholder="Пароль" type="password" fontSize="15px"/>
        <p className={styles.modal_signUp_text}>Ви вже у спільноті? Поверніться <a
            onClick={openLogInModal}>НАЗАД!</a></p>
        <SubmitButton text="ПІДТВЕРДИТИ"/>
    </form>


    const [currentModal, setCurrentModal] = useState('modalLogin');

    const openSignUpModal = () => {
        setCurrentModal('modalSignUp')
    }

    const openLogInModal = () => {
        setCurrentModal('modalLogin')
    }
    const [modalWindow, setModal] = useState(true);

    return <Backdrop onClick={props.onClose}>
        {currentModal === 'modalLogin' && (
            <ModalLogin openSignUpModal={openSignUpModal}/>
        )}
        {currentModal === 'modalSignUp' && (
            <ModalSignUp openLogInModal={openLogInModal}/>)}
    </Backdrop>
}

export default Modal