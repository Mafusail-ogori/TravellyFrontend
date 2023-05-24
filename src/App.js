import Header from "./pages/Home/Header";
import Footer from "./pages/Home/Footer";
import {Route, Routes} from 'react-router-dom'
import AppRoutes from "./AppRoutes";

const App = () => {
    return (
        <>
            <Header/>
            <div id = "modal"></div>
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