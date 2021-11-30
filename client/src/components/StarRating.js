import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    return (
        <div>
            {/* iterate array  */}
            {[ ...Array(5)].map((star, i) => {
                const ratingValue = i + 1;

                return (
                <label>
                    <input
                        type="radio"
                        name="rating"
                        value={ratingValue}
                        onClick={() => setRating(ratingValue)}
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={() => setHover(null)}
                    />
                    <FaStar className="star" 
                  
                        color={ratingValue <- (hover || rating ? "#ffc107" : "#e4e5e9")}
                        size={100}
                    />
                </label>
                );
            })}
                <p>Your rating is {rating}.</p>
        </div>
    )
}

export default StarRating


// npm i react-star-rating-component
// npm i react-icons
