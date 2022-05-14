import './example.css'
import fatcat from "./example--img/fatcat.png"
import React from "react";

export default function Example() {
  return(
    <div className="example">
      <div className="example--pos">
        <div className='example--text'>
          <h1 className='example--title'>
            Live Example
          </h1>
          <p className='example--subtext'>
            Boris lost 5 kg in 2 months by simply replacing his
            regular food on Cat Energy Slim. Excellent result
            without exhausting workouts! However, he did not change his
            habits and still sleeps 16 hours a day.
          </p>
          <div className='weight--time'>
            <div className='example--weigth'>
              5 KGs <span className='example--weigth--subtext'>weight loss</span>
            </div>
            <div className='example--time'>
              60 Days <span className='example--weigth--subtext'>time spent</span>
            </div>
          </div>
          <div className='example--costs'>
            Food costs: <span className='example--price'> $400</span>
          </div>
        </div>
        <div className='example--img'>
          <img src={fatcat} alt='fatcat'/>
          <div className='example--range'>
            <span>
              It was
            </span>
            <input className='example--input' type="range"/>
            <span>
              Became
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}