import styles from './SubmitButton.module.css'
const SubmitButton = (props) =>{
    return<button className={styles.submit_button} onClick={props.onClick}>
        {props.text}
    </button>
}

export default SubmitButton