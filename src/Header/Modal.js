import Backdrop from "../UI/Backdrop";
import {useState} from "react";
import ModalLogin from "./Modals/ModalLogin";
import ModalSignUp from "./Modals/ModalSignUp";
import axios from "axios";
import localStorage from "localStorage";
import {redirect} from "react-router-dom";

const Modal = (props) => {
    const [currentModal, setCurrentModal] = useState('modalLogin');

    const openSignUpModal = () => {
        setCurrentModal('modalSignUp')
    }

    const openLogInModal = () => {
        setCurrentModal('modalLogin')
    }

    //status = {status}

    return <Backdrop onClick={props.onClose}>
        {currentModal === 'modalLogin' && (
            <ModalLogin openSignUpModal={openSignUpModal} onClick = {props.onClose} />
        )}
        {currentModal === 'modalSignUp' && (
            <ModalSignUp openLogInModal={openLogInModal} onClick = {props.onClose}/>)}
    </Backdrop>
}

export default Modal

export const loginAction = async ({request}) => {
    const data = await request.formData()
    await axios.post('http://localhost:8080/log-in', {
        login: data.get('login'),
        password: data.get('password')
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((res) => {
            if(res.data.message){
                localStorage.setItem('token', res.data.message)
                // setStatus(true)
                return redirect('/logged-user-page')
            }
        })
        .catch((e) => {
            console.log(e)
            // setStatus(false)
            return null;
        })
}