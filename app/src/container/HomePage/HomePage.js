import React from 'react'
import Content from '../../components/content/Content'
import Footer from '../../components/footer/Footer'
import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/navbar/Navbar'




const HomePage = () => {
    return (
        <div>
            <Navbar/>
            <Hero />
            <Content />
            <Footer />
        </div>
    )
}

export default HomePage
