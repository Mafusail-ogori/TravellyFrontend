import styles from "./Input.module.css";
import {useState} from "react";

const Input = (props) => {
    return <input style={{height: props.height, fontSize: props.fontSize}} className={styles.inputField}
                  type={props.type}
                  placeholder={props.placeholder} required onChange={props.handler} value = {props.value}/>
}
export default Input