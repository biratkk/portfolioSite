import React, { useState } from 'react'

/**
 * Content React Object
 * @param {String} content should be formatted so that a double new line is a paragraph  
 */
export function Content({content}){
    return (
        <div className = "project-page-content">
            <div className = "project-content-container">
                {formatContent(content)}
            </div>
        </div>
    )
}
/**
 * Content With Video React Object
 * @param {String} content should be formatted so that a double new line is a paragraph  
 */
export function ContentWithVideo({video, content}){
    const textComponent = (
        <div className = "project-content-container">
        {formatContent(content)}
        <button className = "project-proceed-button" onClick = {() => {setMain(VideoComponent)}}>
            Proceed to Video
        </button>
        </div>
    );
    
    let VideoComponent = (
        <video className = "project-video" muted = {true}src = {video} autoPlay = {true} controls = {true}/>
    );

    const [main, setMain] = useState(textComponent)
    return (
        <div className = "project-page-content">
            {main}
        </div>
    )
}
/**
 * 
 * @param {*} content string should be formatted so that a double new line is a paragraph
 * @param {*} link string where the button should direct the user
 */
export function ContentWithLink({content, link, download, downloadTitle}){
    return (
        <div className = "project-page-content">
            <div className = "project-content-container">
                {formatContent(content)}
                <button className = "project-proceed-button">
                    <a download = {download ? downloadTitle: ""} href = {link} target = "_blank">
                        Proceed To Link
                    </a>
                </button>
            </div>
        </div>
    )
}
/**
 * 
 * @param {*} content (unformatted string of content)
 * @returns content with string formatted correctly
 */
const formatContent = content => {
    return content.split("\n\n").map(val => <p className = "project-content-text">{val}</p>);
}