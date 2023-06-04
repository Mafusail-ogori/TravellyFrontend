import {useEffect, useState} from "react";
import axios from "axios";
import getToken from "../../util/GetToken";
import IncomeChart from "./IncomeChart";
import logo from "../../assets/icons/logo.png";
import classes from "../../pages/Home/Header.module.css";
import styles from "../../pages/Company/SignUp/CompanySignUp.module.css";

const IncomeResources = () => {
    const [data, setData] = useState([])
    const dataGettingHandler = async () => {
        await axios.get('http://localhost:8080/company/get-profit', ({
            headers: {
                'Authorization': `Bearer ${getToken()}`
            }
        }))
            .then((res) => {
            setData(res.data)
        })
            .catch((e) => {
            console.log(e)
        })
    }

    useEffect(() => {
        dataGettingHandler()
    }, [])
    let totalIncome = 0;
    data.map((operation) => {
        totalIncome += operation.amount
    })
    return <>
        <img src={logo} className={classes.header_logo} alt="Not found"/>
        <p className={styles.text}>АНАЛІТИКА ПРИБУТКУ</p>
        <p>ЗАГАЛЬНИЙ ПРИБУТОК КОМПАНІЇ : <span style = {{color: "#FFCA42"}}>{totalIncome}₴ </span></p>
        <IncomeChart data = {data} color = "#FFCA42" strokeColor = '#a6832b'></IncomeChart>
    </>
}

export default IncomeResources