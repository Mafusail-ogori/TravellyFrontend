import Backdrop from "../UI/Backdrop";
import {useState} from "react";
import ModalLogin from "./Modals/ModalLogin";
import ModalSignUp from "./Modals/ModalSignUp";

const Modal = (props) => {

    const [currentModal, setCurrentModal] = useState('modalLogin');

    const openSignUpModal = () => {
        setCurrentModal('modalSignUp')
    }

    const openLogInModal = () => {
        setCurrentModal('modalLogin')
    }

    return <Backdrop onClick={props.onClose}>
        {currentModal === 'modalLogin' && (
            <ModalLogin openSignUpModal={openSignUpModal} onClick = {props.onClose}/>
        )}
        {currentModal === 'modalSignUp' && (
            <ModalSignUp openLogInModal={openLogInModal}/>)}
    </Backdrop>
}

export default Modal