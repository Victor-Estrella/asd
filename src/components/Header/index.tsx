import Funcionalidade from "./assets/feed.svg"
import Chatbot from "./assets/chatbot.svg"
import Logout from "./assets/logout.svg"
import Sobre from "./assets/sobre.svg"
import './style.css'

export default function Header(){
    return(
        <header>
            <nav>
                <ul className="lista-header">
                    <li>
                        <button className="item__link-publicacao">
                            <img src={Chatbot} alt=""/>
                            <span>Chatbot</span>    
                        </button>
                    </li>
                    <li>
                        <a className="item__link tooltip" href="">
                            <img src={Funcionalidade} alt=""/>
                            <span className="tooltiptext">Funcionalidade</span>
                        </a>
                    </li>
                    <li>
                        <a className="item__link tooltip" id="item__link--ativo" href="">
                            <img src={Sobre} alt=""/>
                            <span className="tooltiptext">Sobre</span>
                        </a>
                    </li>
                    <li>
                        <a className="item__link  tooltip">
                            <img src={Logout} alt=""/>
                            <span className="tooltiptext">Sair</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}