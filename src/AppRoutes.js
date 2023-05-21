import Body from "./Body/Body";
import CartBody from "./Cart/CartBody";
import CompanySignUp from "./Company/CompanySignUp";
import getToken from "./util/GetToken";
import {redirect} from "react-router-dom";
import LogedUser from "./LoggedUser/LogedUser";

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
        loader: () => {
            const token = getToken()
            if(!token){
                return redirect('/')
            }
            return null
        },
        element: <LogedUser/>
    }
]
export default AppRoutes