import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import IosPlay from '../../node_modules/react-ionicons/lib/IosPlay';
import Kirpi_Sonic_Logo from '../assets/images/Kirpi_Sonic_Logo.png';
import bg_header from '../assets/images/bg-header.jpg';
import default_avatar from '../assets/images/default_avatar.png'; 

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__wrapper">
          <nav className="menu">
            <Link to="/">
              <h1 className="logo">
                <img src={Kirpi_Sonic_Logo} alt="" />
              </h1>
            </Link>
            <ul className="menu__list">
              <li className="menu__list-item">
                <Link to="">Home</Link>
              </li>
              <li className="menu__list-item">
                <Link to="">Movie</Link>
              </li>
              <li className="menu__list-item">
                <Link to="">Tv Show</Link>
              </li>
              <li className="menu__list-item">
                <Link to="">More</Link>
              </li>
              <Link to="">
                <img className="avatar" src={default_avatar} alt=""></img>
              </Link>
            </ul>
          </nav>

        </div>
        <div className="header__image">
          <img className="img"
            src={bg_header}
            alt="" />
        </div>
        <div className="header-content">
          <h3 className="header-content__title"><Link to="">Ian Lightfoot</Link></h3>
          <p className="header-content__desc">The near future, a time when both hope and hardships drive humanity to look to the stars and beyond. While a mysterious phenomenon menaces to destroy life on planet Earth.</p>
          <button className="btn header-content__btn"><IosPlay color="#fff" />watch</button>
        </div>
      </header >
    );
  }
}

export default Header;