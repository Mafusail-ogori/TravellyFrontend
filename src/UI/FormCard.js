import styles from './FormCard.module.css'
const FormCard = (props) => {
    return <div className={styles.container} style = {{height: props.height ,backgroundImage: `url("${props.backgroundImg}")`}}>
        {props.children}
    </div>
}

export default FormCard