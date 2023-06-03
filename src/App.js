import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import RootLayout from "./layouts/RootLayout";
import Body from "./pages/Home/Body";
import CompanySignUp from "./pages/Company/SignUp/CompanySignUp";
import CompanyLogIn from "./pages/Company/LogIn/CompanyLogIn";
import AuthContextProvider from "./storage/AuthContext";
import NewTrip from "./pages/Company/AddTrip/NewTrip";
import AllTrips from "./pages/Company/ReviewTrip/AllTrips";
import Cart from "./pages/Cart/Cart";
import SearchTrip from "./pages/Search/SearchTrip";
import IncomeStatistics from "./pages/Company/IncomeStats/IncomeStatistics";
import TripContextProvider from "./storage/TripContext";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        children: [
            {path: '', element: <Body/>},
            {path: 'cart', element: <Cart/>},
            {path: 'create-company', element: <CompanySignUp/>},
            {path: 'company/log-in', element: <CompanyLogIn/>},
            {path: 'company/add-trip', element: <NewTrip/>},
            {path: 'company/review-trip', element: <AllTrips/>},
            {path: 'user/search-trip', element: <SearchTrip/>},
            {path: 'company/income-statistics', element: <IncomeStatistics/>},
            {path: 'company/edit', element: <NewTrip/>}
        ]
    }
])
const App = () => {
    return <AuthContextProvider>
        <TripContextProvider>
            <RouterProvider router={router}/>
        </TripContextProvider>
    </AuthContextProvider>
}
export default App;