import FormCard from "../UI/FormCard";
import Trip from "./Trip";
import Maldives from '../../src/assets/photos/Maldives.jpg'
import Switzerland from '../../src/assets/photos/Switzerland.jpg'

const Cart = () => {
    return <FormCard height = "60%">
        <Trip image = {Maldives} title = "Maldives"/>
        <Trip image = {Switzerland} title = "Switzerland"/>
    </FormCard>
}
export default Cart