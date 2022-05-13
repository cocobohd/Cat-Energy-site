import React from "react";


export default function Item(props) {
  return(
    <div className="item">
      <img src={props.img} alt="csc"/>
      <span className="item--background">
        {props.back}
      </span>
      <p className="item--text">
        {props.text}
      </p>
    </div>
  )
}