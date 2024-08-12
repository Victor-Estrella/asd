import Funcionalidade from "./assets/feed.svg"
import Chatbot from "./assets/chatbot.svg"
import Logout from "./assets/logout.svg"
import Sobre from "./assets/sobre.svg"
import './style.css'

export default function Cabecalho(){
    return(
        <header>
            <nav>
                <ul className="lista-sidebar">
                    <li>
                        <button className="item__link-publicacao">
                            <img src={Chatbot} alt=""/>    
                            <span>Chatbot</span>
                        </button>
                    </li>
                    <li>
                        <a className="item__link " href="./pagina-principal.html">
                            <img src={Funcionalidade} alt=""/>
                            <span>Visão Geral</span>
                        </a>
                    </li>
                    <li>
                        <a className="item__link item__link--ativo" href="./sobre-nos.html">
                            <img src={Sobre} alt=""/>
                            <span>Sobre nós</span>
                        </a>
                    </li>
                    <li>
                        <a className="item__link">
                            <img src={Logout} alt=""/>
                            <span>Sair</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}