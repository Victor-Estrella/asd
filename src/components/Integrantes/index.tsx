import Github from "./assets/github.png"
import Monteiro from "./assets/monteiro.jpg"
import Petruk from "./assets/petruk.jpg"
import Henrique from "./assets/henrique.png"
import "./style.css";

export default function Integrantes(){
    return (
        <section className="integrantes__container">
            <h2 className="integrantes__titulo">Integrantes</h2>
            <div className="integrantes">
                <div className="informacoes__integrantes">
                    <img src={Monteiro} alt="Julia Monteiro" className="aluno"/>
                    <p>Julia Monteiro</p>
                    <p>RM:557023</p>
                    <p>1TDSPH</p>
                    <a href="https://github.com/jliamonteiro" target="_blank"><img src={Github} alt="Ícone github" className="github"/></a>
                </div>
                <div className="informacoes__integrantes">
                    <img src={Petruk} alt="Sofia Petruk" className="aluno"/>
                    <p>Sofia Andrade Petruk</p>
                    <p>RM:556585</p>
                    <p>1TDSPH</p>
                    <a href="https://github.com/sofiapetruk" target="_blank"><img src={Github} alt="Ícone github" className="github"/></a>
                </div>
                <div className="informacoes__integrantes">
                    <img src={Henrique} alt="Victor Henrique" className="aluno"/>
                    <p>Victor Henrique Estrella Carracci</p>
                    <p>RM:556206</p>
                    <p>1TDSPH</p>
                    <a href="https://github.com/Victor-Estrella" target="_blank"><img src={Github} alt="Ícone github" className="github"/></a>
                </div>     
            </div>
        </section>
    )
}