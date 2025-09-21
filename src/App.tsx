import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import AboutPage from "./AboutPage.tsx";
import Pages from "./Pages.tsx";
import ErrorPage from "./ErrorPage.tsx";
import Order from "./Order.tsx";
import Catalog from "./Catalog.tsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/AboutPage" element={<AboutPage />} />
                <Route path="/Pages" element={<Pages />} />
                <Route path="/Pages" element={<Pages />} />
                <Route path="/Order" element={<Order />} />
                <Route path="/ErrorPage" element={<ErrorPage />} />
                <Route path="/Catalog" element={<Catalog />} />

                <Route path="*" element={<Navigate to="/ErrorPage" replace />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
