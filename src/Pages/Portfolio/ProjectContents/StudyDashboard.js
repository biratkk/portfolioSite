import React from 'react'
import Title from './ReusableComponents/Title'
import {Content} from './ReusableComponents/Content'

export default function StudyDashboard(){
    let content = 
    `

    `
    return (
        <div className = "project-page">
            <Title title = "Study Dashboard"/>
            <Content content = {content}/>
        </div>
    )
}