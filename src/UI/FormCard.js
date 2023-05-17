import styles from './FormCard.module.css'
const FormCard = (props) => {
    return <form className={styles.container} style = {{height: props.height ,backgroundImage: `url("${props.backgroundImg}")`}}>
        {props.children}
    </form>
}

export default FormCard