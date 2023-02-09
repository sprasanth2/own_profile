import React from 'react'
import './About.css'
import ME from '../../assets/second.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'>
      <h5>Get TO Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
              <img src={ME} alt="About Image" />
          </div>

        </div>

        <div className='about__content'>
            <div className="about__cards">
              <article className='about__card'>
                <FaAward className='about_icon'/>
                <h5>Experience </h5>
                <small>7 Months Working</small>
              </article>

              <article className='about__card'>
                <FiUsers className='about_icon'/>
                <h5>Clients </h5>
                <small>3 Members</small>
              </article>

              <article className='about__card'>
                <VscFolderLibrary className='about_icon'/>
                <h5>Projects</h5>
                <small>1 Project Completed</small>
              </article>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptatem iusto labore aperiam, nisi sed, aut harum eaque soluta expedita, omnis non tempora aliquam cumque? Corrupti sapiente dolorum animi dignissimos?</p>

            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
      </section>
  )
}

export default About