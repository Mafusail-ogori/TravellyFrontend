import styles from "./Input.module.css";
import {useState} from "react";

const Input = (props) =>{
    const[input, setInput] = useState("");
    const inputHandler = (event) => {
        setInput(event.target.value)
    }
    return  <input style = {{height : props.height, fontSize: props.fontSize}} className={styles.inputField} type = {props.type} placeholder={props.placeholder} required onChange={inputHandler}/>
}
export default Input