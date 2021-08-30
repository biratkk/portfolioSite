import React from 'react'
import {Link} from 'react-router-dom'

export default function BackButton(){
    return (
        <Link to="/portfolioSite">
            <div className = "back-button">
                <img
                src = "https://image.flaticon.com/icons/png/512/93/93634.png"/>
            </div>
        </Link>
    )
}