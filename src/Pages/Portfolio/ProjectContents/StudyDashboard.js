import React from 'react'
import Title from './ReusableComponents/Title'
import Video from './Resources/Videos/StudyDashboard.mkv'
import {ContentWithVideo} from './ReusableComponents/Content'

export default function StudyDashboard(){
    let content = 
    `
    Coming Soon!
    `
    return (
        <div className = "project-page">
            <Title title = "Study Dashboard"/>
            <ContentWithVideo content = {content} video = {Video}/>
        </div>
    )
}