import styles from "../Modal.module.css"
import stylesLogo from "../../pages/Home/Header.module.css"
import Input from "../../UI/Input"
import Button from "../../UI/Button"
import {Form, NavLink} from "react-router-dom";
import localStorage from 'localStorage'

const ModalLogin = (props) => {


    console.log(localStorage.getItem('token'))

    return <Form className={styles.modal_login} method="post">
        <img className={stylesLogo.header_logo} src={require("../../assets/icons/logo.png")}
             alt="Image Not Found"></img>
        <p className={props.status ? styles.hidden : styles.failure}>Помилка реєстрації, помилковий логін або пароль</p>
        <p style={{textAlign: "left"}}>З поверненням !</p>
        <Input height="50px" placeholder="Логін або електронна пошта" type="text" fontSize="15px"
               status={props.status} name = "login"/>
        <Input height="50px" placeholder="Пароль" type="password" fontSize="15px"
               status={props.status} name = "password"/>
        <p className={styles.modal_signUp_text}>Немаєте акаунту? Ви завжди можете створити новий <a
            onClick={props.openSignUpModal} className={styles.link}>ТУТ!</a></p>
        <Button type = "submit" text="ПІДТВЕРДИТИ"/>
        <p className={styles.modal_signUp_text}>Бажаєте увійти як компанія? Перейдіть
            <NavLink onClick={props.onClick} to='/create-company'
                     className={styles.link}> СЮДИ!</NavLink>
        </p>
    </Form>
}

export default ModalLogin