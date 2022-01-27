import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


import About from '../../components/about/About'
import Content from '../../components/content/Content'
import Footer from '../../components/footer/Footer'
import Hero from '../../components/Hero/Hero'
import Mentorship from '../../components/mentorship/Mentorship'
import Navbar from '../../components/navbar/Navbar'





const HomePage = () => {
    return (
        <Router>
        <div>
          
        
          
          <Navbar />
            <Hero />
            <About />
            <Content />
            <Mentorship/>
            <Footer />
        </div>
         </Router>
    )
}

export default HomePage
