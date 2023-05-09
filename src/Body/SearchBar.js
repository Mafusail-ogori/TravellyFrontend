import FormCard from "../UI/FormCard";
import Input from "../UI/Input";
import Nature from '../assets/photos/Nature.jpg'
const SearchBar = () => {

    return <FormCard backgroundImg = {Nature}>
        <Input type =  "text" placeholder="Куди?"/>
    </FormCard>
}
export default SearchBar;