import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import RootLayout from "./layouts/RootLayout";
import Body from "./pages/Home/Body";
import CartBody from "./pages/Cart/CartBody";
import CompanySignUp from "./pages/Company/SignUp/CompanySignUp";
import LoggedUserBody from "./pages/LoggedUser/LoggedUserBody";
import CompanyLogIn from "./pages/Company/LogIn/CompanyLogIn";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        children: [
            {path: '', element: <Body/>},
            {path: 'cart', element: <CartBody/>},
            {path: 'create-company', element: <CompanySignUp/>},
            {path: 'logged-user-page', element: <LoggedUserBody/>},
            {path: 'company/log-in' , element: <CompanyLogIn/>}
        ]
    }
])
const App = () => {
    return <RouterProvider router = {router}/>
}
export default App;