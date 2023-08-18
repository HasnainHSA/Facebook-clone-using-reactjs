import React from 'react'
import { FaFacebook,FaSistrix, FaHome, FaFontAwesomeFlag, FaVideo, FaGamepad, FaUsers, FaPlus, FaFacebookMessenger,FaBell,FaCaretDown } from "react-icons/fa";


const Navbar = () => {
  return (
    <div className='navbar'>
        
        <div className="navbar_first">
         <div className="navbar_first_logo">
         <FaFacebook className='navbar_logo'/>
         </div>
         <div className="navbar_first_search">
            <input type="text" className='navbar_first_searchbar' placeholder='Search Facebook'/>
            <FaSistrix className='navbar_searchIcon'/>
         </div>
        </div>
        
        <div className="navbar_middle">
            <span className='middleIcon'>
                <FaHome className='navbar_middle_icon' />
            </span>
            <span className='middleIcon'>
                <FaFontAwesomeFlag className='navbar_middle_icon' />
                <span className='navbar_notify'>10</span>
            </span>
            <span className='middleIcon'>
                <FaVideo className='navbar_middle_icon' />
                <span className='navbar_notify'>2</span>
            </span>
            <span className='middleIcon'>
                <FaUsers className='navbar_middle_icon' />
                <span className='navbar_notify'>5</span>
            </span>
            <span className='middleIcon'>
                <FaGamepad className='navbar_middle_icon' />
            </span>
        </div>
        <div className="navbar_last">
            <span className='navbar_last-section'><FaPlus/></span>

            <span className='navbar_last-section'><FaFacebookMessenger/></span>

            <span className='navbar_last-section'><FaBell/></span>

            <span className='navbar_last-section'><FaCaretDown/></span>
        </div>
    </div>
  )
}

export default Navbar