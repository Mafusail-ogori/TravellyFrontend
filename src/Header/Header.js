import styles from './Header.module.css'
import Navbar from "./Navbar";
import {NavLink} from "react-router-dom";
import LoggedUserNavbar from "../LoggedUser/LoggedUserNavbar";

const Header = () => {

    return <div className={styles.header}>
        <div className={styles.logo_full}>
            <img className={styles.header_logo} src = {require("../assets/icons/logo.png") } alt="Image Not Found"></img>
            <NavLink to = '/' className={styles.header_logo_text}>Travelly!</NavLink>
        </div>
        {/*<Navbar/>*/}
        <LoggedUserNavbar/>
    </div>
}

export default Header