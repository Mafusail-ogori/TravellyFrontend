import NavbarItem from "../Header/NavbarItem";
import styles from "../Header/Navbar.module.css";
import avatar from '../assets/photos/Switzerland.jpg'
import classes from './LoggedUserNavbar.module.css'

const LoggedUserNavbar = () => {
    return <div className={styles.navbar}>
        <NavbarItem className={"fa-solid fa-cart-shopping navbar_item_icon"} title="Кошик" link="/cart"/>
        <NavbarItem className={"fa-solid fa-bell navbar_item_icon"} title="Сповіщ."/>
        <NavbarItem className={"fa-solid fa-heart navbar_item_icon"} title="Лайк"/>
        <NavbarItem className={"fa-solid fa-pen navbar_item_icon"} title="Відгуки"/>
        <img src={avatar} alt="Not found" className={classes.user_avatar}/>
    </div>
}

export default LoggedUserNavbar