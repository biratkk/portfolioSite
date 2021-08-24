import React from 'react'
import About from './Pages/About'
import HomePage from './Pages/HomePage'
import Portfolio from './Pages/Portfolio'
import BlogPage from './Pages/Blog-App/Blog-App'

export default function App(){
    return(
        <div>
            <HomePage/>
            <About/>
            <Portfolio/>
            <BlogPage/>
        </div>
    )
}