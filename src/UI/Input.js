import styles from "./Input.module.css";
import {useState} from "react";

const Input = (props) => {
    return <input style={{height: props.height, fontSize: props.fontSize}} className={props.status ? styles.inputField : styles.errorInput}
                  type={props.type}
                  placeholder={props.placeholder} name={props.name} required onChange={props.handler} value = {props.value} accept={props.accept}/>
}
export default Input