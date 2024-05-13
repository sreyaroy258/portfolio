import React from 'react';
import './HERO.css';
import mypic from '../../assets/mypic.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll';



const hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={mypic} alt=""  className='hero-img'/>
        
        <h1><span>I Am Sreya Roy</span> ,Full Stack Developer based in India </h1>
       <p>I am a full stack developer from Paschim Medinipur , West Bengal , India.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' href='#contact' offset={50}> Connect With Me </AnchorLink></div>
            <div className='hero-resume'  >
              <a href="https://drive.google.com/file/d/1-_gG7L_YOS5hKmXYRZKgt3kft0KFvC0I/view?usp=sharing" >My Resume</a>
                      </div>
        </div>
    </div>
  )
}

export default hero