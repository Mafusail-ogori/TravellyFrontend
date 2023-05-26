import styles from './FormCard.module.css'
const FormCard = (props) => {
    return <form className={styles.container} style = {{backgroundImage: `url("${props.backgroundImg}")`}} onSubmit={props.onSubmit}>
        {props.children}
    </form>
}

export default FormCard