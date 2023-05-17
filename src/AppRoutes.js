import Body from "./Body/Body";
import CartBody from "./Cart/CartBody";
import CompanyLogin from "./CompanyLogin/CompanyLogin";

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
        element: <CompanyLogin/>
    }
]
export default AppRoutes