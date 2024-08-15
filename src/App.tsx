import Header from './components/Header/Header'
import Sobre from './components/Sobre/Sobre'
import Funcionalidade from './components/Funcionalidade/Funcionalidade'
import Perguntas from './components/Perguntas/Perguntas'
import Integrantes from './components/Integrantes/Integrantes'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className='containerDiv'>
      <Header/>
      <Sobre/>
      <Funcionalidade/>
      <Perguntas/>
      <Integrantes/>
      <Footer/>
    </div>
  )
}

export default App
