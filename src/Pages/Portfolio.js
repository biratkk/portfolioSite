import React,{Component} from 'react'
import {portfolio} from '../staticDB.json'
import SlideShowPosts from '../Components/SlideShowPosts'

class PostsContainer extends Component{
    constructor(){
        super();
    }
    render(){
        let posts = portfolio.map(value => {
            return(
                <SlideShowPosts
                heading = {value.header}
                paragraph = {value.paragraph}
                utilisedSystems = {value.utilisedSystems}
                />
            )
        })
        return (
        <div class = "portfolio-slideshow">
            {posts}
        </div>
        );
    }
}
class Portfolio extends Component{
    render(){
        return(
            <div class = "page portfolio-page color2">
                <TopProjects/>
                <PostsContainer/>
            </div>
        );
    }
}
function TopProjects(){
    return (
        <div class = 'top-projects'>
            <p>
            My Top Projects (hover for more)
            </p>
        </div>
    )
}

export default Portfolio