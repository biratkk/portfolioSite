import React, { useEffect, useState } from 'react'
import About from './Pages/About/About'
import HomePage from './Pages/HomePage/HomePage'
import Portfolio from './Pages/Portfolio/Portfolio'
import BlogPage from './Pages/Blog-App/Blog-App'
import Footer from './Pages/Footer/Footer'
export default function App(){

    return(
        <div>
            <HomePage/>
            <About/>
            <Portfolio/>
            <BlogPage/>
            <Footer/>
        </div>
    )
}