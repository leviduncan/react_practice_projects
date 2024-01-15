import React from 'react'
import { Link } from 'react-router-dom'
import { FiGlobe, FiPackage } from "react-icons/fi";
import './style.css'

export const Menu = () => {
  return (
    <div className="menu">
      <ul>
        <Link to="/"><li><FiGlobe className="icon"/>FAQs</li></Link>
        <Link to="/random"><li><FiPackage className="icon"/>Random</li></Link>
      </ul>
    </div>
  )
}