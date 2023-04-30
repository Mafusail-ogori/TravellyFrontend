import styles from './Header.module.css'
import Navbar from "./Navbar";

const Header = () => {

    return <div className={styles.header}>
        <div className={styles.logo_full}>
            <img className={styles.header_logo} src = {require("../assets/icons/logo.png") } alt="Image Not Found"></img>
            <p className={styles.header_logo_text}>Travelly!</p>
        </div>
        <Navbar/>
    </div>
}

export default Header