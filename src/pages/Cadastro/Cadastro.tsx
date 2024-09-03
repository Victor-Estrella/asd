import { useState } from 'react'
import Logo from "./assets/logo.svg"
import Apple from "./assets/apple.png"
import Facebook from "./assets/facebook.png"
import Google from "./assets/google.png"
import Email from "./assets/mail.svg"
import Senha from "./assets/lock.svg"
import Nome from "./assets/user.svg"
import Telefone from "./assets/phone.svg"
import './cadastro.css';

export default function Cadastro() {
    const [rightPanel , setRightPanel] = useState(true);

    const registerButton = () => {
        setRightPanel(true);
    };

    const loginButton= () => {
        setRightPanel(false);
    };

    return (
        <main>
            <div className={`container ${rightPanel ? "right-panel-active" : ""}`} id="container">
                <div className="form-container register-container">
                    <form action="#" className='form'>
                        <div className="logo">
                            <img src={Logo} alt="Logo da Descomplica Auto" />
                        </div>
                        <h1>Cadastro</h1>
                        <div className="formulario">
                            <div className="nome">
                                <img src={Nome} />
                                <input type="text" placeholder="Nome Completo" />
                            </div>

                            <div className="email">
                                <img src={Email} />
                                <input type="email" placeholder="Email" />
                            </div>

                            <div className="telefone">
                                <img src={Telefone} />
                                <input type="text" placeholder="Telefone" />
                            </div>
                            <div className="senha">
                                <img src={Senha} />
                                <input type="password" placeholder="Senha" />
                            </div>
                        </div>
                        <div className="container__botao">
                            <a href="#" className="botao">Cadastrar</a>
                        </div>
                    </form>
                </div>
                <div className="form-container login-container">
                    <form action="#" className='form'>
                        <div className="logo">
                            <img src={Logo} alt="Logo da Descomplica Auto" />
                        </div>
                        <h1>Login</h1>
                        <ul className="icones">
                            <li><a href="#"><img src={Google} className="icone" alt="Ícone do Google" /></a></li>
                            <li><a href="#"><img src={Facebook} className="icone" alt="Ícone do Facebook" /></a></li>
                            <li><a href="#"><img src={Apple} className="icone" alt="Ícone da Apple" /></a></li>
                        </ul>
                        <div className="formulario">
                            <div className="email">
                                <img src={Email} alt="" />
                                <input type="email" placeholder="Email" />
                            </div>

                            <div className="senha">
                                <img src={Senha} alt="" />
                                <input type="password" placeholder="Senha" />
                            </div>
                        </div>
                        <div className="container__botao">
                            <a href="#" className="botao">Entrar</a>
                        </div>
                    </form>
                </div>

                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1 className="title">Bem vindo de volta!</h1>
                            <p>Para se manter conectado conosco por favor faça login com suas informações</p>
                            <button className="ghost" onClick={loginButton}>Login</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1 className="title">Seja bem vindo!</h1>
                            <p>Caso não possua uma conta, faça seu cadastro clicando no botão abaixo</p>
                            <button className="ghost" onClick={registerButton}>Cadastrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
