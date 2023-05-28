import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import RootLayout from "./layouts/RootLayout";
import Body from "./pages/Home/Body";
import CartBody from "./pages/Cart/CartBody";
import CompanySignUp from "./pages/Company/SignUp/CompanySignUp";
import CompanyLogIn from "./pages/Company/LogIn/CompanyLogIn";
import AuthContextProvider from "./storage/AuthContext";
import NewTrip from "./pages/Company/AddTrip/NewTrip";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        children: [
            {path: '', element: <Body/>},
            {path: 'cart', element: <CartBody/>},
            {path: 'create-company', element: <CompanySignUp/>},
            {path: 'company/log-in', element: <CompanyLogIn/>},
            {path: 'company/add', element: <NewTrip/>}
        ]
    }
])
const App = () => {
    return <AuthContextProvider>
        <RouterProvider router={router}/>
    </AuthContextProvider>
}
export default App;