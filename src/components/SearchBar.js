import FormCard from "../UI/FormCard";
import Input from "../UI/Input";
import Maldives from '../assets/photos/Maldives.jpg'
import { useState} from "react";
import {useNavigate} from "react-router-dom";
const SearchBar = () => {
    const[choice, setChoice] = useState("")
    const countryInputHandler = (event) => {
        setChoice(event.target.value)
    }
    const navigation = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault()
        localStorage.setItem('country', choice)
        navigation('user/search-trip')
    }

    return <FormCard height = "50%" backgroundImg = {Maldives} onSubmit = {handleSubmit}>
        <Input type =  "text" placeholder="Куди?" fontSize = "16px" status = "true" height = "75px" handler = {countryInputHandler}/>
    </FormCard>
}
export default SearchBar;