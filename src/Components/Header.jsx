import React from 'react'
import AccountIcon from './AccountIcon'
import KeyboardIcon from '@mui/icons-material/Keyboard';
import brandLogo from '../assets/brand-logo2.png'

const Header = () => {
  return (
    <div className="header">
   <div className="logo">
    <img alt='logo' src={ brandLogo } width='70' height='70'/>
    <p>Typo</p>
        <KeyboardIcon />
        </div>
        <div className="user-profile">
            <AccountIcon/>
        </div>
    </div>
  )
}

export default Header