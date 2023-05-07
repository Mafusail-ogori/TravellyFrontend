import NavbarItem from "./NavbarItem";
import styles from "./Navbar.module.css"

const Navbar = () => {
    return <div className={styles.navbar}>
        <NavbarItem className={"fa-solid fa-cart-shopping navbar_item_icon"}
                    title="Кошик" link = ""/>
        <NavbarItem className={"fa-solid fa-bell navbar_item_icon"} title="Сповіщ."/>
        <NavbarItem className={"fa-solid fa-heart navbar_item_icon"} title="Лайк"/>
        <NavbarItem className={"fa-solid fa-pen navbar_item_icon"} title="Відгуки"/>
    </div>
}

export default Navbar