import React, { useEffect, useState } from 'react'
import BackButton from "./BackButton"
export default function Title({title}){
    const [animation, setAnimation] = useState(true);
    useEffect(() => {
        setAnimation(true);
    })

    return (
        <div className = "project-page-header">
            <BackButton/>
            {/* <div className = {"project-page-title"}> */}
            <div className = "project-page-title animate__animated animate__bounceInRight">
            <p>
                {title}
            </p>
            </div>
        </div>
    )
}