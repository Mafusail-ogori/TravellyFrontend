import styles from "./Input.module.css";

const TextArea = (props) => {
    return <div className={styles.input_container}>
        <label className={styles.label_text}>{props.label}</label>
        <textarea style={{height: props.height, fontSize: props.fontSize}} className={props.status ? styles.inputField : styles.errorInput}
                  placeholder={props.placeholder} required onChange={props.handler}/>
    </div>
}

export default TextArea