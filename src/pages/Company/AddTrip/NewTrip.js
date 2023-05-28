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

const NewTrip = () => {



    return <ContentWrapper color="#FFCA42" whiteText="ДОДАВАЙ" blackText="СТВОРЮЙ" height="1200px">
        <FormCard>
            <img src={logo} className={classes.header_logo} alt="Not found"/>
            <p className={styles.text}>БУДЬ ЛАСКА ЗАПОВНІТЬ ВСІ ПОЛЯ</p>
            <div className={styles.container}>
                <RowerWrapper>
                    <Input placeholder="Назва путівки " type="text" label="Назва путівки " height="50px" status={true}/>
                    <Input placeholder="Максимальна кількість людей " type="number" label="Максимальна кількість людей "
                           height="50px" status={true}/>
                    <Select label="Навність тварин " height="50px" status={true} options={boolean}/>
                    <Select label="Трансфер " height="50px" status={true} options={transfer}/>
                    <Select label="Харчування " height="50px" status={true} options={food}/>
                    <Input placeholder="Назва готелю " type="text" label="Назва готелю " height="50px" status={true}/>
                </RowerWrapper>
                <RowerWrapper>
                    <Select label="Країна відправки " height="50px" status={true} options={countryList}/>
                    <Select label="Країна прибуття " height="50px" status={true} options={countryList}/>
                    <Input type='date' label="Початок подорожі " height="50px"
                           status={true}/>
                    <Input type='date' label="Кінець подорожі " height="50px"
                           status={true}/>
                    <Input type='file' label="Фото путівки " height="50px" status={true}/>
                    <Input placeholder='Ціна за людину' type='number' label="Ціна за людину " height="50px"
                           status={true}/>
                </RowerWrapper>
            </div>
            <Button type="submit" text="ВІДПРАВИТИ"/>
        </FormCard>
    </ContentWrapper>
}

export default NewTrip