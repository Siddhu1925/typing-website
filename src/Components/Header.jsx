import React from 'react'
import AccountIcon from './AccountIcon'
import KeyboardIcon from '@mui/icons-material/Keyboard';
import brandLogo from '../assets/brand-logo2.png';
import CompareButton from './CompareButton';

const Header = () => {
  return (
    <div className="header">
   <div className="logo">
    <img alt='logo1' src={ brandLogo } width='43' height='43' background-radius='20px'/>
    <p>TYPING-TEST</p>
        <KeyboardIcon />
        <div>
              <CompareButton/>
            </div>
        </div>
        <div className="user-logo">
            <AccountIcon/>
        </div>
    </div>
  )
}

export default Header