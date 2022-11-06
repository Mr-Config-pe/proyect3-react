import { useState } from 'react'
import './App.css';
import Location from './Location';
import headermobile from "./assets/images/rick-and-morty-react-bootcamp.avif";

function App() {

  return (
    <div className="App">
      {/* <Header /> */}
      <Location headercell={headermobile}/>
    </div>
  )
}

export default App
