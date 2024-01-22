import React,{ useState} from 'react'

import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import images from '../../constants/images'
import './Navbar.css'

const Navbar = () => {
  const [toggleMenu,SetToggleMenu] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app__logo" />
      </div>
      <ul className='app__navbar-links' >
        <li className='p__opensans'><a href='#home'>Home</a></li>
        <li className='p__opensans'><a href='#about'>About</a></li>
        <li className='p__opensans'><a href='#Menu'>Menu</a></li>
        <li className='p__opensans'><a href='#awards'>Awards</a></li>
        <li className='p__opensans'><a href='#contact'>Contact</a></li>
      </ul>
      <div className='app__navbar-login'>
        <a href='#login' className='p__opensans'> Log In / Registration </a>
        <div />
        <a href='/' className='p__opensans' >Book Table</a>
      </div>
      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu color="#fff" font-size={27} onClick={()  => SetToggleMenu(true)} />
        {toggleMenu && (

          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
         
          <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => SetToggleMenu(false)} />
         
          <ul className='app__navbar-smallscreen_links'>
          <li ><a href='#home' onClick={() => SetToggleMenu(false)}>Home</a></li>
          <li ><a href='#about' onClick={() => SetToggleMenu(false)}>About</a></li>
          <li ><a href='#menu' onClick={() => SetToggleMenu(false)}>Menu</a></li>
          <li ><a href='#awards' onClick={() => SetToggleMenu(false)}>Awards</a></li>
          <li ><a href='#contact' onClick={() => SetToggleMenu(false)}>Contact</a></li>
          
          </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar