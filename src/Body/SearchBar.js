import FormCard from "../UI/FormCard";
import Input from "../UI/Input";
import Maldives from '../assets/photos/Maldives.jpg'
const SearchBar = () => {

    return <FormCard height = "50%" backgroundImg = {Maldives}>
        <Input type =  "text" placeholder="Куди?" fontSize = "20px" status = "true" height = "75px"/>
    </FormCard>
}
export default SearchBar;