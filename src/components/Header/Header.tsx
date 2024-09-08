import Funcionalidade from "./assets/feed.svg";
import Chatbot from "./assets/chatbot.svg";
import Logout from "./assets/logout.svg";
import Sobre from "./assets/sobre.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex bg-fundoheader items-center justify-between md:justify-center h-24 lg:h-32">
        <div className="flex items-center">
            <button className='md:border-4 md:border-azulclaro md:text-branco md:pr-11 md:ml-4 md:font-bold md:rounded-2xl md:bg-azulclaro md:cursor-pointer md:flex md:items-center md:text-2xl md:gap-2.5 md:capitalize md:active:scale-95 md:hover:tracking-widest duration-300 lg:ml-16 lg:pr-5'>
                <img src={Chatbot} alt="" className="p-[1em] w-20 ml-4 md:m-0 md:p-[0.5em] lg:w-28"/>
                <span className="hidden md:block">Chatbot</span>
            </button>
        </div>
        
        <div className="flex items-center gap-7 md:w-full md:justify-evenly">
            <Link to="/Funcionalidade" className="group">
                <img src={Funcionalidade} alt="" className="w-9/12 lg:w-12 md:hover:scale-105 md:active:scale-95 duration-300"/>
                <p className="hidden absolute bg-white text-black p-1 rounded-lg z-10 lg:group-hover:block lg:mt-1 lg:ml-8 text-xl">Funcionalidade</p>
            </Link>
            <Link to="/" className="group relative">
                <img src={Sobre} alt="" className="w-9/12 lg:w-12 md:hover:scale-105 md:active:scale-95 duration-300"/>
                <p className="hidden absolute bg-white text-black p-1 rounded-lg z-10 lg:group-hover:block lg:mt-1 lg:ml-8 text-xl">Sobre</p>
            </Link>
            <Link to="#" className="group relative">
                <img src={Logout} alt="" className="w-9/12 lg:w-12 md:hover:scale-105 md:active:scale-95 duration-300"/>
                <p className="hidden absolute bg-white text-black p-1 rounded-lg z-10 lg:group-hover:block lg:mt-1 lg:ml-8 text-xl">Sair</p>
            </Link>
        </div>
    </header>
  );
}
