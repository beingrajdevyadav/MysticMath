
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'

import Index from './pages/Index'
import Home from './pages/Home'
import AstroSign from './pages/AstroSign'

import Birthday from './pages/Birthday'
import Day from './pages/Day'
import Month from './pages/Month'

import DestinyNumber from './pages/DestinyNumber'
import LifePathNumber from './pages/LifePathNumber'
import SoulUrgeNumber from './pages/SoulUrgeNumber'

import MaturityNumber from './pages/MaturityNumber'
import PersonalityNumber from './pages/PersonalityNumber'
import { useSelector } from 'react-redux'
import ScrollToTop from './components/ScrollToTop'



function App() {
const user = useSelector((state) => (state.user.fullName));
  // console.log(user);
  return (
    <>
    <ScrollToTop/>
      <header>
        <h3><span>D</span> ivineDigits</h3>
      </header>

      <Routes>
        <Route path="/" element={user?(<Home />) : <Index />} />
        <Route path='/home' element={<Home />} />

        <Route path='/astro-sign' element={<AstroSign />} />
        <Route path='/birthday' element={<Birthday />} />
        <Route path='/day' element={<Day />} />

        <Route path='/month' element={<Month />} />
        <Route path='/destiny-number' element={<DestinyNumber />} />
        <Route path='/life-path-number' element={<LifePathNumber />} />

        <Route path='/soul-urge-number' element={<SoulUrgeNumber />} />
        <Route path='/maturity-number' element={<MaturityNumber />} />
        <Route path='/personality-number' element={<PersonalityNumber />} />
      </Routes>


      <Footer />
    </>
  )
}

export default App
