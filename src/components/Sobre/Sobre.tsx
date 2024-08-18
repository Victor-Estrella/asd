import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Integrantes from '../Integrantes/Integrantes'
import './style.css'

export default function Sobre() {
    return (
        <>
            <Header/>
            <section className="container__sobre">
                <div className="container__titulo--sobre">
                    <h1 className="sobre__titulo">Sobre nós</h1>
                </div>
                <div className="sobre">
                    <p className="sobre__texto">Na Descomplica Auto, nosso objetivo é simplificar e agilizar a assistência aos motoristas. Desenvolvemos um aplicativo que acelera a resolução de problemas com veículos, oferecendo suporte imediato e eficiente. Seja para questões pequenas ou emergências, nosso aplicativo reduz a burocracia e proporciona uma ajuda rápida, tornando a experiência de dirigir mais tranquila e sem complicações.</p>
                </div>
            </section>
            <Integrantes/>
            <Footer/>
        </>
    )
}
