import styles from './NavbarItem.module.css'
import {Link, NavLink} from "react-router-dom";
import {useState} from "react";
import {Modal} from "reactstrap";
import ReactDOM from "react-dom";

const NavbarItem = (props) => {
    const [isModal, setIsModal] = useState(false);
    const buttonClickHandler = () => {
        setIsModal(true);
    }

    return <NavLink tag={Link} to={props.link} className={styles.navbar_item_link}>
        {isModal && ReactDOM.createPortal(<Modal onClose={() => {setIsModal(false)}}/>,
            document.getElementById("modal"))}
        <button className={styles.navbar_item_wrapper} onClick={buttonClickHandler}>
            <i className={props.className}/>
            <p>{props.title}</p>
        </button>
    </NavLink>
}

export default NavbarItem;