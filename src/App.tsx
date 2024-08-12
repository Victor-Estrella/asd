import Cabecalho from './components/Cabecalho'
import Sobre from './components/Sobre'
import Funcionalidade from './components/Funcionalidade'
import Perguntas from './components/Perguntas'
import Integrantes from './components/Integrantes'
import Contato from './components/Contato'
import './App.css'

function App() {
  return (
    <div className='containerDiv'>
      <Cabecalho/>
      <Sobre/>
      <Funcionalidade/>
      <Perguntas/>
      <Integrantes/>
      <Contato/>
    </div>
  )
}

export default App
