import React from "react";


export default function Card(props) {
  return (
    <div className="card">
      <div className="card--title">
        <img className="card--logo" src={props.img} alt='logocat'/>
        <h2 className="card--title--text">
          {props.title}
        </h2>
      </div>
      <p className="card--subtext">
        {props.subtext}
      </p>
      <button className="card--btn">{props.catalog}</button>
    </div>
  )
}