import React, { useState } from 'react'
export function Content(){
    return (
        <div className = "project-page-content">

        </div>
    )
}

export function ContentWithVideo({video, content}){
    
    const textComponent = (
        <div className = "project-content-container">
        {content}
        <button className = "project-proceed-button" onClick = {() => {setMain(VideoComponent)}}>
            Proceed
        </button>
        </div>
        )   
    let VideoComponent = <video className = "project-content-video" src = {video} autoPlay = {true} controls = {true}/>;
    const [main, setMain] = useState(textComponent)
    console.log(main);
    return (
        <div className = "project-page-content">
            {main}
        </div>
    )
}
