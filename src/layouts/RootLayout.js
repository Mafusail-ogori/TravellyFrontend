import Footer from "../pages/Home/Footer";
import {Outlet} from "react-router-dom";
import Header from "../pages/Home/Header";

const RootLayout = () => {
    return <>
        <Header/>
        <div id = "modal"></div>
        <main>
            <Outlet/>
        </main>
        <Footer/>
    </>
}

export default RootLayout