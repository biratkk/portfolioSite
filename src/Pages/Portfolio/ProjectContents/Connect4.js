import React from 'react'
import Title from './ReusableComponents/Title'
import {Content, ContentWithLink} from './ReusableComponents/Content'
export default function Connect4(){
    let content = 
    `
    Coming Soon!
    `
    return (
        <div className = "project-page">
            <Title title = "Connect4"/>
            <ContentWithLink
                content = {content}
                link = "https://connect4-project-ai.herokuapp.com/"
                />
        </div>
    )
}