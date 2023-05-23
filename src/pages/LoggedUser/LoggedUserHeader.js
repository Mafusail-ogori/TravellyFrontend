import styles from "../Home/Header.module.css";
import {NavLink} from "react-router-dom";
import LoggedUserNavbar from "../../components/LoggedUserNavbar";

const LoggedUserHeader = () => {
    return <div className={styles.header}>
        <div className={styles.logo_full}>
            <img className={styles.header_logo} src={require("../../assets/icons/logo.png")} alt="Image Not Found"></img>
            <NavLink to='/' className={styles.header_logo_text}>Travelly!</NavLink>
        </div>
        <LoggedUserNavbar/>
    </div>
}

