import { useState } from 'react'
import './app.css'
import Header from './components/header/Header'
import Accordian from './components/accordian/Accordian'

function App() {
  

  return (
    <div className="app">
      <Header />

      {/* Accordian Component */}
      <Accordian />
    </div>
  )
}

export default App
