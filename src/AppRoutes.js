import Body from "./Body/Body";
import Header from "./Header/Header";
import LogInBody from "./LogInBody/LogInBody";

const AppRoutes = [
    {
        index: true,
        element: <Body/>
    },
    {
        path: '/login',
        element: <LogInBody/>
    }
]
export default AppRoutes