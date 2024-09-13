import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Apple from "./assets/apple.png";
import Facebook from "./assets/facebook.png";
import Google from "./assets/google.png";
import Senha from "./assets/lock.svg";
import Logo from "./assets/logo.png";
import Email from "./assets/mail.svg";
import Telefone from "./assets/phone.svg";
import Nome from "./assets/user.svg";
import './cadastro.css';

interface LoginErrors {
    email?: string;
    password?: string;
}

interface RegisterErrors {
    name?: string;
    email?: string;
    phone?: string;
    password?: string;
}

export default function Asda() {
    const [rightPanel, setRightPanel] = useState<boolean>(true);

    // Login state
    const [loginEmail, setLoginEmail] = useState<string>('');
    const [loginPassword, setLoginPassword] = useState<string>('');
    const [loginErrors, setLoginErrors] = useState<LoginErrors>({});

    // Register state
    const [registerName, setRegisterName] = useState<string>('');
    const [registerEmail, setRegisterEmail] = useState<string>('');
    const [registerPhone, setRegisterPhone] = useState<string>('');
    const [registerPassword, setRegisterPassword] = useState<string>('');
    const [registerErrors, setRegisterErrors] = useState<RegisterErrors>({});

    const navigate = useNavigate();  // Hook para navegação

    const registerButton = () => {
        setRightPanel(true);
    };

    const loginButton = () => {
        setRightPanel(false);
    };

    const validateLogin = (): boolean => {
        const errors: LoginErrors = {};
        if (!loginEmail) errors.email = 'Email é obrigatório';
        if (!loginPassword) errors.password = 'Senha é obrigatória';
        setLoginErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const validateRegister = (): boolean => {
        const errors: RegisterErrors = {};
        if (!registerName) errors.name = 'Nome é obrigatório';
        if (!registerEmail) errors.email = 'Email é obrigatório';
        if (!registerPhone) errors.phone = 'Telefone é obrigatório';
        if (!registerPassword) errors.password = 'Senha é obrigatória';
        setRegisterErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleLoginSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validateLogin()) {
            // Navigate to the next page after validation
            navigate('/Funcionalidade');
        }
    };

    const handleRegisterSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validateRegister()) {
            // Navigate to the next page after validation
            navigate('/Funcionalidade');
        }
    };

    return (
        <main className={`h-screen w-screen max-w-screen-min-2000 flex justify-center container ${rightPanel ? "right-panel-active" : ""} gap-4`} id="container">
            <section className="my-8 hidden w-11/12 lg:flex items-center justify-center z-10 lg:w-full lg:flex-grow lg:ml-2 lg:my-0">
                <form action="#" className='h-full bg-branco flex items-center flex-col px-4 text-center drop-shadow-lg rounded-lg flex-grow' onSubmit={handleLoginSubmit}>
                    <div className="w-full flex justify-end">
                        <img src={Logo} alt="Logo da Descomplica Auto" className='h-10 mb-6 mt-8'/>
                    </div>
                    <h1 className="text-6xl mt-6 lg:mt-20 font-bold text-azulclaro m-0 md:text-7xl lg:text-8xl">Login</h1>
                    <ul className="flex list-none my-10 gap-7 md:gap-24 lg:my-9">
                        <li><a href="#"><img src={Google} className="cursor-pointer w-12 md:w-14 lg:w-16" alt="Ícone do Google" /></a></li>
                        <li><a href="#"><img src={Facebook} className="cursor-pointer w-12 md:w-14 lg:w-16" alt="Ícone do Facebook" /></a></li>
                        <li><a href="#"><img src={Apple} className="cursor-pointer w-12 md:w-14 lg:w-16" alt="Ícone da Apple" /></a></li>
                    </ul>
                    <div className="flex flex-col gap-5 mt-1">
                        <div className="bg-cinza flex items-center gap-2.5 pl-2.5 rounded-xl">
                            <img src={Email}/>
                            <input className={`border-none outline-none w-11/12 h-16 bg-transparent pl-2.5 text-3xl font-light lg:text-4xl text-preto ${loginErrors.email ? 'border-red-500' : ''}`} type="email" placeholder="Email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)}/>
                        </div>
                        {loginErrors.email && <p className="text-red-500">{loginErrors.email}</p>}
                        <div className="bg-cinza flex items-center gap-2.5 pl-2.5 rounded-xl">
                            <img src={Senha} />
                            <input
                                className={`border-none outline-none w-full h-16 bg-transparent pl-2.5 text-3xl font-light lg:text-4xl text-preto ${loginErrors.password ? 'border-red-500' : ''}`}
                                type="password"
                                placeholder="Senha"
                                value={loginPassword}
                                onChange={(e) => setLoginPassword(e.target.value)}
                            />
                        </div>
                        {loginErrors.password && <p className="text-red-500">{loginErrors.password}</p>}
                    </div>
                    <div className="mt-8">
                        <button type="submit" className="bg-azulescuro p-6 text-branco font-bold text-2xl rounded-3xl md:text-3xl md:px-12 lg:text-4xl">Entrar</button>
                    </div>
                    <div className="mt-6">
                        <button type="button" className="text-azulclaro font-bold text-xl">Criar conta</button>
                    </div>
                </form>
            </section>

            <section className="my-8 w-11/12 lg:flex items-center justify-center z-10 lg:w-full lg:flex-grow lg:mr-2 lg:my-0">
                <form action="#" className='h-full bg-branco flex items-center flex-col px-4 text-center drop-shadow-lg rounded-lg flex-grow' onSubmit={handleRegisterSubmit}>
                    <div className="w-full flex justify-end">
                        <img src={Logo} alt="Logo da Descomplica Auto" className='h-10 mb-6 mt-8'/>
                    </div>
                    <h1 className='text-5xl mt-2 lg:my-10 font-bold text-azulclaro m-0 md:text-7xl lg:text-8xl'>Cadastro</h1>
                    <div className="flex flex-col gap-2 mt-5">
                        <div className="bg-cinza flex items-center gap-2.5 pl-2.5 rounded-xl">
                            <img src={Nome} />
                            <input className={`border-none outline-none w-11/12 h-16 bg-transparent pl-2.25 text-2xl font-light lg:text-4xl text-preto ${registerErrors.name ? 'border-red-500' : ''}`} type="text" placeholder="Nome Completo" value={registerName} onChange={(e) => setRegisterName(e.target.value)}/>
                        </div>
                        {registerErrors.name && <p className="text-red-500">{registerErrors.name}</p>}
                        <div className="bg-cinza flex items-center gap-2.5 pl-2.5 rounded-xl">
                            <img src={Email} />
                            <input
                                className={`border-none outline-none w-11/12 h-16 bg-transparent pl-2.5 text-2xl font-light lg:text-4xl text-preto ${registerErrors.email ? 'border-red-500' : ''}`}
                                type="email"
                                placeholder="Email"
                                value={registerEmail}
                                onChange={(e) => setRegisterEmail(e.target.value)}
                            />
                        </div>
                        {registerErrors.email && <p className="text-red-500">{registerErrors.email}</p>}
                        <div className="bg-cinza flex items-center gap-2.5 pl-2.5 rounded-xl">
                            <img src={Telefone} />
                            <input
                                className={`border-none outline-none w-11/12 h-16 bg-transparent pl-2.5 text-2xl font-light lg:text-4xl text-preto ${registerErrors.phone ? 'border-red-500' : ''}`}
                                type="text"
                                placeholder="Telefone"
                                value={registerPhone}
                                onChange={(e) => setRegisterPhone(e.target.value)}
                            />
                        </div>
                        {registerErrors.phone && <p className="text-red-500">{registerErrors.phone}</p>}
                        <div className="bg-cinza flex items-center gap-2.5 pl-2.5 rounded-xl">
                            <img src={Senha} />
                            <input
                                className={`border-none outline-none w-11/12 h-16 bg-transparent pl-2.5 text-2xl font-light lg:text-4xl text-preto ${registerErrors.password ? 'border-red-500' : ''}`}
                                type="password"
                                placeholder="Senha"
                                value={registerPassword}
                                onChange={(e) => setRegisterPassword(e.target.value)}
                            />
                        </div>
                        {registerErrors.password && <p className="text-red-500">{registerErrors.password}</p>}
                    </div>
                    <div className="mt-5">
                        <button type="submit" className="bg-azulescuro p-6 text-branco font-bold text-2xl rounded-3xl md:text-3xl md:px-12 lg:text-4xl">Cadastrar</button>
                    </div>
                    <div className="mt-5">
                        <button type="button" className="text-azulclaro font-bold text-xl">Já tenho conta</button>
                    </div>
                </form>
            </section>

            {/* Overlay */}
            <div className="overlay-container hidden lg:block">
                <div className="overlay bg-azulclaro bg-no-repeat bg-cover bg-[0_0] text-branco relative -left-full h-full w-[200%]">
                    <div className="overlay-panel overlay-left">
                        <h1 className="text-5xl font-bold mb-8 text-branco m-0">Bem vindo de volta!</h1>
                        <p className='text-branco text-lg'>Para se manter conectado conosco por favor faça login com suas informações</p>
                        <button className="mt-10 rounded-full border border-white bg-transparent text-white text-2xl font-bold my-2 px-20 py-3 tracking-wide capitalize transition duration-300 ease-in-out hover:tracking-wider active:scale-95 focus:outline-none" onClick={loginButton}>Login</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1 className="text-5xl font-bold mb-8 text-branco m-0">Seja bem vindo!</h1>
                        <p className='text-branco text-lg'>Caso não possua uma conta, faça seu cadastro clicando no botão abaixo</p>
                        <button className="mt-10 rounded-full border border-white bg-transparent text-white text-2xl font-bold my-2 px-20 py-3 tracking-wide capitalize transition duration-300 ease-in-out hover:tracking-wider active:scale-95 focus:outline-none" onClick={registerButton}>Cadastrar</button>
                    </div>
                </div>
            </div>
        </main>
    );
}
