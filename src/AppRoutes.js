import Body from "./Body/Body";
import Header from "./Header/Header";
import CartBody from "./Cart/CartBody";

const AppRoutes = [
    {
        index: true,
        element: <Body/>
    },
    {
        path: '/cart',
        element: <CartBody/>
    }
]
export default AppRoutes