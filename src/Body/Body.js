import ContentWrapper from "./ContentWrapper";
import PictureSwiper from "./PictureSwiper";

const Body = () => {
    return <div>
        <ContentWrapper whiteText = "ПОПУЛЯРНЕ" blackText = "НЕЙМОВІРНЕ">
            <PictureSwiper/>
        </ContentWrapper>
        <ContentWrapper whiteText = "ПОПУЛЯРНЕ" blackText = "НЕЙМОВІРНЕ"/>
    </div>
}

export default Body