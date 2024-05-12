import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import myproject_one from '../../assets/myproject_one.svg'
import myproject_three from '../../assets/myproject_three.svg'
import myproject_two from '../../assets/myproject_two.svg'
import myproject_four from '../../assets/myproject_four.svg'

const MyWork = () => {
  return (
    <div  id='work' className='mywork'>
       
       <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="" />

       </div>

          <div className="mywork-container">

            <a href= " https://crypto-website-e36a.vercel.app/ ">
                <img src={myproject_one}  /> 
            </a>
           
              <a href=' https://calculator-ten-theta-94.vercel.app/ '  >
              <img src={myproject_three} alt="" />
              </a>
           
               <a href='https://spotify-clone-phi-lemon.vercel.app/ '>
                 
                 <img src={myproject_two} />

               </a>
              

              <a href='https://joke-generator-ebon.vercel.app/'  >
              
              <img src={myproject_four} alt="" />

              </a>
           
                
          </div>


    </div>
  )
}

export default MyWork