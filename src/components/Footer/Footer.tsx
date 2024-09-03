import LogoPorto from "./assets/porto-seguro-logo.png";
import LogoFiap from "./assets/fiap-logo.png";
import "./style.css";

export default function Footer() {
  return (
    <footer className="w-full bg-[#111]">
        <div className="flex text-cinza">
            <div className="esquerda basis-1/2 py-2.5 px-5">
                <h2 className="text-lg font-semibold uppercase">Contato</h2>
                <div className="relative mx-auto align-center py-0 px-5 mt-5 ">
                    <form action="#" className="contato">
                        <div className="mt-7 nome">
                            <div className="mt-7 font-semibold text-[#202020] text-[1.5rem]">Nome</div>
                            <input type="text" required />
                        </div>
                        <div className="mt-7 email">
                            <div className="mt-7 font-semibold text-[#202020] text-[1.5rem]">E-mail</div>
                            <input type="email" required />
                        </div>
                        <div className="mt-7 msg">
                            <div className="mt-7 font-semibold text-[#202020] text-[1.5rem]">Mensagem (explique seu problema)</div>
                            <textarea rows={2} cols={25} required></textarea>
                        </div>
                        <div className="mt-7 btn-submit">
                            <button type="submit">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="direita basis-1/2 py-2.5 px-5">
                <h2 className="text-lg font-semibold uppercase">Endereço</h2>
                <div className="relative mx-auto align-center py-0 px-5 mt-5 ">
                    <div className="mt-5 lugar">
                        <span className="font-semibold text-[#202020] text-[1.5rem] ">R EMILIA MARENGO, 451 - VILA REGENTE FEIJO - SAO PAULO</span>
                    </div>
                    <div className="mt-5 phone">
                        <span className="font-semibold text-[#202020] text-[1.5rem] ">+333 76786</span>
                    </div>
                    <div className="mt-5 email">
                        <span className="font-semibold text-[#202020] text-[1.5rem] ">prevencao.cartoes@portoseguro.com.br.</span>
                    </div>
                    <div className="mt-5 flex justify-evenly">
                        <img className="mt-8 w-60" src={LogoPorto} alt="Logo Porto Seguro" />
                        <img className="mt-8 w-60" src={LogoFiap} alt="Logo FIAP" />
                    </div>
                </div>
            </div>
        </div>
        <div className="flex justify-center p-1 text-sm bg-[#151515]">
            <span className="credit text-[#656565]">
                Criado por Descomplica Auto{" "}
                |{" "}
            </span>
            <span className="far fa-copyright text-[#656565]"></span>
            <span> ® 2024. Todos os direitos reservados</span>
        </div>
    </footer>
  )
}
