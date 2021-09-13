import React from 'react'
import Title from './ReusableComponents/Title'
import {ContentWithVideo} from './ReusableComponents/Content'
import Video from './Resources/Videos/SudokuSolver.mkv'

export default function SudokuSolver(){
    let content = 
    `
    Coming Soon!
    `

    return (
        <div className = "project-page">
            <Title title = "Sudoku Solver"/>
            <ContentWithVideo content = {content} video = {Video}/>
        </div>
    )
}