import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip';

export default function SlideShowPosts ({ heading, paragraph, utilisedSystems}) {

    const [page, setPage] = useState(1);
    const [isFlipped, setIsFlipped] = useState(false);

    return (
            <div className = "portfolio-slide"
            onMouseEnter = {() => setIsFlipped(true)}
            onMouseLeave = {() => setIsFlipped(false)}>
                <ReactCardFlip 
                isFlipped = {isFlipped}
                flipDirection = "horizontal"
                flipSpeedBackToFront = {0.2}
                flipSpeedFrontToBack = {0.2}>
                <div className = "portfolio-slide-details">
                    <h3>
                        {heading}
                    </h3>
                    <p>
                        {paragraph}
                    </p>
                </div>
                <div className = "portfolio-slide-details-back">
                    <h3>
                        Systems Utilised:
                    </h3>
                    <p>
                        {getBulletDiv(utilisedSystems)}
                    </p>
                </div>
                </ReactCardFlip>            
            </div>
);
}

const getBulletDiv = arr => {
    return (
        <ul>
           {arr.map(val => <li>{val}</li>)} 
        </ul>
    )
}