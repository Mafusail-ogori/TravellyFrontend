import styles from './RowerWrapper.module.css'

const RowerWrapper = (props) => {
    return <div className={styles.rower}>
        {props.children}
    </div>
}

export default RowerWrapper