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
import {useState} from "react";
import axios from "axios";
import styling from "../../../components/Modal.module.css";
import getToken from "../../../util/GetToken";
import TextArea from "../../../UI/TextArea";

const NewTrip = () => {
    const formData = new FormData()

    const [name, setName] = useState("");
    const [amount, setAmount] = useState(0);
    const [animal, setAnimal] = useState(false);
    const [transferType, setTransferType] = useState("");
    const [foodType, setFoodType] = useState("");
    const [hotelName, setHotelName] = useState("");
    const [startCountry, setStartCountry] = useState("");
    const [endCountry, setEndCountry] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [image, setImage] = useState(null)
    const [price, setPrice] = useState(0.0)
    const [status, setStatus] = useState(true)
    const [success, setSuccess] = useState(false)
    const [description, setDescription] = useState("")

    const nameInputHandler = (event) => {
        setName(event.target.value)
    }

    const amountInputHandler = (event) => {
        setAmount(event.target.value)
    }

    const animalInputHandler = (event) => {
        event.target.value === 'Так' ? setAnimal(true) : setAnimal(false)
    }

    const transferInputHandler = (event) => {
        setTransferType(event.target.value)
    }

    const foodInputHandler = (event) => {
        setFoodType(event.target.value)
    }

    const hotelInputHandler = (event) => {
        setHotelName(event.target.value)
    }
    const startCountryInputHandler = (event) => {
        setStartCountry(event.target.value)
    }
    const endCountryInputHandler = (event) => {
        setEndCountry(event.target.value)
    }
    const startDateInputHandler = (event) => {
        setStartDate(new Date(event.target.value))
    }
    const endDateInputHandler = (event) => {
        setEndDate(new Date(event.target.value))
    }
    const imageInputHandler = (event) => {
        setImage(event.target.files[0])
    }
    const priceInputHandler = (event) => {
        setPrice(event.target.value)
    }

    const descriptionInputHandler = (event) => {
        setDescription(event.target.value)
    }

    formData.append('name', name)
    formData.append('amount', amount)
    formData.append('animal', animal)
    formData.append('transfer', transferType)
    formData.append('food', foodType)
    formData.append('hotel', hotelName)
    formData.append('startCountry', startCountry)
    formData.append('endCountry', endCountry)
    formData.append('startDate', startDate.toISOString())
    formData.append('endDate', endDate.toISOString())
    formData.append('image', image)
    formData.append('price', price)
    formData.append('token', getToken())
    formData.append('description', description)

    const addTripHandler = async (event) => {
        event.preventDefault()
        await axios.post('http://localhost:8080/company/add-trip', formData)
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

    return <ContentWrapper color="#FFCA42" whiteText="ДОДАВАЙ" blackText="СТВОРЮЙ" height="1600px">
        <FormCard onSubmit={addTripHandler}>
            <img src={logo} className={classes.header_logo} alt="Not found"/>
            <p className={status ? styling.hidden : styling.failure}>Неправильно введені дані, або на такі дати вже існує така поїздка</p>
            <p className={success ? styling.success : styling.hidden}>Путівку додано успішно</p>
            <p className={styles.text}>БУДЬ ЛАСКА ЗАПОВНІТЬ ВСІ ПОЛЯ</p>
            <div className={styles.container}>
                <RowerWrapper>
                    <Input handler={nameInputHandler} placeholder="Назва путівки " type="text" label="Назва путівки "
                           height="50px" status={status}/>
                    <Input handler={amountInputHandler} placeholder="Максимальна кількість людей " type="number"
                           label="Максимальна кількість людей "
                           height="50px" status={status}/>
                    <Select handler={animalInputHandler} label="Навність тварин " height="50px" status={status}
                            options={boolean}/>
                    <Select handler={transferInputHandler} label="Трансфер " height="50px" status={status}
                            options={transfer}/>
                    <Select handler={foodInputHandler} label="Харчування " height="50px" status={status}
                            options={food}/>
                    <Input handler={hotelInputHandler} placeholder="Назва готелю " type="text" label="Назва готелю "
                           height="50px" status={status}/>
                </RowerWrapper>
                <RowerWrapper>
                    <Select handler={startCountryInputHandler} label="Країна відправки " height="50px" status={status}
                            options={countryList}/>
                    <Select handler={endCountryInputHandler} label="Країна прибуття " height="50px" status={status}
                            options={countryList}/>
                    <Input handler={startDateInputHandler} type='date' label="Початок подорожі " height="50px"
                           status={status}/>
                    <Input handler={endDateInputHandler} type='date' label="Кінець подорожі " height="50px"
                           status={status}/>
                    <Input handler={imageInputHandler} type='file' label="Фото путівки " height="50px" status={status}/>
                    <Input handler={priceInputHandler} placeholder='Ціна за людину' type='number'
                           label="Ціна за людину " height="50px"
                           status={status}/>
                </RowerWrapper>
            </div>
            <TextArea height = "100px" label = "Опис" placeholder = "Опис" fontSize = "14px" status = {status} handler = {descriptionInputHandler}/>
            <Button type="submit" text="ВІДПРАВИТИ"/>
        </FormCard>
    </ContentWrapper>
}

export default NewTrip