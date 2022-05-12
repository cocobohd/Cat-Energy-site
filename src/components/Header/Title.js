import React from "react";
import catfood from './imgs/header-eat.png'

export default function Title() {
  return (
    <div className="title">
      <div className="title--pos">
        <div className="title--info">
          <h1 className="title--text">
            Functional food for cats
          </h1>
          <p className="title--subtext">
            take care of yourself? take care of the cat!
          </p>
          <button className="title--btn">
            choose a program
          </button>
        </div>
        <img className="catfood--img" src={catfood} alt='catfood' />
      </div>
    </div>
  )
}