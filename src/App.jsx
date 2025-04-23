
import './App.css'
import Form from './components/Form'
import Hero from './components/Hero'
import Preloader from './components/Preloader'

function App() {

  return (
    <>
      <header>
       <h2>MysticMath</h2>
      </header>
<Hero/>
      {/* <Preloader/> */}
      <Form/>
    </>
  )
}

export default App
