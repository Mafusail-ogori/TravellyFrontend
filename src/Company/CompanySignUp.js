import ContentWrapper from "../UI/ContentWrapper";
import FormCard from "../UI/FormCard";
import Input from "../UI/Input";
import {useState} from "react";
import RowerWrapper from "../UI/RowerWrapper";
import styles from './CompanySignUp.module.css'
import Button from "../UI/Button";
import axios from "axios";


const CompanySignUp = () => {
    const [name, setName] = useState("")
    const [image, setImage] = useState()
    const [date, setDate] = useState(new Date())
    const [mail, setMail] = useState("")
    const [employeeAmount, setEmployeeAmount] = useState(0)
    const [password, setPassword] = useState("")


    const [status, setStatus] = useState(true)

    const nameInputHandler = (event) => {
        setName(event.target.value)
    }

    const imageInputHandler = (event) => {
        setImage(event.target.files[0])
        console.log(image)
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

    // name: name,
    //     image: image,
    //     creationDate: date,
    //     mail: mail,
    //     employeeAmount: employeeAmount,
    //     password: password
    //
    // const formData = new FormData;
    // formData.append('name', name, 'image', image)
    // const addCompanyHandler = async () => {
    //     await axios.post('http://localhost:8080', {
    //         body:
    //     }, {
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     }).then((res) => {
    //         console.log(res)
    //     }).catch((e) => {
    //         console.log(e)
    //     })
    // }

    return <ContentWrapper whiteText="ВІДКРИВАЙ" blackText="МОЖЛИВІСТЬ" color="#ffc42b" height="1000px">
        <FormCard height="65%">
            <p className={styles.text}>ВВЕДІТЬ ДАНІ КОМПАНІЇ НИЖЧЕ</p>
            <div className={styles.container}>
                <RowerWrapper>
                    <Input fontSize="14px" height="60px" status={status} type="text" placeholder="Назва компанії"
                           handler={nameInputHandler}/>
                    <Input height="60px" status={status} type="file" placeholder="Логотип компанії"
                           accept="image/png, image/jpeg"
                           handler={imageInputHandler}/>
                    <Input fontSize="14px" height="60px" status={status} type="date" placeholder="Дата заснування"
                           handler={dateInputHandler}/>
                </RowerWrapper>
                <RowerWrapper>
                    <Input fontSize="14px" height="60px" status={status} type="email" placeholder="Електронна скринька"
                           handler={mailInputHandler}/>
                    <Input fontSize="14px" height="60px" status={status} type="number"
                           placeholder="Кількість працівників" handler={employeeInputHandler}/>
                    <Input fontSize="14px" height="60px" status={status} type="password" placeholder="Пароль"
                           handler={passwordInputHandler}/>
                </RowerWrapper>
            </div>
            <Button text="ВІДПРАВИТИ" height="50px"/>
        </FormCard>
    </ContentWrapper>
}

export default CompanySignUp