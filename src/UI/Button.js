import styles from './Button.module.css'
const Button = (props) =>{
    return<button className={styles.submit_button} onClick={props.onClick} type = {props.type}>
        {props.text}
    </button>
}

export default Button