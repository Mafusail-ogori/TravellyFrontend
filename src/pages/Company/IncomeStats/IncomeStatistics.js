import ContentCard from "../../../UI/ContentCard";
import ContentWrapper from "../../../UI/ContentWrapper";
import IncomeResources from "../../../components/Analytics/IncomeResources";

const IncomeStatistics = () => {
    return <ContentWrapper  whiteText = "АНАЛІЗУЙ" blackText = "ОБДУМУЙ" color = "#8194FF" height = "1000px">
        <ContentCard>
          <IncomeResources/>
        </ContentCard>
    </ContentWrapper>
}

export default IncomeStatistics