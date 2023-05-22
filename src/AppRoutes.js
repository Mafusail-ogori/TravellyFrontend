import Body from "./Body/Body";
import CartBody from "./Cart/CartBody";
import CompanySignUp from "./Company/CompanySignUp";
import {redirect} from "react-router-dom";
import LogedUser from "./LoggedUser/LogedUser";
import Modal, {loginAction} from "./Header/Modal";

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