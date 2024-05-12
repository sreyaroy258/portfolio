import React, { useRef, useState } from 'react'
import './Navbar.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'



const Navbar = () => {

 const [menu,setMenu] = useState("home");
 const menuRef = useRef();

 const openMenu = () =>{
  menuRef.current.style.right ="0";
 }
const closeMenu = () =>{
  menuRef.current.style.right="-350px";
}


  return (

    <div className='navbar'>
        <img src={theme_pattern} alt="" className='nav-logo'/>
         <img src={menu_open} onClick={openMenu} alt=""  className='nav-mob-open'/>
         
           <ul className='nav-menu' ref={menuRef}>
            <img src={menu_close} onClick={closeMenu}  alt=""  className='nav-mob-close'/>
          <li> <AnchorLink className='anchor-link' href='#home'><p onClick={()=>setMenu("home")} >Home</p></AnchorLink>{menu==="home"? <img src={underline} alt=' '/>:<></>}</li>
          <li><AnchorLink className='anchor-link' href='#about' offset={50}><p  onClick={()=>setMenu("about")}>About Me </p></AnchorLink>{menu==="about"? <img src={underline} alt=''/>:<></>}</li>
          <li><AnchorLink className='anchor-link' href='#work' offset={50}><p onClick={()=>setMenu("work")}>Portfolio</p></AnchorLink>{menu==="work"? <img src={underline} alt=''/>:<></>}</li>
          <li><AnchorLink className='anchor-link' href='#contact' offset={50}><p onClick={()=>setMenu("contact")}>contact</p></AnchorLink>{menu==="contact"? <img src={underline} alt=''/>:<></>}</li>
          </ul>

        


        <div className="nav-connect"><AnchorLink className='anchor-link' href='#contact' offset={50}>Connect With Me</AnchorLink>
            
        </div>
    </div>
  )
}

export default Navbar