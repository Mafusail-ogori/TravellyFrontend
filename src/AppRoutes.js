import Body from "./pages/Home/Body";
import CartBody from "./pages/Cart/CartBody";
import CompanySignUp from "./pages/Company/SignUp/CompanySignUp";
import {redirect} from "react-router-dom";
import LogedUser from "./pages/LoggedUser/LogedUser";
import Modal, {loginAction} from "./components/Modal";

const AppRoutes = [
    {
        index: true,
        element: <Body/>
    },
    {
        path: '/cart',
        element: <CartBody/>
    },
    {
        path: '/create-company',
        element: <CompanySignUp/>
    },
    {
        path: '/logged-user-page',
        action: loginAction,
        element: <LogedUser/>
    }
]
export default AppRoutes