import LogoPorto from "./assets/porto-seguro-logo.png";
import LogoFiap from "./assets/fiap-logo.png";
import "./style.css";

export default function Footer() {
  return (
    <footer>
        <div className="main-content">
            <div className="esquerda box">
                <h2>Contato</h2>
                <div className="content">
                    <form action="#">
                        <div className="nome">
                            <div className="text">Nome</div>
                            <input type="text" required />
                        </div>
                        <div className="email">
                            <div className="text">E-mail</div>
                            <input type="email" required />
                        </div>
                        <div className="msg">
                            <div className="text">Mensagem (explique seu problema)</div>
                            <textarea rows={2} cols={25} required></textarea>
                        </div>
                        <div className="btn-submit">
                            <button type="submit">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="direita box">
                <h2>Endereço</h2>
                <div className="content">
                    <div className="lugar">
                        <span className="text">R EMILIA MARENGO, 451 - VILA REGENTE FEIJO - SAO PAULO</span>
                    </div>
                    <div className="phone">
                        <span className="text">+333 76786</span>
                    </div>
                    <div className="email">
                        <span className="text">prevencao.cartoes@portoseguro.com.br.</span>
                    </div>
                    <div className="parcerias">
                        <img className="icone" src={LogoPorto} alt="Logo Porto Seguro" />
                        <img className="icone" src={LogoFiap} alt="Logo FIAP" />
                    </div>
                </div>
            </div>
        </div>
        <div className="bottom">
            <center>
                <span className="credit">
                    Criado por Descomplica Auto{" "}
                    |{" "}
                </span>
                <span className="far fa-copyright"></span>
                <span> ® 2024. Todos os direitos reservados</span>
            </center>
        </div>
    </footer>
  )
}
