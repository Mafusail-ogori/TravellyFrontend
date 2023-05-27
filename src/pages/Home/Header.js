import styles from './Header.module.css'
import Navbar from "../../components/Navbar";
import {NavLink} from "react-router-dom";
import classes from '../../components/Navbar.module.css'

const Header = ({isLogged}) => {

    return <div className={styles.header}>
        <div className={styles.logo_full}>
            <img className={styles.header_logo} src={require("../../assets/icons/logo.png")}
                 alt="Image Not Found"></img>
            <NavLink to='/' className={styles.header_logo_text}>Travelly!</NavLink>
        </div>
        <Navbar isLogged={isLogged}/>
    </div>
}

export default Header