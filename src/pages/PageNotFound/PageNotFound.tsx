import Engrenagem from '/engranagem.png'

export default function PageNotFound(){
    return(
        <section>
            <h2 className='font-bold text-2xl mx-10 mt-10'>Ops! Conteúdo não localizado!</h2>
            <img src={Engrenagem} alt="Página não localizada" />
        </section>
    )
}