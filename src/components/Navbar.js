import NavbarItem from "./NavbarItem";
import styles from "./Navbar.module.css"
import {useContext, useEffect, useState} from "react";
import ReactDOM from "react-dom";
import Modal from "./Modal";
import {AuthContext} from "../storage/AuthContext";
import getToken from "../util/GetToken";
import localStorage from "localStorage";


const Navbar = () => {
    const {role, setRole} = useContext(AuthContext)
    const [loaded, setLoaded] = useState('');


    const [isModal, setIsModal] = useState(false);
    const buttonClickHandler = () => {
        setIsModal(true);
    }

    const onClick = (event) => {
        setIsModal(false);
    }

    const logOutHandler = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('role')
        setRole("none");
    }

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await fetch('http://localhost:8080/logged-user-page-avatar', {
                    headers: {
                        'Authorization': `Bearer ${getToken()}`,
                    },
                });
                if (response.ok) {
                    const blob = await response.blob();
                    const objectURL = URL.createObjectURL(blob);
                    setLoaded(objectURL);
                } else {
                    console.error('Error fetching image:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching image:', error);
            }
        };

        fetchImage();
    });

    console.log(loaded)
    return <div className={styles.navbar}>
        {isModal && ReactDOM.createPortal(<Modal onClose={onClick}/>,
            document.getElementById("modal"))}
        <NavbarItem className={"fa-solid fa-cart-shopping navbar_item_icon"} title="Кошик" link="/cart"/>
        <NavbarItem className={"fa-solid fa-bell navbar_item_icon"} title="Сповіщ."/>
        <NavbarItem className={"fa-solid fa-heart navbar_item_icon"} title="Лайк"/>
        <NavbarItem className={"fa-solid fa-pen navbar_item_icon"} title="Відгуки"/>
        {role === 'none' &&
            <NavbarItem buttonClickHandler={buttonClickHandler} className={"fa-solid fa-user navbar_item_icon"}
                        title="Увійти"/>}
        {role === 'user' && <>
            <img src={loaded} alt="Not Found" className={styles.avatar}/>
            <NavbarItem className={"ffa-sharp fa-solid fa-arrow-right-from-bracket navbar_item_icon"}
                        buttonClickHandler = {logOutHandler}
                        title="Вийти"/> </>}
    </div>
}

export default Navbar