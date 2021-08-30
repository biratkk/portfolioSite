import React from 'react'
import Title from './ReusableComponents/Title'
import {Content} from './ReusableComponents/Content'

export default function ReactPortfolio(){
    return (
        <div className = "project-page">
            <Title title = "React Portfolio"/>
            <Content/>
        </div>
    )
}