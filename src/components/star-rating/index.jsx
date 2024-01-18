import React, { useState } from 'react'
import { FaRegStar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";

const StarRating = ({noOfStars = 5}) => {

    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    const handleClick = (getCurrentIndex) => {
        setRating(getCurrentIndex)
    }
    const handleMouseEnter = (getCurrentIndex) => {
        setHover(getCurrentIndex)
    }
    const handleMouseLeave = () => {
        setHover(rating)
    }

    
    return (
        <div className="container">
            <div className="star-rating">
                <h2>Star Rating</h2>
                
                {
                    [...Array(noOfStars)].map((_,idx) => {
                        idx += 1
                     return <FaStar
                     key={idx}
                     className={idx <= (hover || rating) ? 'active' : 'inactive'}
                     onClick={() => handleClick(idx)}
                     onMouseMove={() => handleMouseEnter(idx)}
                     onMouseLeave={() => handleMouseLeave()}
                     size={40}
                     />  
                    })
                }
            </div>
        </div>
    )
}

export default StarRating