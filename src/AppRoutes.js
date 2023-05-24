import Body from "./pages/Home/Body";
import CartBody from "./pages/Cart/CartBody";
import CompanySignUp from "./pages/Company/SignUp/CompanySignUp";
import LogedUser from "./pages/LoggedUser/LogedUser";

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
        element: <LogedUser/>
    }
]
export default AppRoutes