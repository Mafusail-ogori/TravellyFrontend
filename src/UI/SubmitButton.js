import styles from './SubmitButton.module.css'
const SubmitButton = (props) =>{
    return<button className={styles.submit_button}>
        {props.text}
    </button>
}

export default SubmitButton