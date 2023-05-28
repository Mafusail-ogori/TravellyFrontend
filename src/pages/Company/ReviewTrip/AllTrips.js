import ContentWrapper from "../../../UI/ContentWrapper";
import FormCard from "../../../UI/FormCard";
import getToken from "../../../util/GetToken";

const AllTrips = () => {
    const getAllTrips =  async () => {
        await axios.get('', {
            headers: {
                Authorization : `Bearer ${getToken()}`
            }
        })
    }
    return <ContentWrapper whiteText = "ПЕРЕГЛЯДАЙ" blackText = "ВДОСКОНАЛЮЙ" color = "#8194FF" height = "1000px">
        <FormCard>
            {}
        </FormCard>
    </ContentWrapper>
}

export default AllTrips