import { useState } from "react";

import './App.css';

function App() {
  const [ selColor, setSelColor ] = useState({ hex: null, name: null });
  const [ focColor, setFocColor ] = useState(null);

  const colors = []

  function handleButtonClick() {
    for(let i = 0; i < 3; i++) {
      let randomColor = Math.floor(Math.random()*16777215).toString(16);
      
      colors.push("#" + randomColor);
    }
  }

  function handleClick(color) {
    console.log(color);
  }

  return (
    <>
      <h1>Color Picker</h1>

      <button onClick={handleClick}>Pick 3 Random Colors</button>

      <div className="color-picker-list">
        { colors.map(function(color, index) {
          return (
            <div
              key={index}
              className="color-picker-list-item"
              style={{backgroundColor: `${color.hex}`}}
              onClick={() => handleClick(color)}
            >
              
            </div>
          );
        }) }
      </div>
    </>
  )
}

export default App
