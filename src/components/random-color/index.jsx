import React, { useState } from 'react'
import "./style.css"

const RandomColor = () => {
    const [typeOfColor, setTypeOfColor] = useState('hex')
    const [color, setColor] = useState('#000000')

    const randomColorUtility = (length) => {
        return Math.floor(Math.random() * length)
    }

    const handleGenerateRandomHexColor = () => {
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
        let hexColor = '#'

        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColorUtility(hex.length)]
        }
        setColor(hexColor)
    }
    const handleGenerateRandomRgbColor = () => {

    }

    return (
        <div className="randomColor" style={{ width: '100vw', height: '100vh', backgroundColor: color }}>
            <div className="container">
                <h2>Random Color Generator</h2>
                <button className="btn" onClick={() => setTypeOfColor('hex')}>Generate HEX Color</button>
                <button className="btn" onClick={() => setTypeOfColor('rgb')}>Generate RGB Color</button>
                <button className="btn" onClick={typeOfColor === 'hex' ? handleGenerateRandomHexColor : handleGenerateRandomRgbColor}>Generate Random Color</button>
            </div>
        </div>
    )
}


export default RandomColor