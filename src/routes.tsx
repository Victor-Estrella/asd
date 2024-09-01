import { Routes, Route } from "react-router-dom";
import FuncionalidadePagina from "./pages/Funcionalidade/FuncionalidadePagina";
import Equipe from "./pages/Equipe/Equipe";
import Cadastro from "./pages/Cadastro/Cadastro";

function MainRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Equipe/>}/>
            <Route path="/Funcionalidade" element={<FuncionalidadePagina/>}/>
            <Route path="/Cadastro" element={<Cadastro/>}/>
        </Routes>
    )
}

export default MainRoutes;