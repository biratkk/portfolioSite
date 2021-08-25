import React,{Component} from 'react'
import SlideShowImage from '../Components/SlideShowImage'
import {about} from '../staticDB.json'
import image1 from '../Images/Slideshow_Images/Image1.jpg'
import image2 from '../Images/Slideshow_Images/Image2.jpg'
import image3 from '../Images/Slideshow_Images/Image3.jpg'
import image4 from '../Images/Slideshow_Images/Image4.jpg'
class About extends Component{
    constructor(){ 
        super();
        this.images = [
            image1,
            image2,
            image3,
            image4
        ];
    }
    render(){
        return(
            <div class = "page about-page color1" >
                <div class = "slideShowSide">
                    <SlideShowImage photoUrls = {this.images}/>
                </div>
                <div class = "infoPage">
                    <Information/>
                </div>
            </div>
        );
    }
}

function Information(){
    console.log(about);
    let posts = about.map(value => 
        {
        return (<div>
            <h1>
                {value.header}
            </h1>
            <p>
                {value.paragraph}
            </p>
        </div>)
        });
    return (
        <div className = "info">
            {posts}
        </div>
    );
}

export default About