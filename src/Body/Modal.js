import styles from './'
import Backdrop from "../UI/Backdrop";

const Modal = (props) =>{
    return<Backdrop onClick = {props.onClose}>
        <form className={styles.modal}>

        </form>
    </Backdrop>
}

export default Modal