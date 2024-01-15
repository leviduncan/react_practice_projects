import React, { useState } from 'react'
import data from './data'
import './style.css'

const Accordian = () => {
    const [selected, setSelected] = useState(null)
    const [enableMultiSelection, setEnableMultiSelection] = useState(false)
    const [multiple, setMultiple] = useState([])

    const handleSingleSelection = (getCurrentId) => {
        setSelected(getCurrentId === selected ? null : getCurrentId)
    }
    const handleMultiSelection = (getCurrentId) => {
        let cpyMultiple = [...multiple]
        const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId)
        if (findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId)
        else cpyMultiple.splice(findIndexOfCurrentId, 1)

        setMultiple(cpyMultiple)
    }
    console.log(selected, multiple)
    return (
        <div className="faqs">
            <div className="container-sm">
                <h2>Frequently Asked Questions</h2>
                <p className="content">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, iure maxime quibusdam blanditiis aspernatur mollitia alias tempore accusantium placeat animi amet corporis quisquam ea assumenda ab soluta velit? Nemo, sequi molestias, suscipit ipsam fugiat impedit alias corrupti labore temporibus, quia ratione repudiandae aliquam. Voluptas vel nihil exercitationem, odio distinctio dolores.</p>

                {/* <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable Multi Selection</button> */}
                <input type="checkbox" name="" id="" onClick={() => setEnableMultiSelection(!enableMultiSelection)} /> Enable Multi Selection

                {
                    data && data.length > 0 ?
                        data.map((item, idx) => (
                            <div className="accordian" key={idx}>
                                <h3 className="title" onClick={
                                    enableMultiSelection
                                        ? () => handleMultiSelection(item.id)
                                        : () => handleSingleSelection(item.id)
                                }>
                                    {item.question} <span>+</span>
                                </h3>

                                {
                                    selected === item.id
                                        || multiple.indexOf(item.id) !== -1
                                        ? <div className='body'> {item.answer}</div>
                                        : null
                                }

                            </div>
                        )

                        )
                        : <div>No data found...</div>

                }
            </div>
        </div>
    )
}

export default Accordian