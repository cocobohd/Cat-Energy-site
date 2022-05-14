import React from "react";
import Header from "./components/Header/Header";
import Works from "./components/Works/Works";
import Step from "./components/Works/Step";
import Example from "./components/Example/Example"
import Map from "./components/Map/Map"

export default function App () {
  return (
    <div>
      <Header />
      <Works />
      <Step />
      <Example />
      <Map />
    </div>
  )
}