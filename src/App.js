import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import {Route, Routes} from 'react-router-dom'
import AppRoutes from "./AppRoutes";

const App = () => {
    return (
        <>
            <Header/>
                <Routes>
                    {AppRoutes.map((route, index) => {
                        const {element, ...rest} = route;
                        return <Route key={index} {...rest} element={element}/>;
                    })}
                </Routes>
            <Footer/>
        </>
    );
}
export default App;