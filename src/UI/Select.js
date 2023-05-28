import styles from './Input.module.css'

const Select = (props) => {
    return <div className={styles.input_container}>
        <label className={styles.label_text}>{props.label}</label>
        <select style={{height: props.height, fontSize: props.fontSize}}
                className={props.status ? styles.inputField : styles.errorInput}
                placeholder={props.placeholder} required onChange={props.handler}>
            {props.options.map((option) => (
                <option className={styles.option} value={option}>{option}</option>
            ))}
        </select>
    </div>
}

export default Select