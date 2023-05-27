import ContentWrapper from "../../../UI/ContentWrapper";
import FormCard from "../../../UI/FormCard";
import Input from "../../../UI/Input";
import Button from "../../../UI/Button";

const CompanyLogIn = () => {
    return <ContentWrapper  whiteText = "ПОПУЛЯРНЕ" blackText = "НЕЙМОВІРНЕ" color = "#8194FF">
        <FormCard>
            <Input type = "text" label = "Електронна пошта або ім'я користувача: " height = "50px"/>
            <Input type = "password" label = "Пароль: " height = "50px"/>
            <Button>ПІДТВЕРДИТИ</Button>
        </FormCard>
    </ContentWrapper>
}

export default CompanyLogIn