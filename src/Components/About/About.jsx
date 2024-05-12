import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/profile_img.svg'

const About = () => {
  return (
    <div id='about'   className='about'>
     
       <div className="about-title">
         <h1>About Me</h1>
          <img src={theme_pattern} alt="" />
       </div>
           
           <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt=""  className='about-img'/>
            </div>
             
             <div className="about-right">
                <div className="about-para">
                    <p> I am a fresher full stack web developer (M.E.R.N).I have learnt from Vidyastu, an excellent organization.</p>
                    <p>My passion for web development is not only effect in my work but also in the enthusiasm and dedication I bring to each project. </p>
                </div>
                <div className="about-skills">
                    <div className="skills"> <p>HTML & CSS</p> <hr style={{width:"80%"}}/>   </div>
                    <div className="skills"> <p>JAVASCRIPT</p> <hr style={{width:"50%"}}/>   </div>
                    <div className="skills"> <p>EXPRESS JS & NODE JS</p> <hr style={{width:"60%"}}/>   </div>
                    <div className="skills"> <p>MONGODB & GIT</p> <hr style={{width:"30%"}}/>   </div>
                </div>
             </div>

           </div>
    </div>
  )
}

export default About