import LogoFiap from "./assets/fiap-logo.png";
import LogoPorto from "./assets/porto-seguro-logo.png";
import "./style.css";

export default function Footer() {
  return (
    <footer className="w-full bg-[#111]">
      <div className="flex flex-wrap text-cinza">
        <div className="w-1/2 py-2 px-4">
          <h2 className="text-sm font-semibold uppercase pl-4">Contato</h2>
          <div className="box relative mx-auto py-2 px-4 mt-4">
            <form action="#">
              <div className="mt-4">
                <div className="font-semibold text-[#707070] pb-1.5 text-sm lg:text-xl">Nome</div>
                <input className="w-32 pl-2 text-lg text-[#b9b9b9] bg-[#151515] border-[#222222] border-2 h-8 lg:w-full" type="text" required />
              </div>
              <div className="mt-4">
                <div className="font-semibold text-[#707070] pb-1.5 text-sm lg:text-xl">E-mail</div>
                <input className="w-32 pl-2 text-lg text-[#b9b9b9] bg-[#151515] border-2 border-[#222222] h-8 lg:w-full" type="email" required />
              </div>
              <div className="mt-4">
                <div className="font-semibold text-[#707070] pb-1.5 text-sm lg:text-xl">Mensagem (explique seu problema)</div>
                <textarea className="w-full pl-2 pt-1 text-[#b9b9b9] bg-[#151515] border-2 border-[#222222] text-lg" rows={2} required></textarea>
              </div>
              <div className="mt-4 flex justify-center">
                <button className="w-2/6 border-0 outline-none bg-azul text-branco font-medium text-lg cursor-pointer transition duration-300" type="submit">Enviar</button>
              </div>
            </form>
          </div>
        </div>
        <div className="w-1/2 py-2 px-4">
          <h2 className="text-sm font-semibold uppercase pl-4">Endereço</h2>
          <div className="box relative mx-auto py-2 px-4 mt-4">
            <div className="mt-4">
              <p className="font-semibold text-[#7a7a7a] text-sm">R EMILIA MARENGO, 451 - VILA REGENTE FEIJO - SAO PAULO</p>
              <p className="font-semibold text-[#7a7a7a] text-sm">+333 76786</p>
              <p className="font-semibold text-[#7a7a7a] text-sm">prevencao.cartoes@portoseguro.com.br</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-[1em] justify-evenly">
              <img className="w-60" src={LogoPorto} alt="Logo Porto Seguro" />
              <img className="w-60" src={LogoFiap} alt="Logo FIAP" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center p-2 text-xs bg-[#151515]">
        <span className="credit text-[#656565]">
          Criado por Descomplica Auto{" "}
          |{" "}
        </span>
        <span className="text-[#656565]"> ® 2024. Todos os direitos reservados</span>
      </div>
    </footer>
  );
}
