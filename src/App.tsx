import Header from './components/Header/Header'
import Sobre from './components/Sobre/Sobre'
import Funcionalidade from './components/Funcionalidade/Funcionalidade'
import Perguntas from './components/Perguntas/Perguntas'
import Integrantes from './components/Integrantes/Integrantes'
import Contato from './components/Contato/Contato'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  return (
    <div className='containerDiv'>
      <Header/>
      <Sobre/>
      <Funcionalidade/>
      <Perguntas/>
      <Integrantes/>
      <Contato/>
      <Footer/>
    </div>
  )
}

export default App
