import Mecanicos from './assets/mecanicos.svg'


export default function Funcionalidade() {
    return(
        <>
            <section className="flex flex-col items-center">
                <div className="flex justify-center w-full">
                    <h1 className="text-7xl font-bold mt-28 mb-10 text-azulclaro">Funcionalidade</h1>
                </div>
                <div className="flex justify-center">
                    <span className="flex text-azulescuro bg-cinza text-2xl p-6 w-8/12">O Descomplica Auto é um aplicativo baseado em inteligência artificial que visa ajudar usuários com problemas no veículo. 
                        Disponível em plataformas web e como app para celular, ele permite que o cliente descreva os sintomas do carro, como “está saindo fumaça” ou “ouço barulhos”. 
                        O sistema então fornece um diagnóstico preliminar e uma estimativa de custo, facilitando e acelerando o processo de conserto.
                        <img className='mr-10 ml-20' src={Mecanicos} alt="Vetores de mecânicos consertando carro"/>
                    </span>  
                </div>
            </section>
        </>
    )
}