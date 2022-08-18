import { Route, BrowserRouter, Routes } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path="/" exact />
                <Route element={<About />} path="/about" />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;