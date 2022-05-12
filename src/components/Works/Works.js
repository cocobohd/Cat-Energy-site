import './works.css'
import React from "react";
import Card from "./Card";
import catlogslim from './works--imgs/slimcat.png'
import catlogmusc from './works--imgs/musculuscat.png'

export default function Works() {
  return (
    <div className="works">
      <div className='works--pos'>
        <Card 
          img={catlogslim}
          title='weight loss'
          subtext="Your cat fattest then dog and can't climb the tree? Need diet! Cat Energy Slim can help your pet drop down excess weight."
          catalog="Catalog SLIM 🠖"
        />
        <Card 
          img={catlogmusc}
          title='weight gain'
          subtext="Earn credibility among yard cats and even dogs? The Cat Energy Pro series will help your cat build necessary muscles!"
          catalog="Catalog PRO 🠖"
        />
      </div>
    </div>
  )
}