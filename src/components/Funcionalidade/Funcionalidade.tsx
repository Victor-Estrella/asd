import Mecanicos from './assets/mecanicos.svg'
import Header from '../Header/Header'
import './style.css'
import Perguntas from '../Perguntas/Perguntas'
import Footer from '../Footer/Footer'

export default function Funcionalidade() {
    return(
        <>
            <Header/>
            <section className="container__funcionalidade">
                <div className="container__titulo--funcionalidade">
                    <h1 className="funcionalidade__titulo">Funcionalidade</h1>
                </div>
                <div className="funcionalidade">
                    <span className="funcionalidade__texto">O Descomplica Auto é um aplicativo baseado em inteligência artificial que visa ajudar usuários com problemas no veículo. 
                        Disponível em plataformas web e como app para celular, ele permite que o cliente descreva os sintomas do carro, como “está saindo fumaça” ou “ouço barulhos”. 
                        O sistema então fornece um diagnóstico preliminar e uma estimativa de custo, facilitando e acelerando o processo de conserto.
                        <img src={Mecanicos} alt="Vetores de mecânicos consertando carro"/>
                    </span>  
                </div>
            </section>
            <Perguntas/>
            <Footer/>
        </>
    )
}