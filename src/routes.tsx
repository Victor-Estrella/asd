import { Route, Routes } from "react-router-dom";
import Cadastro from "./pages/Cadastro/Cadastro";
import Equipe from "./pages/Equipe/Equipe";
import FuncionalidadePagina from "./pages/Funcionalidade/FuncionalidadePagina";
import AdicionarCarro from "./pages/Adicionar-Carro/Adicionar-Carro";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Cadastro />} />
            <Route path="/Funcionalidade" element={<FuncionalidadePagina />} />
            <Route path="/Sobre" element={<Equipe />} />
            <Route path="/AdicionarCarro" element={<AdicionarCarro/>} />
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    )
}

export default MainRoutes;