import FormCard from "./FormCard";
import Input from "./Input";
import Nature from '../assets/photos/Nature.jpg'
const SearchBar = () => {

    return <FormCard backgroundImg = {Nature}>
        <Input type =  "text" placeholder="Куди?"/>
    </FormCard>
}
export default SearchBar;