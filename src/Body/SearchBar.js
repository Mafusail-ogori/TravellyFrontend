import styles from './Search.module.css'

const SearchBar = (props) => {
    return <div className={styles.searchBar_container}>
        <input className={styles.searchBar_inputField} type= {props.type} placeholder={props.placeholder}/>
    </div>
}
export default SearchBar;