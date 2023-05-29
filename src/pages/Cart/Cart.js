
import ContentWrapper from "../../UI/ContentWrapper";
import ContentCard from "../../UI/ContentCard";
import TripCard from "../../UI/TripCard";
import {useContext} from "react";
import {AuthContext} from "../../storage/AuthContext";
import logo from "../../assets/icons/logo.png";
import classes from "../Home/Header.module.css";
import styles from "../Company/SignUp/CompanySignUp.module.css";

const Cart = () => {
    const {role} = useContext(AuthContext)
    return <ContentWrapper  whiteText = "ПОПУЛЯРНЕ" blackText = "НЕЙМОВІРНЕ" color = "#8194FF" height = "900px">
        <ContentCard height = "700px">
            {role === 'user' ? <TripCard/> : <>
                <img src = {logo} className={classes.header_logo} alt="Not found"/>
                <p className={styles.text}>ДЛЯ ПЕРЕГЛЯДУ КОРЗИНИ НЕОБХІДНО ЗАРЕЄСТРУВАТИСЬ</p>
            </>}
        </ContentCard>
    </ContentWrapper>
}
export default Cart