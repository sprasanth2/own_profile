import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/first.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
        <div className="container header_container">
            <h5>Hello i'm</h5>
            <h1>Prasanth Kumar</h1>
            <h5 className='text-light'> Web Developer</h5>
            <CTA/>
            <HeaderSocials/>

            <div className="me">
                <img src={ME} alt="" className='image-first'/>
            </div>

            <a href="#contact" className='scroll_down'> Scroll Down</a>
        </div>
    
    </header>
    )
}

export default Header