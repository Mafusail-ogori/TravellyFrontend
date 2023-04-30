import styles from './ContentWrapper.module.css'

const ContentWrapper = (props) => {
    return <div className={styles.wrapper}>
        <p className={styles.white_text}>{props.whiteText}</p>
        {props.children}
        <p className={styles.black_text}>{props.blackText}</p>
    </div>
}

export default ContentWrapper