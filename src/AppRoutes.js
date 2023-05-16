import Body from "./Body/Body";
import CartBody from "./Cart/CartBody";

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
        path: '/create_company',
        element: <CompanyLogin/>
    }
]
export default AppRoutes