import React from 'react'
import {Link} from 'react-scroll'
import TypewriterComponent from 'typewriter-effect';
import useWindowDimensions from '../../personal-lib/WindowSize';
function OptionContainer(){
        return (
        <div id = "optionContainer" class = "optionContainer center startPage">
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

    /**
     * 
     * @returns 
     */

function Disclaimer(){
    const isOnMobile = useWindowDimensions().width < 1080;
    if(isOnMobile){
        return (
            <div>
                {isOnMobile ? 
                <div class = "center disclaimer">
                <TypewriterComponent onInit = {typewriter => {
                    typewriter
                    .changeDelay(10)
                    .typeString('You are using the resolution of a mobile/tablet device. ')
                    .pauseFor(1000)
                    .typeString('Please consider opening this site in a PC for the best experience.').start();
                }}/>
                </div> : null}
            </div>        
        )
    }
    return null;
    
}


function HomePage(){
        const isOnMobile = useWindowDimensions().width < 1080;
        return  (
            <div class = "page startPage color">
                <Disclaimer/>
                <OptionContainer/>
            </div>
        );
    }



export default HomePage