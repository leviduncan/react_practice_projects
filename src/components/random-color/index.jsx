import React, { useState } from 'react'
import "./style.css"

const RandomColor = () => {
const [bucket, setBucket] = useState('Random Color')
    return (
        <div className="randomColor">
            <div className="container">
            <h2>{bucket}</h2>
            </div>
        </div>
    )
}


export default RandomColor