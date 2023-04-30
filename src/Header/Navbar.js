import NavbarItem from "./NavbarItem";
import cart from "../assets/icons/cart.svg";
import bell from "../assets/icons/bell.svg";
import like from "../assets/icons/like.svg";
import review from "../assets/icons/review.svg";
import styles from "./Navbar.module.css"

const Navbar = () => {
    return <div className={styles.navbar}>
        <NavbarItem className={"fa-solid fa-cart-shopping header_item_icon"}
                    title="Кошик"/>
        <NavbarItem className={"fa-solid fa-bell header_item_icon"} title="Сповіщ."/>
        <NavbarItem className={"fa-solid fa-heart header_item_icon"} title="Лайк"/>
        <NavbarItem className={"fa-solid fa-pen header_item_icon"} title="Відгуки"/>
    </div>
}

export default Navbar