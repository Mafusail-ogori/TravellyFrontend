import stylesLogo from "../../pages/Home/Header.module.css";
import Backdrop from "../../UI/Backdrop";
import styles from "../Modal.module.css";
import Input from "../../UI/Input";
import Button from "../../UI/Button";

const ModalAddCart = (props) => {
    return <>
        <Backdrop onClick={props.onClose}/>
        <form className={styles.modal_login}>
            <img className={stylesLogo.header_logo} src={require("../../assets/icons/logo.png")}
                 alt="Image Not Found"></img>
            <p>ВВЕДІТЬ КІЛЬКІСТЬ!</p>
            <Input height="50px" placeholder="Номер картки" type="number" fontSize="15px"
                   label="Номер картки" pattern="[0-9]{16}"/>
            <Button text='ОПЛАТИТИ'/>
        </form>
    </>
}

export default ModalAddCart