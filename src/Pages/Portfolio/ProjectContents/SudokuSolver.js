import React from 'react'
import Title from './ReusableComponents/Title'
import {Content} from './ReusableComponents/Content'

export default function SudokuSolver(){
    return (
        <div className = "project-page">
            <Title title = "Sudoku Solver"/>
            <Content/>
        </div>
    )
}