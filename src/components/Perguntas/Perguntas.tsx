export default function Perguntas() {
    return(
        <section className="flex flex-col items-center w-full mt-32 h-screen">
            <h2 className="text-5xl text-azulclaro font-medium m-10">Perguntas Frequentes</h2>
            <div className="flex flex-wrap w-full mb-10 justify-evenly">
                <p className="text-xl shadow-pergunta p-4 w-96 h-80 bg-[#C6D8F0] text-black"><span className="font-bold">O aplicativo oferece suporte técnico ou atendimento ao cliente?</span><br/><br/>
                Sim, nós possuímos um formulário logo abaixo para que você possa nos contar o que você precisa para que assim possamos auxiliá-lo</p>
                    
                <p className="text-xl shadow-pergunta p-4 w-96 h-80 bg-[#C4F9FF] text-black"><span className="font-bold">Quais informações preciso fornecer para obter um diagnóstico preciso?</span><br/><br/>
                Descrever da maneira mais detalhada o possível o que está ocorrendo com seu automóvel</p>
                    
                <p className="text-xl shadow-pergunta p-4 w-96 h-80 bg-[#CCFF99] text-black"><span className="font-bold">Existe algum custo para usar o aplicativo?</span><br/><br/>
                O custo será calculado por serviço com base no diagnóstico e escolha de mecânico.</p>
                    
                <p className="text-xl shadow-pergunta p-4 w-96 h-80 bg-[#B0E0E6] text-black"><span className="font-bold">O aplicativo pode ajudar em situações de emergência?</span><br/><br/>
                    O nosso aplicativo oferece uma opção de autoajuda para soluções rápidas e também permite localizar mecânicos confiáveis na região do cliente</p>
            </div>
        </section>
    )
}