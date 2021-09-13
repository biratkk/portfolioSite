import React,{Component} from 'react'
import {portfolio} from '../../staticDB.json'
import SlideShowPosts from './SlideShowPosts'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Connect4 from "./ProjectContents/Connect4"
import EmployeeOS from "./ProjectContents/InventoryManagement"
import ReactPortfolio from "./ProjectContents/ReactPortfolio"
import StudyDashboard from "./ProjectContents/StudyDashboard"
import TypingSpeedMeasurer from "./ProjectContents/TypingSpeedMeasurer"
import SudokuSolver from "./ProjectContents/SudokuSolver"

function Portfolio({setPath}){
        let posts = portfolio.map(value => {
            return(
                <SlideShowPosts
                heading = {value.header}
                paragraph = {value.paragraph}
                utilisedSystems = {value.utilisedSystems}
                route = {value.route}
                />
            )
        })
        return (
        <Router>  
            <Switch>
            <div class = "page portfolio-page color2">
                <Route path = "/portfolioSite">
                    
                    <TopProjects/>
                        <div class = "portfolio-slideshow">
                            {posts}
                        </div>
                </Route>
                <Route path = "/typingSpeedMeasurer">
                    <TypingSpeedMeasurer />
                </Route>
                <Route path = "/sudokuSolver">
                    <SudokuSolver />
                </Route>
                <Route path = "/reactPortfolio">
                    <ReactPortfolio />
                </Route>
                <Route path = "/studyDashboard">
                    <StudyDashboard />
                </Route>
                <Route path = "/inventoryManagement">
                    <EmployeeOS />
                </Route>
                <Route path = "/connect4">
                    <Connect4 />
                </Route>
            </div>
            </Switch>
        </Router>
        );
    }
function TopProjects(){
    return (
        <div class = 'top-projects'>
            <p>
            My Top Projects (hover & click for more)
            </p>
        </div>
    )
}

export default Portfolio