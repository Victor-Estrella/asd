import Github from "./assets/github.png"
import Monteiro from "./assets/monteiro.jpg"
import Petruk from "./assets/petruk.jpg"
import Henrique from "./assets/henrique.png"

export default function Integrantes(){
    return (
        <section className="flex flex-col items-center w-full mt-16">
            <h2 className="text-5xl text-azulclaro font-medium m-12">Integrantes</h2>
            <div className="flex gap-[12em] mb-12">
                <div className="mt-2.5 bg-transparent border border-[#0000b4d3] rounded-2xl p-6">
                    <img src={Monteiro} alt="Julia Monteiro" className="w-[21em] h-[29em]"/>
                    <p className="text-lg text-black mt-1.5 ml-1.5 font-normal">Julia Monteiro</p>
                    <p className="text-lg text-black mt-1.5 ml-1.5 font-normal">RM:557023</p>
                    <p className="text-lg text-black mt-1.5 ml-1.5 font-normal">1TDSPH</p>
                    <a href="https://github.com/jliamonteiro" target="_blank"><img src={Github} alt="Ícone github" className="w-20 mt-1.5 ml-2.5"/></a>
                </div>
                <div className="mt-2.5 bg-transparent border border-[#0000b4d3] rounded-2xl p-6">
                    <img src={Petruk} alt="Sofia Petruk" className="w-[21em] h-[29em]"/>
                    <p className="text-lg text-black mt-1.5 ml-1.5 font-normal">Sofia Andrade Petruk</p>
                    <p className="text-lg text-black mt-1.5 ml-1.5 font-normal">RM:556585</p>
                    <p className="text-lg text-black mt-1.5 ml-1.5 font-normal">1TDSPH</p>
                    <a href="https://github.com/sofiapetruk" target="_blank"><img src={Github} alt="Ícone github" className="w-20 mt-1.5 ml-2.5"/></a>
                </div>
                <div className="mt-2.5 bg-transparent border border-[#0000b4d3] rounded-2xl p-6">
                    <img src={Henrique} alt="Victor Henrique" className="w-[21em] h-[29em]"/>
                    <p className="text-lg text-black mt-1.5 ml-1.5 font-normal">Victor Henrique Estrella Carracci</p>
                    <p className="text-lg text-black mt-1.5 ml-1.5 font-normal">RM:556206</p>
                    <p className="text-lg text-black mt-1.5 ml-1.5 font-normal">1TDSPH</p>
                    <a href="https://github.com/Victor-Estrella" target="_blank"><img src={Github} alt="Ícone github" className="w-20 mt-1.5 ml-2.5"/></a>
                </div>     
            </div>
        </section>
    )
}