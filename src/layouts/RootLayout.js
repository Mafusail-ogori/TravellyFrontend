import Footer from "../pages/Home/Footer";
import {Outlet} from "react-router-dom";
import Header from "../pages/Home/Header";

const RootLayout = () => {
    return <>
        <Header isLogged={false}/>
        <div id = "modal"></div>
        <main>
            <Outlet/>
        </main>
        <Footer/>
    </>
}

export default RootLayout