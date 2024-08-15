import './style.css'

export default function Contato() {
    return (
        <section className="container__contato">
            <h2 className="contato__titulo">Contato</h2>
            <div className="container__contato-input">
                <label htmlFor="name">Nome Completo:</label>
                <input type="text" id="name"/>
    
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email"/>
    
                <label htmlFor="mensagem">Mensagem (explique seu problema)</label>
                <textarea name="" id="" cols={30}></textarea>
            </div>
        </section> 
    )
}
