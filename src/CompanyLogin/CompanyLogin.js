import ContentWrapper from "../UI/ContentWrapper";
import FormCard from "../UI/FormCard";
import Input from "../UI/Input";
import {useState} from "react";
import RowerWrapper from "../UI/RowerWrapper";
import styles from './CompanyLogin.module.css'
import SubmitButton from "../UI/SubmitButton";


const CompanyLogin = () => {

    const [status, setStatus] = useState(true)

    return <ContentWrapper whiteText="ВІДКРИВАЙ" blackText="МОЖЛИВІСТЬ" color="#FFCA42" height="800px">
        <FormCard height="500px">
            <p className={styles.text}>ВВЕДІТЬ ДАНІ КОМПАНІЇ НИЖЧЕ</p>
            <div className={styles.container}>
                <RowerWrapper>
                    <Input height="60px" status = {status} type = "text" placeholder = "Назва компанії"/>
                    <Input height="60px" status = {status} type = "text" placeholder = "Ліцензія компанії"/>
                    <Input height="60px" status = {status} type = "date" placeholder = "Дата заснування"/>
                </RowerWrapper>
                <RowerWrapper>
                    <Input height="60px" status = {status} type = "email" placeholder = "Електронна скринька"/>
                    <Input height="60px" status = {status} type = "number" placeholder = "Кількість працівників"/>
                    <Input height="60px" status = {status} type = "password" placeholder = "Пароль"/>
                </RowerWrapper>
            </div>
            <SubmitButton text = "ВІДПРАВИТИ" height = "50px"/>
        </FormCard>
    </ContentWrapper>
}

export default CompanyLogin