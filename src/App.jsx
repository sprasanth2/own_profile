import React from 'react'
import About from './Components/About/About'
import Contacts from './Components/Contacts/Contacts'
import Experience from './Components/Experience/Experience'
import Header from './Components/Header/Header'
import Nav from './Components/Nav/Nav'
import Services from './Components/Services/Services'
import Testimonials from './Components/Testimonials/Testimonials'
import Footer from './Components/Footer/Footer'
import Portfolio from './Components/Portfolio/Portfolio'

const App = () => {
  return (
    <>
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <Services/>
        <Portfolio/>
        <Testimonials/>
        <Contacts/>
        <Footer/>
    </>
  )
}

export default App