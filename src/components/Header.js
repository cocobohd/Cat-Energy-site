import React from "react";
import logo from '../imgs/logo.svg'

export default function Header() {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="logo"/>
      <nav className="nav">
        <li>General</li>
        <li>Catalog</li>
        <li>Programm</li>
      </nav>
    </header>
  )
}