import styles from './TripCard.module.css'
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import getToken from "../util/GetToken";
import Button from "../UI/Button";
import classes from './Modal.module.css'
import ModalPayment from "./Modals/ModalPayment";
import ReactDOM from "react-dom";
import ModalAddCart from "./Modals/ModalAddCart";
import {useNavigate} from "react-router-dom";
import {TripContext} from "../storage/TripContext";

const TripCard = (props) => {
    const [tripImage, setTripImage] = useState('')
    const [status, setStatus] = useState(false)
    const [expanded, setExpanded] = useState(false)
    const {setTrip} = useContext(TripContext)

    const mouseOverHandler = () => {
        setExpanded(true)
    }

    const mouseOutHandler = () => {
        setExpanded(false)
    }

    const [isPayModal, setIsPayModal] = useState(false);
    const [isAmountModal, setIsAmountModal] = useState(false)
    const payButtonClickHandler = () => {
        setIsPayModal(true);
    }

    const addButtonClickHandler = () => {
        setIsAmountModal(true)
    }

    const onClick = () => {
        setIsPayModal(false);
    }

    const navigation = useNavigate()

    const editTripHandler = () => {
        localStorage.setItem('page', 'edit')
        navigation('/company/edit')
        setTrip({
            id: props.id,
            name: props.title,
            peopleAmount: props.peopleAmount,
            transfer: props.transfer,
            food: props.food,
            hotel: props.hotel,
            startCountry: props.startCountry,
            destinationCountry: props.destinationCountry,
            startDate: props.startDate,
            endDate: props.endDate,
            price: props.price,
            description: props.description,
            image: tripImage
        })
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

    const deleteFromCartHandler = async () => {
        await axios.post('http://localhost:8080/user/delete-cart', {
            tripId: props.id,
            amount: props.orderAmount
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

    const deleteTrip = async () => {
        await axios.post('http://localhost:8080/company/delete-trip', {
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

    return <div className={styles.form_card} onMouseOver={mouseOverHandler} onMouseOut={mouseOutHandler}>
        {isPayModal && ReactDOM.createPortal(<ModalPayment onClose={onClick}/>,
            document.getElementById("modal"))}
        {isAmountModal && ReactDOM.createPortal(<ModalAddCart tripId={props.id} onClose={onClick}/>,
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
                    <li>Вільних місць: <span>{props.peopleAmount}</span></li>
                </ul>
            </div>
        </div>
        {props.page === 'review' && <div className={expanded ? styles.show_extra_info : styles.hide_extra_info}>
            <h2>Опис</h2>
            <p>{props.description}</p>
            <div className={styles.action_panel}>
                <Button text="РЕДАГУВАТИ" onClick={editTripHandler}/>
                <Button text="ВИДАЛИТИ" onClick = {deleteTrip}/>
            </div>
            <p className={status ? classes.success : classes.hidden}>ВИДАЛЕНО УСПІШНО</p>
        </div>
        }
        {props.page === 'search' && <div className={expanded ? styles.show_extra_info : styles.hide_extra_info}>
            <h2>Опис</h2>
            <p>{props.description}</p>
            <div className={styles.action_panel}>
                <Button text="ДОДАТИ" onClick={addButtonClickHandler}/>
            </div>
        </div>
        }
        {props.page === 'cart' && <div className={expanded ? styles.show_extra_info : styles.hide_extra_info}>
            <h2>Опис</h2>
            <p>{props.description}</p>
            <div className={styles.status_container}>
                <div className={styles.action_panel}>
                    <Button text="ПРИДБАТИ" onClick={payButtonClickHandler}/>
                    <Button text="ВИДАЛИТИ" onClick={deleteFromCartHandler}/>
                </div>
                <p className={status ? classes.success : classes.hidden}>ВИДАЛЕНО УСПІШНО</p>
            </div>
        </div>
        }
    </div>
}

export default TripCard