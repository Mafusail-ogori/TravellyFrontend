import styles from './Header.module.css'
import Navbar from "../../components/Navbar";
import {NavLink} from "react-router-dom";

const Header = ({isLogged}) => {

    return <div className={styles.header}>
        <NavLink to = '/' className={styles.logo_full}>
            <img className={styles.header_logo} src={require("../../assets/icons/logo.png")}
                 alt="Image Not Found"/>
            <p className={styles.header_logo_text}>Travelly!</p>
        </NavLink>
        <Navbar isLogged={isLogged}/>
    </div>
}

export default Header