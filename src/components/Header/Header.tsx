import Funcionalidade from "./assets/feed.svg"
import Chatbot from "./assets/chatbot.svg"
import Logout from "./assets/logout.svg"
import Sobre from "./assets/sobre.svg"
import { Link } from 'react-router-dom';
import './style.css'

export default function Header(){
    return(
        <header className="bg-fundoheader py-10 px-4 min-w-screen max-w-screen">
            <nav>
                <ul className="flex gap-[5.5em] list-none items-center justify-around">
                    <li>
                        <button className="border-4 border-azulclaro text-branco px-4 py-5 font-bold rounded- bg-azulclaro cursor-pointer flex items-center text-2xl gap-2.5 capitalize transition ease-in-out duration-1000  active:scale-95 tracking-widest">
                            <img src={Chatbot}/>
                            <span>Chatbot</span>    
                        </button>
                    </li>
                    <li>
                        <Link className="group flex gap-[5.5em] list-none items-center justify-around active:scale-95 tracking-widest relative" to="/Funcionalidade">
                            <img src={Funcionalidade} alt=""/>
                            <span className="tooltiptext absolute bg-white text-black p-1 rounded-lg z-10 invisible group-hover:visible text-xl">Funcionalidade</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="group flex gap-[5.5em] list-none items-center justify-around active:scale-95 relative" id="item__link--ativo" to="/">
                            <img src={Sobre} alt=""/>
                            <span className="tooltiptext absolute bg-white text-black p-1 rounded-lg z-10 invisible group-hover:visible text-xl">Sobre</span>
                        </Link>
                    </li>
                    <li>
                        <a className="group flex gap-[5.5em] list-none items-center justify-around active:scale-95 relative">
                            <img src={Logout} alt=""/>
                            <span className="tooltiptext absolute bg-white text-black p-1 rounded-lg z-10 invisible group-hover:visible text-xl">Sair</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}