import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Chat from './pages/Chat'

const App = () => {

  useEffect(() => {
    document.body.classList.add("dark", "text-primaryText")
    document.body.style.backgroundColor = "#121212"
  }, [])

  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/chat' element={<Chat />} />
        </Routes>
      </Router>
    </>
  )
}

export default App