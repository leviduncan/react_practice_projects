import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiGlobe, FiPackage } from "react-icons/fi";
import { FaRegStar } from "react-icons/fa6";

import './style.css'

export const Menu = () => {
  const [selected, setSelected] = useState(null)
  return (
    <div className="menu">
      <ul>
        <Link to="/"><li><FiGlobe className="icon"/>FAQs</li></Link>
        <Link to="/random"><li><FiPackage className="icon"/>Random</li></Link>
        <Link to="/star-rating"><li><FaRegStar className="icon"/>Rating</li></Link>
      </ul>
    </div>
  )
}
