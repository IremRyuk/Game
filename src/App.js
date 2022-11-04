import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Load from './components/Load'
import Nav from './components/Nav'
import Home from './pages/Home'
import Report from './pages/Report'
import Request from './pages/Request'
import Contact from './pages/Contact'
import Offer from './pages/Offer'
import ItemSelect from './pages/ItemSelect'

export default function App() {
  return (
    <div>
      <Nav />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/report' element={<Report />} />
      <Route path='/request' element={<Request />} />
      <Route path='/offer' element={<Offer />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/itemSelect/:ID' element={<ItemSelect />}/>
      </Routes>
      <Load />
    </div>
  )
}
