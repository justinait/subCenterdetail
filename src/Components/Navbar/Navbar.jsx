import React from 'react'
import './Navbar.css'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

function Navbar() {
  return (
    <div className='navbarContainer'>
        <img src="/isologo.png" alt="" className='logo' />
        <MenuRoundedIcon className='burgerMenu'/>
    </div>
  )
}

export default Navbar