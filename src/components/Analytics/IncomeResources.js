import {useEffect, useState} from "react";
import axios from "axios";
import getToken from "../../util/GetToken";

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
    return <>
        <p>Hi</p>
    </>
}

export default IncomeResources