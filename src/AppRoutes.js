import Body from "./Body/Body";
import CartBody from "./Cart/CartBody";
import CompanySignUp from "./Company/CompanySignUp";

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
            
        }
    }
]
export default AppRoutes