import Funcionalidade from "./assets/feed.svg"
import Chatbot from "./assets/chatbot.svg"
import Logout from "./assets/logout.svg"
import Sobre from "./assets/sobre.svg"
import { Link } from 'react-router-dom';
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
                        <Link className="item__link tooltip" to="/Funcionalidade">
                            <img src={Funcionalidade} alt=""/>
                            <span className="tooltiptext">Funcionalidade</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="item__link tooltip" id="item__link--ativo" to="/">
                            <img src={Sobre} alt=""/>
                            <span className="tooltiptext">Sobre</span>
                        </Link>
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