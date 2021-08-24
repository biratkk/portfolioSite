import React from 'react'


export default class SlideShowImage extends React.Component{
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