import React from "react";
import Item from './Item'
import itemlogoleaf from './works--imgs/leaf.png'
import itemlogoclock from './works--imgs/clock.png'
import itemlogoknife from './works--imgs/knife.png'
import itemlogowater from './works--imgs/water.png'

export default function Step() {
  return(
    <div className="step">
      <h1 className="step--title">
        How it's work?
      </h1>
      <div className="steps--div">
        <Item 
          img={itemlogoleaf}
          back="1"
          text="Functional food contains only useful nutrients."
        />
        <Item 
          img={itemlogowater}
          back="2"
          text="Available in powder form
          which needs to be filled
          boiling water and you're done."
        />
        <Item 
          img={itemlogoknife}
          back="3"
          text="Replace one or two
          ordinary food for our
          functional food."
        />
        <Item 
          img={itemlogoclock}
          back="4"
          text="Enjoy in a month
          change for the better
          your pet!"
        />
      </div>
    </div>
  )
}