import NavbarItem from "./NavbarItem";
import styles from "./Navbar.module.css"
import {useState} from "react";
import ReactDOM from "react-dom";
import Modal from "./Modal";
import styleBackDrop from '../UI/Backdrop.module.css'


const Navbar = () => {
    const [isModal, setIsModal] = useState(false);
    const buttonClickHandler = () => {
        setIsModal(true);
    }

    const onClick = (event) => {
        if(!event.target.classList.contains(styleBackDrop.backdrop)){
            return;
        }
        setIsModal(false);
    }

    return <div className={styles.navbar}>
        {isModal && ReactDOM.createPortal(<Modal onClose={onClick}/>,
            document.getElementById("modal"))}
        <NavbarItem className={"fa-solid fa-cart-shopping navbar_item_icon"} title="Кошик" link = "/cart"/>
        <NavbarItem className={"fa-solid fa-bell navbar_item_icon"} title="Сповіщ."/>
        <NavbarItem className={"fa-solid fa-heart navbar_item_icon"} title="Лайк"/>
        <NavbarItem className={"fa-solid fa-pen navbar_item_icon"} title="Відгуки"/>
        <NavbarItem buttonClickHandler = {buttonClickHandler} className={"fa-solid fa-user navbar_item_icon"} title = "Увійти"/>
    </div>
}

export default Navbar