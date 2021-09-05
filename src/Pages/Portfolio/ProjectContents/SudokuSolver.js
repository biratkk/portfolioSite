import React from 'react'
import Title from './ReusableComponents/Title'
import {Content} from './ReusableComponents/Content'

export default function SudokuSolver(){
    let content = 
    `

    `

    return (
        <div className = "project-page">
            <Title title = "Sudoku Solver"/>
            <Content content = {content}/>
        </div>
    )
}