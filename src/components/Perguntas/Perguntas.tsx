import './style.css'

export default function Perguntas() {
    return(
        <section className="container__perguntas">
            <h2 className="pergunta__titulo">Perguntas Frequentes</h2>
            <div className="container__post-it">
                <p className="post-it__pergunta primeiro"><span className="post-it__texto">O aplicativo oferece suporte técnico ou atendimento ao cliente?</span><br/><br/>
                Sim, nós possuímos um formulário logo abaixo para que você possa nos contar o que você precisa para que assim possamos auxiliá-lo</p>
                    
                <p className="post-it__pergunta segundo"><span className="post-it__texto">Quais informações preciso fornecer para obter um diagnóstico preciso?</span><br/><br/>
                Descrever da maneira mais detalhada o possível o que está ocorrendo com seu automóvel</p>
                    
                <p className="post-it__pergunta terceiro"><span className="post-it__texto">Existe algum custo para usar o aplicativo?</span><br/><br/>
                O custo será calculado por serviço com base no diagnóstico e escolha de mecânico.</p>
                    
                <p className="post-it__pergunta quarto"><span className="post-it__texto">O aplicativo pode ajudar em situações de emergência?</span><br/><br/>
                    O nosso aplicativo oferece uma opção de autoajuda para soluções rápidas e também permite localizar mecânicos confiáveis na região do cliente</p>
            </div>
        </section>
    )
}