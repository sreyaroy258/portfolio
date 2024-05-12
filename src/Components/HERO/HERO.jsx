import React from 'react';
import './HERO.css';
import profile_img from '../../assets/profile_img.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt=""  className='hero-img'/>
        
        <h1><span>I Am Sreya Roy</span> ,Full Stack Developer based in India </h1>
       <p>I am a full stack developer from Paschim Medinipur , West Bengal , India.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' href='#contact' offset={50}> Connect With Me </AnchorLink></div>
            <div className="hero-resume">My Resume</div>
        </div>
    </div>
  )
}

export default hero