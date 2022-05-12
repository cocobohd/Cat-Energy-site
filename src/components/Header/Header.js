import './header.css'
import React from "react";
import logo from '../Header/imgs/logo.svg'
import Title from './Title'


export default function Header() {
  return (
    <header className="header">
      <div className='navigation'>
        <img className="logo" src={logo} alt="logo"/>
        <nav className="nav">
          <li>General</li>
          <li>Catalog</li>
          <li>Programm</li>
        </nav>
      </div>

      <Title />
    </header>
  )
}