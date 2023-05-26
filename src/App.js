import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import RootLayout from "./layouts/RootLayout";
import Body from "./pages/Home/Body";
import CartBody from "./pages/Cart/CartBody";
import CompanySignUp from "./pages/Company/SignUp/CompanySignUp";
import LoggedUserBody from "./pages/LoggedUser/LoggedUserBody";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        children: [
            {path: '', element: <Body/>},
            {path: 'cart', element: <CartBody/>},
            {path: 'create-company', element: <CompanySignUp/>},
            {path: 'logged-user-page', element: <LoggedUserBody/>}
        ]
    }
])
const App = () => {
    return <RouterProvider router = {router}/>
}
export default App;