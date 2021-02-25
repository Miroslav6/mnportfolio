import React from 'react';
// import Data from '../data/web-settings.json';
import Logo from '../Files/Images/logo.svg';
import './Header.css';
// import { headerlogo } from "./data";

function Header() {
  return (
    <div className="header">
      <div className="container">
      <div className="row">
        <div className="col-3 col-md-2">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="col-9 col-md-3 offset-md-7 text-right">
          <div className="hd-mail">
            <a href="mailto:miroslav.nedev1@gmail.com" className="hd-mail-link">miroslav.nedev1@gmail.com</a>
          </div>
          <a href="tel:+359883378679" className="hd-phone">+359 883 378 679</a>
        </div>
      </div>
      
      
      </div> 
    </div>
  )
}

export default Header;