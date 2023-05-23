import ContentWrapper from "../../UI/ContentWrapper";
import SearchBar from "../../components/SearchBar";
import Carousel from "../../components/Slider/Carousel";
import Reviews from "../../components/Slider/Reviews";

const Body = () => {
    return <div>
        <ContentWrapper whiteText = "ПОПУЛЯРНЕ" blackText = "НЕЙМОВІРНЕ" color = "#8194FF">
            <Carousel/>
        </ContentWrapper>
        <ContentWrapper whiteText = "ШУКАЙ" blackText = "ЗНАХОДЬ" color = "#FFCA42">
            <SearchBar/>
        </ContentWrapper>
        <ContentWrapper whiteText = "ЧИТАЙ" blackText = "ВІДКРИВАЙ" color = "#8194FF">
            <Reviews/>
        </ContentWrapper>
    </div>
}

export default Body