import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import RootLayout from "./layouts/RootLayout";
import Body from "./pages/Home/Body";
import CartBody from "./pages/Cart/CartBody";
import CompanySignUp from "./pages/Company/SignUp/CompanySignUp";
import LoggedUserBody from "./pages/LoggedUser/LoggedUserBody";
import CompanyLogIn from "./pages/Company/LogIn/CompanyLogIn";
import UserLayout from "./layouts/UserLayout";
import AuthContextProvider from "./storage/AuthContext";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        children: [
            {path: '', element: <Body/>},
            {path: 'cart', element: <CartBody/>},
            {path: 'create-company', element: <CompanySignUp/>},
            {path: 'company/log-in', element: <CompanyLogIn/>}
        ]
    }
    // {
    //     path: '/user',
    //     element: <UserLayout/>,
    //     children: [
    //         {path: '', element: <LoggedUserBody/>}
    //     ]
    // }
])
const App = () => {
    return <AuthContextProvider>
        <RouterProvider router={router}/>
    </AuthContextProvider>
}
export default App;