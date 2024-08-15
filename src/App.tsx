import Header from './components/Header'
import Sobre from './components/Sobre'
import Funcionalidade from './components/Funcionalidade'
import Perguntas from './components/Perguntas'
import Integrantes from './components/Integrantes'
import Contato from './components/Contato'
import Footer from './components/Footer'
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
