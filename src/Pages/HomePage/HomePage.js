import React,{Component} from 'react'
import {Link} from 'react-scroll'
function OptionContainer(){
        return (
        <div id = "optionContainer" class = "optionContainer">
            <button id = "aboutPageButton" class = "optionButton">
            <Link 
                activeClass = "active"
                className="optionButton" 
                to="about-page"
                spy={true}
                smooth={true}
                duration={500}>
                    Birat Koirala
                </Link>
            </button>
            <button id = "portfolioPageButton" class = "optionButton">
                <Link 
                className="optionButton" 
                /**current class name - transition FROM */
                to="portfolio-page"
                /**destination class name - transition TO */
                spy={false}
                /**Chooses whether to focus on the link provided */
                smooth={true} 
                /*Whether the transition is instant or actually a smooth transition */
                duration={500}
                /*Time taken to animate the scroll*/
                >
                    Portfolio
                </Link>
            </button>
            
            <button id = "blogPageButton" class = "optionButton">
            <Link 
                activeClass = "active"
                className="optionButton" 
                to="blog-page"
                spy={true}
                smooth={true}
                duration={500}>
                    Blog
                </Link>
            </button>
            <button id = "contactMeButton" class = "optionButton">
            <Link 
                activeClass = "active"
                className="optionButton" 
                to="footer"
                spy={true}
                smooth={true}
                duration={500}>
                    Contact me
                </Link>
            </button>
        </div>
        );
    }


class HomePage extends Component{
    constructor(){
        super();
    }
    render(){
        return  (
            <div class = "page startPage color">
                <div class = "center startPage">
                <OptionContainer/>
                </div>
            </div>
        );
    }
}



export default HomePage