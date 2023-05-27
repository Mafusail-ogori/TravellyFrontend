import ContentWrapper from "../../../UI/ContentWrapper";
import FormCard from "../../../UI/FormCard";
import Input from "../../../UI/Input";
import Button from "../../../UI/Button";
import {useContext, useState} from "react";
import logo from "../../../assets/icons/logo.png";
import classes from "../../Home/Header.module.css";
import styling from "../../../components/Modal.module.css";
import styles from "../SignUp/CompanySignUp.module.css";
import axios from "axios";
import localStorage from "localStorage";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../../../storage/AuthContext";

const CompanyLogIn = () => {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [status, setStatus] = useState(true)

    const loginInputHandler = (event) => {
        setLogin(event.target.value)
    }

    const passwordInputHandler = (event) => {
        setPassword(event.target.value)
    }

    const {setRole} = useContext(AuthContext)

    const navigation = useNavigate()
    const validateCompany = async (event) => {
        event.preventDefault()
        await axios.post('http://localhost:8080/company/log-in', {
            login: login,
            password: password
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            if (res.data.message) {
                localStorage.setItem('token' ,res.data.message)
                localStorage.setItem('role', 'company')
                setRole('company')
                navigation('/')
                setStatus(true)
            }
        }).catch((e) => {
            console.log(e)
            setStatus(false)
        })
    }

    return <ContentWrapper whiteText="ВІДКРИВАЙ" blackText="МОЖЛИВІСТЬ" color="#8194FF" height="900px">
        <FormCard onSubmit={validateCompany}>
            <img src={logo} className={classes.header_logo} alt="Not found"/>
            <p className={status ? styling.hidden : styling.failure}>Неправильно введені дані, або ж така компанія вже
                існує</p>
            {/*<p className={success ? styling.success : styling.hidden}>Реєстрація пройшла успішно, тепер перейдіть на*/}
            {/*    сторінку входження у акаунт</p>*/}
            <p className={styles.text}>ВВЕДІТЬ ДАНІ КОМПАНІЇ НИЖЧЕ</p>
            <Input status={status} fontSize="14px" placeholder="Електронна пошті або логін" type="text"
                   label="Електронна пошта або ім'я компанії: " height="50px" handler={loginInputHandler}/>
            <Input status={status} fontSize="14px" placeholder="Пароль" type="password" label="Пароль: " height="50px"
                   handler={passwordInputHandler}/>
            <Button type="submit" text="ПІДТВЕРДИТИ"/>
        </FormCard>
    </ContentWrapper>
}

export default CompanyLogIn