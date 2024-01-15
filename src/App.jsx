import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './app.css'
import Header from './components/header/Header'
import Accordian from './components/accordian/Accordian'
import RandomColor from './components/random-color'
import { Menu } from './components/aside'


function App() {


  return (
    <div className="app">
      <Router>
        <Header />
        <div className="layout">
        <Menu />
        <Routes>
          <Route path="/" exact element={<Accordian />} />
          <Route path="/random" element={<RandomColor />} />
        </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App

