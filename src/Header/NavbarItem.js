import styles from './HeaderItem.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NavbarItem = (props) => {
    return <a href = {props.link}>
    <button className={styles.header_item_wrapper}>
        <i className={props.className}></i>
        <p>{props.title}</p>
    </button>
    </a>
}

export default NavbarItem;