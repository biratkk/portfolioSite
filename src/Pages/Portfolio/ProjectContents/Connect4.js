import React from 'react'
import Title from './ReusableComponents/Title'
import {Content} from './ReusableComponents/Content'
export default function Connect4(){
    return (
        <div className = "project-page">
            <Title title = "Connect4"/>
            <Content/>
        </div>
    )
}