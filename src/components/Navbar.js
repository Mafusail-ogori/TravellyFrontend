import NavbarItem from "./NavbarItem";
import styles from "./Navbar.module.css"
import {useContext, useState} from "react";
import ReactDOM from "react-dom";
import Modal from "./Modal";
import avatar from "../assets/photos/Switzerland.jpg";
import classes from "./LoggedUserNavbar.module.css";
import {AuthContext} from "../storage/AuthContext";


const Navbar = () => {
    const {isLogged} = useContext(AuthContext)

    const [isModal, setIsModal] = useState(false);
    const buttonClickHandler = () => {
        setIsModal(true);
    }

    const onClick = (event) => {
        setIsModal(false);
    }

    return <div className={styles.navbar}>
        {isModal && ReactDOM.createPortal(<Modal onClose={onClick}/>,
            document.getElementById("modal"))}
        <NavbarItem className={"fa-solid fa-cart-shopping navbar_item_icon"} title="Кошик" link="/cart"/>
        <NavbarItem className={"fa-solid fa-bell navbar_item_icon"} title="Сповіщ."/>
        <NavbarItem className={"fa-solid fa-heart navbar_item_icon"} title="Лайк"/>
        <NavbarItem className={"fa-solid fa-pen navbar_item_icon"} title="Відгуки"/>
        {!isLogged &&
            <NavbarItem buttonClickHandler={buttonClickHandler} className={"fa-solid fa-user navbar_item_icon"}
                        title="Увійти"/>}
        {isLogged && <> <img src={avatar} alt="Not found" className={classes.user_avatar}/>
            <NavbarItem className={"ffa-sharp fa-solid fa-arrow-right-from-bracket navbar_item_icon"}
                        title="Вийти"/> </>}
    </div>
}

export default Navbar