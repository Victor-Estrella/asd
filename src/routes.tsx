import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Cadastro from "./pages/Cadastro/Cadastro";
import Equipe from "./pages/Equipe/Equipe";
import FuncionalidadePagina from "./pages/Funcionalidade/FuncionalidadePagina";

function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Equipe />} />
            <Route path="/Funcionalidade" element={<FuncionalidadePagina />} />
            <Route path="/Cadastro" element={<Cadastro />} />
            <Route path="/Footer" element={<Footer />} />
        </Routes>
    )
}

export default MainRoutes;