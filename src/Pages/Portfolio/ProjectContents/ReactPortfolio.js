import React from 'react'
import Title from './ReusableComponents/Title'
import {Content} from './ReusableComponents/Content'

export default function ReactPortfolio(){

    let content = 
    `The current website that you are on currently is also built by React. 😆


    This wasn't my first React Project so I was quite familiar with the basics. However,
    there were problems that I encountered and am still encountering with this website. 
    Since I only upload the production build after I've finished fixing all the bugs it is 
    virtually impossible to notice the bugs. Similar to big companies, I also wanted perfection.


    If I couldn't have perfection, I want the closest thing to it.


    I've learnt a lot of things in this process and one thing that cannot be ruled out is UI Design.
    I like to think I have done a pretty impressive job for someone who is not very experienced with
    design and I think my creativity is also prevalent with this website.
    `
    return (
        <div className = "project-page">
            <Title title = "React Portfolio"/>
            <Content content = {content}/>
        </div>
    )
}