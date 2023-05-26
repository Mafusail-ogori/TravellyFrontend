import ContentWrapper from "../../../UI/ContentWrapper";
import FormCard from "../../../UI/FormCard";
import Input from "../../../UI/Input";

const CompanyLogIn = () => {
    return <ContentWrapper  whiteText = "ПОПУЛЯРНЕ" blackText = "НЕЙМОВІРНЕ" color = "#8194FF">
        <FormCard>
            <Input type = "text" label = "Електронна пошта або ім'я користувача: "/>
            <Input type = "password" label = "Пароль: "></Input>
        </FormCard>
    </ContentWrapper>
}

export default CompanyLogIn