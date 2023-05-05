import ContentWrapper from "./ContentWrapper";
import SearchBar from "./SearchBar";
import Carousel from "./Slider/Carousel";

const Body = () => {
    return <div>
        <ContentWrapper whiteText = "ПОПУЛЯРНЕ" blackText = "НЕЙМОВІРНЕ" color = "#8194FF">
            <Carousel/>
        </ContentWrapper>
        <ContentWrapper whiteText = "ШУКАЙ" blackText = "ЗНАХОДЬ" color = "#FFCA42">
            <SearchBar/>
        </ContentWrapper>
        <ContentWrapper whiteText = "ЧИТАЙ" blackText = "ВІДКРИВАЙ" color = "#8194FF"/>
    </div>
}

export default Body