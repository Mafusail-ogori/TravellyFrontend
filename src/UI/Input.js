import styles from "./Input.module.css";

const Input = (props) => {
    return <div className={styles.input_container}>
        <label className={styles.label_text}>{props.label}</label>
        <input style={{height: props.height, fontSize: props.fontSize}} className={props.status ? styles.inputField : styles.errorInput}
               type={props.type}
               placeholder={props.placeholder} onChange={props.handler} defaultValue={props.value} accept={props.accept}
               pattern = {props.pattern} name={props.name}/>
    </div>

}
export default Input