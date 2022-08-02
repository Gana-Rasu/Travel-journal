import React from "react";
import './App.css';
import data from "./data";
import Card from "./Card";

console.log(data)
function App() {
const card = data.map((element)=>{
 return( <Card 
  element={element}
  />
 );
})


  return (
    <>
    <div className="header">

    <nav className="navbar">
  <div className="header-content">
    <img className="world-image" src="https://cdn-icons-png.flaticon.com/512/1243/1243420.png" alt="" ></img>
    <span className="navbar-text">
      my travel journal.
    </span>
  </div>
</nav>

    </div>

    {card}
    </>
  );
}

export default App;
