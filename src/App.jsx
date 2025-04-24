
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Index from './pages/Index'


function App() {

  return (
    <>
      <header>
        <h3><span>M</span> ysticMath</h3>
      </header>

<Routes>
  <Route path="/" element={<Index />} />
</Routes>


      <Footer/>
    </>
  )
}

export default App
