import React from 'react'
import Title from './ReusableComponents/Title'
import {Content} from './ReusableComponents/Content'
export default function EmployeeOS(){
    let content = 
    `

    `
    return (
        <div className = "project-page">
            <Title title = "Employee OS"/>
            <Content content = {content}/>
        </div>
    )
}