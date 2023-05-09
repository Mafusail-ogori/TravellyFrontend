import FormCard from "../UI/FormCard";
import Input from "../UI/Input";
import SubmitButton from "../UI/SubmitButton";

const LogInForm = () => {
    return <FormCard height = "55%">
        <Input type = "email" placeholder = "Ім'я користувача чи пароль" height = "65px"/>
        <Input type = "password" placeholder = "Пароль" height = "65px"/>
        <SubmitButton text = "НАДІСЛАТИ"/>
    </FormCard>
}
export default LogInForm