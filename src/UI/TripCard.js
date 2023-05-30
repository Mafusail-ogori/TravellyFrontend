import styles from './TripCard.module.css'
import {useEffect, useState} from "react";
import axios from "axios";
import getToken from "../util/GetToken";
import Button from "./Button";
import classes from '../components/Modal.module.css'
import ModalPayment from "../components/Modals/ModalPayment";
import ReactDOM from "react-dom";
import Modal from "../components/Modal";
import ModalAddCart from "../components/Modals/ModalAddCart";

const TripCard = (props) => {
    const [tripImage, setTripImage] = useState('')
    const [status, setStatus] = useState(false)
    const [expanded, setExpanded] = useState(false)

    const mouseOverHandler = () => {
        setExpanded(true)
    }

    const mouseOutHandler = () => {
        setExpanded(false)
    }

    const [isModal, setIsModal] = useState(false);
    const buttonClickHandler = () => {
        setIsModal(true);
    }

    const onClick = (event) => {
        setIsModal(false);
    }

    useEffect(() => {
        const fetchCompanyImage = async () => {
            try {
                const response = await fetch('http://localhost:8080/company/trip-image', {
                    method: 'POST',
                    body: JSON.stringify({id: props.id}),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                if (response.ok) {
                    const blob = await response.blob();
                    const objectURL = URL.createObjectURL(blob);
                    setTripImage(objectURL)
                } else {
                    console.error('Error fetching image:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching image:', error);
            }
        };
        fetchCompanyImage();
    }, [])

    const chooseTripHandler = async () => {
        await axios.post('http://localhost:8080/user/user-choose-trip', {
            tripId: props.id,
            //додати amount, для передачі на бек інформації про кількість віднятих квитків
        }, {
            headers: {
                'Authorization': `Bearer ${getToken()}`,
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            res ? setStatus(true) : setStatus(false)
        }).catch((e) => {
            console.log(e)
        })
    }

    const deleteFromCartHandler = async () => {
        await axios.post('http://localhost:8080/user/delete-cart', {
            tripId: props.id
        }, {
            headers: {
                'Authorization': `Bearer ${getToken()}`,
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            res ? setStatus(true) : setStatus(false)
        }).catch((e) => {
            console.log(e)
        })
    }

    console.log(status)

    return <div className={styles.form_card} onMouseOver={mouseOverHandler} onMouseOut={mouseOutHandler}>
        {isModal && ReactDOM.createPortal(<ModalPayment onClose={onClick}/>,
            document.getElementById("modal"))}

        {isModal && ReactDOM.createPortal(<ModalAddCart tripId = {props.id} onClose={onClick}/>,
            document.getElementById("modal"))}

        <img src={tripImage} className={styles.photo}></img>
        <div className={styles.info_container}>
            <h2>{props.title} {props.price}<i className={"fa-solid fa-hryvnia-sign"}/></h2>
            <div className={styles.options_container}>
                <ul>
                    <li>Звідки: <span>{props.startCountry}</span></li>
                    <li>Куди: <span>{props.endCountry}</span></li>
                    <li>Готель: <span>{props.hotel}</span></li>
                    <li>Трансфер: <span>{props.transfer}</span></li>
                </ul>
                <ul>
                    <li>Починається: <span>{props.startDate}</span></li>
                    <li>Закінчується: <span>{props.endDate}</span></li>
                    <li>Харчування: <span>{props.food}</span></li>
                    <li>Максимально людей: <span>{props.peopleAmount}</span></li>
                </ul>
            </div>
        </div>
        {props.page === 'review' && <div className={expanded ? styles.show_extra_info : styles.hide_extra_info}>
            <h2>Опис</h2>
            <p>{props.description}</p>
        </div>
        }
        {props.page === 'search' && <div className={expanded ? styles.show_extra_info : styles.hide_extra_info}>
            <h2>Опис</h2>
            <p>{props.description}</p>
            <div className={styles.action_panel}>
                <Button text="ДОДАТИ" onClick={buttonClickHandler}/>
            </div>
        </div>
        }
        {props.page === 'cart' && <div className={expanded ? styles.show_extra_info : styles.hide_extra_info}>
            <h2>Опис</h2>
            <p>{props.description}</p>
            <div className={styles.status_container}>
                <div className={styles.action_panel}>
                    <Button text="ПРИДБАТИ" onClick = {buttonClickHandler}/>
                    <Button text ="ВИДАЛИТИ" onClick = {deleteFromCartHandler}/>
                </div>
                <p className={status ? classes.success : classes.hidden}>ВИДАЛЕНО УСПІШНО</p>
            </div>
        </div>
        }
    </div>
}

export default TripCard