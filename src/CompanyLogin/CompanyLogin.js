import ContentWrapper from "../UI/ContentWrapper";
import FormCard from "../UI/FormCard";
import Input from "../UI/Input";
import {useState} from "react";
import RowerWrapper from "../UI/RowerWrapper";
import styles from './CompanyLogin.module.css'
import SubmitButton from "../UI/SubmitButton";


const CompanyLogin = () => {
    const[name, setName] = useState("")
    const[license, setLicense] = useState("")
    const[date, setDate] = useState(new Date())
    const[mail, setMail] = useState("")
    const[employeeAmount, setEmployeeAmount] = useState(0)
    const[password, setPassword] = useState("")


    const [status, setStatus] = useState(true)

    const nameInputHandler = (event) => {
        setName(event.target.value)
    }

    const licenseInputHandler = (event) => {
        setLicense(event.target.value)
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

    const newCompany = {
        name: name,
        licence: license,
        creationDate: date,
        mail: mail,
        employeeAmount: employeeAmount,
        password: password
    }

    const addCompanyHandler = async () => {
        const res = await fetch('http://localhost:8080/', {
            method: 'POST',
            body: JSON.stringify(newCompany),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json()
        console.log(data.message)
    }

    return <ContentWrapper whiteText="ВІДКРИВАЙ" blackText="МОЖЛИВІСТЬ" color="#FFCA42" height="800px">
        <FormCard height="60%">
            <p className={styles.text}>ВВЕДІТЬ ДАНІ КОМПАНІЇ НИЖЧЕ</p>
            <div className={styles.container}>
                <RowerWrapper>
                    <Input height="60px" status = {status} type = "text" placeholder = "Назва компанії" handler = {nameInputHandler}/>
                    <Input height="60px" status = {status} type = "text" placeholder = "Ліцензія компанії" handler = {licenseInputHandler}/>
                    <Input height="60px" status = {status} type = "date" placeholder = "Дата заснування" handler = {dateInputHandler}/>
                </RowerWrapper>
                <RowerWrapper>
                    <Input height="60px" status = {status} type = "email" placeholder = "Електронна скринька" handler = {mailInputHandler}/>
                    <Input height="60px" status = {status} type = "number" placeholder = "Кількість працівників" handler = {employeeInputHandler}/>
                    <Input height="60px" status = {status} type = "password" placeholder = "Пароль" handler = {passwordInputHandler}/>
                </RowerWrapper>
            </div>
            <SubmitButton text = "ВІДПРАВИТИ" height = "50px"/>
        </FormCard>
    </ContentWrapper>
}

export default CompanyLogin