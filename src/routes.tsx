import { Routes, Route } from "react-router-dom";
import Sobre from "./components/Sobre/Sobre";
import Funcionalidade from "./components/Funcionalidade/Funcionalidade";

function MainRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Sobre/>}/>
            <Route path="/Funcionalidade" element={<Funcionalidade/>}/>
        </Routes>
    )
}

export default MainRoutes;