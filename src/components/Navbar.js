import NavbarItem from "./NavbarItem";
import styles from "./Navbar.module.css"
import {useContext, useEffect, useState} from "react";
import ReactDOM from "react-dom";
import Modal from "./Modal";
import {AuthContext} from "../storage/AuthContext";
import getToken from "../util/GetToken";
import localStorage from "localStorage";
import getRole from "../util/GetRole";


const Navbar = () => {
    const {role, setRole} = useContext(AuthContext)
    const [userLoaded, setUserLoaded] = useState('');
    const [companyLoaded, setCompanyLoaded] = useState('')


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
        if(getRole() === 'user'){
            const fetchUserImage = async () => {
                try {
                    const response = await fetch('http://localhost:8080/user/logged-user-page-avatar', {
                        headers: {
                            'Authorization': `Bearer ${getToken()}`,
                        },
                    });
                    if (response.ok) {
                        const blob = await response.blob();
                        const objectURL = URL.createObjectURL(blob);
                        setUserLoaded(objectURL);
                    } else {
                        console.error('Error fetching image:', response.statusText);
                    }
                } catch (error) {
                    console.error('Error fetching image:', error);
                }
            };
            fetchUserImage();
        }
    }, [role]);

    useEffect(() => {
        if (getRole() === 'company'){
            const fetchCompanyImage = async () => {
                try {
                    const response = await fetch('http://localhost:8080/company/logged-company-page-avatar', {
                        headers: {
                            'Authorization': `Bearer ${getToken()}`,
                        },
                    });
                    if (response.ok) {
                        const blob = await response.blob();
                        const objectURL = URL.createObjectURL(blob);
                        setCompanyLoaded(objectURL)
                    } else {
                        console.error('Error fetching image:', response.statusText);
                    }
                } catch (error) {
                    console.error('Error fetching image:', error);
                }
            };
            fetchCompanyImage();
        }
    }, [role])

    return <div className={styles.navbar}>
        {isModal && ReactDOM.createPortal(<Modal onClose={onClick}/>,
            document.getElementById("modal"))}

        {role === 'none' &&
            <>
                <NavbarItem className={"fa-solid fa-cart-shopping navbar_item_icon"} title="Кошик" link="/cart"/>
                <NavbarItem className={"fa-solid fa-bell navbar_item_icon"} title="Сповіщ."/>
                <NavbarItem className={"fa-solid fa-heart navbar_item_icon"} title="Лайк"/>
                <NavbarItem className={"fa-solid fa-pen navbar_item_icon"} title="Відгуки"/>
                <NavbarItem buttonClickHandler={buttonClickHandler} className={"fa-solid fa-user navbar_item_icon"}
                            title="Увійти"/>
            </>
        }
        {role === 'user' &&
            <>
                <NavbarItem className={"fa-solid fa-cart-shopping navbar_item_icon"} title="Кошик" link="/cart"/>
                <NavbarItem className={"fa-solid fa-bell navbar_item_icon"} title="Сповіщ."/>
                <NavbarItem className={"fa-solid fa-heart navbar_item_icon"} title="Лайк"/>
                <NavbarItem className={"fa-solid fa-pen navbar_item_icon"} title="Відгуки"/>
                <img src={userLoaded} alt="Not Found" className={styles.avatar}/>
                <NavbarItem className={"ffa-sharp fa-solid fa-arrow-right-from-bracket navbar_item_icon"}
                            buttonClickHandler={logOutHandler}
                            title="Вийти"/>
            </>}
        {role === 'company' &&
            <>
                <NavbarItem className={"fa-solid fa-plus navbar_item_icon"} title="Додати" link = "/company/add"/>
                <NavbarItem className={"fa-solid fa-eye navbar_item_icon"} title="Переглянути"/>
                <NavbarItem className={"fa-solid fa-money-bill navbar_item_icon"} title="Прибуток"/>
                <img src={companyLoaded} alt="Not Found" className={styles.avatar}/>
                <NavbarItem className={"ffa-sharp fa-solid fa-arrow-right-from-bracket navbar_item_icon"}
                            buttonClickHandler={logOutHandler}
                            title="Вийти"/>
            </>}
    </div>
}

export default Navbar