import { useState } from 'react'
import './App.css';
import Location from './Location';
import headermobile from "./assets/images/rick-and-morty-react-bootcamp.avif";
import mortySearch from './assets/images/morty-react.avif';
import portalSearch from './assets/images/rick-morty-portal.avif'


function App() {

  return (
    <div className="App">
      {/* <Header /> */}
      <Location headercell={headermobile} mortySearch={mortySearch} portalSearch={portalSearch}/>
    </div>
  )
}

export default App
