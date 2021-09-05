import React from 'react'
import BackButton from './ReusableComponents/BackButton'
import Title from './ReusableComponents/Title'
import {ContentWithVideo} from './ReusableComponents/Content'
import TypingSpeedMeasurerVideo from './Videos/TypingSpeedMeasurer.mkv'

export default function TypingSpeedMeasurer(){
    let content = 
    `Welcome to a more detailed version of what I did with the Typing Speed Measurer! 
    

    Two of the main features of this application were the ability to choose the theme of the page 
    (between light and dark mode) and also the ability to choose the amount of time the user 
    wanted to spend typing.
    

    I wanted to learn something that was simple, yet allowed me to learn a lot. The very first
    thing I learned here is that it is essential to know the hows and whats of the app being
    built before you start. This project further established my understanding of HTML, CSS and 
    JavaScript as well as honing my knowledge on APIs as I used a random word generator API.


    Press the button below to see a demonstration of the application.`

    return (
        <div className = "project-page">
            <Title 
            title = "Typing Speed Measurer"/>
            <ContentWithVideo
            content = {content}
            video = {TypingSpeedMeasurerVideo}
            />
        </div>
    )
}
