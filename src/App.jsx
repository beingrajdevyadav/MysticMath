
import './App.css'
import Form from './components/Form'
import Hero from './components/Hero'
import Preloader from './components/Preloader'

function App() {

  return (
    <>
      <header>
        <h3><span>M</span> ysticMath</h3>
      </header>
      <Hero />
      {/* <Preloader/> */}
      <Form />
    </>
  )
}

export default App
