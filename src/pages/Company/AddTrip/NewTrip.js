import ContentWrapper from "../../../UI/ContentWrapper";
import FormCard from "../../../UI/FormCard";
import Input from "../../../UI/Input";
import RowerWrapper from "../../../UI/RowerWrapper";
import styles from '../SignUp/CompanySignUp.module.css'
import logo from "../../../assets/icons/logo.png";
import classes from "../../Home/Header.module.css";
import Button from "../../../UI/Button";
import Select from "../../../UI/Select";
import {countryList} from "../../../util/Countries";
import {food} from "../../../util/Food";
import {transfer} from "../../../util/Transfer";
import {boolean} from "../../../util/Boolean";
import {useContext, useState} from "react";
import axios from "axios";
import styling from "../../../components/Modal.module.css";
import getToken from "../../../util/GetToken";
import TextArea from "../../../UI/TextArea";
import {TripContext} from "../../../storage/TripContext";
import {useLocation} from "react-router-dom";

const NewTrip = () => {
    const [status, setStatus] = useState(true)
    const [success, setSuccess] = useState(false)
    const {trip} = useContext(TripContext)
    const actualLocation = useLocation()

    const addOrEditTrip = async (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)

        if (actualLocation.pathname === '/company/edit') {
            formData.append('tripId', trip.id)
            const data = Object.fromEntries(formData.entries());
            console.log(data)
            await axios.post('http://localhost:8080/company/edit-trip', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then((res) => {
                    setStatus(true)
                    setSuccess(true)
                })
                .catch()
        } else {
            await axios.post('http://localhost:8080/company/add-trip', formData, {
                headers: {
                    'Authorization': `Bearer ${getToken()}`
                }
            })
                .then((res) => {
                    setStatus(true)
                    setSuccess(true)
                })
                .catch((e) => {
                    console.log(e)
                    setStatus(false)
                    setSuccess(false)
                })
        }
    }

    return <ContentWrapper color="#FFCA42" whiteText="ДОДАВАЙ" blackText="СТВОРЮЙ" height="1600px">
        <FormCard onSubmit={addOrEditTrip}>
            <img src={logo} className={classes.header_logo} alt="Not found"/>
            <p className={status ? styling.hidden : styling.failure}>Неправильно введені дані, або на такі дати вже
                існує така поїздка</p>
            <p className={success ? styling.success : styling.hidden}>Путівку додано/змінено успішно</p>
            <p className={styles.text}>БУДЬ ЛАСКА ЗАПОВНІТЬ ВСІ ПОЛЯ</p>
            <div className={styles.container}>
                <RowerWrapper>
                    <Input value={trip ? trip.name : ''} name="name" placeholder="Назва путівки " type="text"
                           label="Назва путівки "
                           height="50px" status={status}/>
                    <Input value={trip ? trip.peopleAmount : ''} name="amount"
                           placeholder="Максимальна кількість людей " type="number"
                           label="Максимальна кількість людей "
                           height="50px" status={status}/>
                    <Select name="animal" label="Навність тварин " height="50px" status={status}
                            options={boolean}/>
                    <Select value={trip ? trip.transfer : ''} name="transfer" label="Трансфер " height="50px"
                            status={status}
                            options={transfer}/>
                    <Select value={trip ? trip.food : ''} name="food" label="Харчування " height="50px" status={status}
                            options={food}/>
                    <Input value={trip ? trip.peopleAmount : ''} name="hotel" placeholder="Назва готелю " type="text"
                           label="Назва готелю "
                           height="50px" status={status}/>
                </RowerWrapper>
                <RowerWrapper>
                    <Select value={trip ? trip.startCountry : ''} name="startCountry" label="Країна відправки " height="50px" status={status}
                            options={countryList}/>
                    <Select value={trip ? trip.endCountry : ''} name="endCountry" label="Країна прибуття " height="50px" status={status}
                            options={countryList}/>
                    <Input value={trip ? trip.startDate : ''} name="startDate" type='date' label="Початок подорожі " height="50px"
                           status={status}/>
                    <Input value={trip ? trip.endDate : ''} name="endDate" type='date' label="Кінець подорожі " height="50px"
                           status={status}/>
                    <Input  name="image" type='file' label="Фото путівки " height="50px" status={status}/>
                    <Input value={trip ? trip.price : ''} name="price" placeholder='Ціна за людину' type='number'
                           label="Ціна за людину " height="50px"
                           status={status}/>
                </RowerWrapper>
            </div>
            <TextArea value={trip ? trip.description : ''} name="description" height="100px" label="Опис" placeholder="Опис" fontSize="14px" status={status}
            />
            <Button type="submit" text="ВІДПРАВИТИ"/>
        </FormCard>
    </ContentWrapper>
}

export default NewTrip