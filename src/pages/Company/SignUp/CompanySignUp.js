import ContentWrapper from "../../../UI/ContentWrapper";
import FormCard from "../../../UI/FormCard";
import Input from "../../../UI/Input";
import {useState} from "react";
import RowerWrapper from "../../../UI/RowerWrapper";
import styles from './CompanySignUp.module.css'
import Button from "../../../UI/Button";
import logo from '../../../assets/icons/logo.png'
import classes from '../../Home/Header.module.css'
import axios from "axios";
import styling from '../../../components/Modal.module.css'
import {NavLink} from "react-router-dom";


const CompanySignUp = () => {
    const [name, setName] = useState("")
    const [selectedFile, setSelectedFile] = useState(null)
    const [date, setDate] = useState(new Date())
    const [mail, setMail] = useState("")
    const [employeeAmount, setEmployeeAmount] = useState(0)
    const [password, setPassword] = useState("")
    const [success, setSuccess] = useState(false)


    const [status, setStatus] = useState(true)

    const nameInputHandler = (event) => {
        setName(event.target.value)
    }

    const imageInputHandler = (event) => {
        setSelectedFile(event.target.files[0])
    }

    const dateInputHandler = (event) => {
        setDate(event.target.value)
    }

    const mailInputHandler = (event) => {
        setMail(event.target.value)
    }

    const employeeInputHandler = (event) => {
        setEmployeeAmount(event.target.value)
    }

    const passwordInputHandler = (event) => {
        setPassword(event.target.value)
    }

    const formData = new FormData();

    formData.append('date', date)
    formData.append('email', mail)
    formData.append('employeeAmount', employeeAmount)
    formData.append('password', password)
    formData.append('name', name)
    formData.append('image', selectedFile)

    const addCompanyHandler = async (event) => {
        event.preventDefault()
        await axios.post('http://localhost:8080/company/sign-up', formData)
            .then((res) => {
                if (res.message === 'Found same company') {
                    setStatus(false)
                    setSuccess(false)
                } else {
                    setStatus(true)
                    setSuccess(true)
                }
            })
            .catch((e) => {
                console.log(e)
                setStatus(false)
                setSuccess(false)
            })
    }

    return <ContentWrapper whiteText="ВІДКРИВАЙ" blackText="МОЖЛИВІСТЬ" color="#ffc42b" height="1100px">
        <FormCard onSubmit = {addCompanyHandler}>
            <img src = {logo} className={classes.header_logo} alt="Not found"/>
            <p className={status ? styling.hidden : styling.failure}>Неправильно введені дані, або ж така компанія вже існує</p>
            <p className={success ? styling.success : styling.hidden}>Реєстрація пройшла успішно, тепер перейдіть на сторінку входження у акаунт</p>
            <p className={styles.text}>ВВЕДІТЬ ДАНІ КОМПАНІЇ НИЖЧЕ</p>
            <div className={styles.container}>
                <RowerWrapper>
                    <Input fontSize="14px" height="60px" status={status} type="text" placeholder="Назва компанії"
                           handler={nameInputHandler} label = "Назва компанії:"/>
                    <Input height="60px" status={status} type="file" placeholder="Логотип компанії"
                           handler = {imageInputHandler} accept="image/png, image/jpeg" label = "Логотип компанії:"/>
                    <Input fontSize="14px" height="60px" status={status} type="date" placeholder="Дата заснування"
                           handler={dateInputHandler} label = "Дата заснування:"/>
                </RowerWrapper>
                <RowerWrapper>
                    <Input fontSize="14px" height="60px" status={status} type="email" placeholder="Електронна скринька"
                           handler={mailInputHandler} label = "Електронна скринька:"/>
                    <Input fontSize="14px" height="60px" status={status} type="number"
                           placeholder="Кількість працівників" handler={employeeInputHandler} label = "Кількість працівників:"/>
                    <Input fontSize="14px" height="60px" status={status} type="password" placeholder="Пароль"
                           handler={passwordInputHandler} label = "Пароль:"/>
                </RowerWrapper>
            </div>
            <p className={styling.modal_signUp_text}>У вас вже є акаунт? Перейдіть
                <NavLink to='/company/log-in'
                         className={styling.link}> СЮДИ!</NavLink>
            </p>
            <Button type = "submit" text="ВІДПРАВИТИ"/>
        </FormCard>
    </ContentWrapper>
}

export default CompanySignUp