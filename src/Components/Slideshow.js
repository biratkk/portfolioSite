import React from 'react'

export class SlideShowPosts extends React.Component{
    constructor(){
        super();
        this.state = {
            page:1
        }
    }
    render(){
        return (
                <div className = "portfolio-slide">
                    {/* <div class = "portfolio-slide-image">
                    <img alt = "Image not found" src = {this.props.imgSrc} />
                    </div>                 */}
                    <div class = "portfolio-slide-details">
                        <h3>
                            {this.props.heading}
                        </h3>
                        <p>
                            {this.props.paragraph}
                        </p>
                    </div>
                </div>
        );
    }
}

export class AutoSlideShowImage extends React.Component{
    constructor(){
        super();
        this.state = {
            index:0
        }
    }
    componentDidMount(){
        setTimeout(() => {          
            this.setState({
                index: this.state.index === this.props.photoUrls.length - 1 ? 0:this.state.index+1
            })
        },3000);
    }
    componentDidUpdate(){
        setTimeout(() => {          
            this.setState({
                index: this.state.index === this.props.photoUrls.length - 1 ? 0:this.state.index+1
            })
        },3000);
    }
    render(){
        return (
            <div class = "slideshow">
                    <img className = "slide" 
                    src = {this.props.photoUrls[this.state.index]} 
                    alt = "Failed to load image(s)"
                    />
            </div>
        );
    }
}