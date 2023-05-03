import styles from './FormCard.module.css'
const FormCard = (props) => {
    return <div className={styles.container} style = {{backgroundImage: `url("${props.backgroundImg}")`}}>
        {props.children}
    </div>
}

export default FormCard