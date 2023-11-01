import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import NavBar from './Pages/NavBar'
import Hero from './Pages/Hero'
import Tasks from './Pages/Tasks'
import Edit from './Pages/Edit'

function App() {
  

  return (
    <>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/Hero" element={<Hero />} />
        <Route path="/Tasks" element={<Tasks/>} />
        <Route path="/Edit" element={<Edit/>} />
        




      </Routes>
      
      
      
      
      
      </BrowserRouter>
    </>
  )
}

export default App
