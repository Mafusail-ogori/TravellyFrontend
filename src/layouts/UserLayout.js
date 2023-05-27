import Footer from "../pages/Home/Footer";
import {Outlet} from "react-router-dom";
import Header from "../pages/Home/Header";

const UserLayout = () => {
    return <>
       <Header isLogged = {true}/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
    </>
}

export default UserLayout