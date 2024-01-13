import React, { useState } from 'react'
import data from './data'

const Accordian = () => {
    const [selected, setSelected] = useState(null)

    const handleSingleSelection = (getCurrentId) => {
        setSelected(getCurrentId === selected ? null : getCurrentId)
    }

    return (
        <div className="faqs">
            <div className="container-sm">
                <h2>Frequently Asked Questions</h2>
                <p className="content">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, iure maxime quibusdam blanditiis aspernatur mollitia alias tempore accusantium placeat animi amet corporis quisquam ea assumenda ab soluta velit? Nemo, sequi molestias, suscipit ipsam fugiat impedit alias corrupti labore temporibus, quia ratione repudiandae aliquam. Voluptas vel nihil exercitationem, odio distinctio dolores.</p>

                <button>Enable Multi Selection</button>

                {
                    data && data.length > 0 ?
                        data.map((item, idx) => (
                            <div className="accordian" key={idx}>
                                <h3 className="title" onClick={() => handleSingleSelection(item.id)}>
                                    {item.question} <span>+</span>
                                </h3>
                                
                                    {
                                        selected === item.id ? <div className='body'> {item.answer}</div> : null
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