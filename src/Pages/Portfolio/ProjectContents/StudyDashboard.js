import React from 'react'
import Title from './ReusableComponents/Title'
import {Content} from './ReusableComponents/Content'

export default function StudyDashboard(){
    return (
        <div className = "project-page">
            <Title title = "Study Dashboard"/>
            <Content/>
        </div>
    )
}