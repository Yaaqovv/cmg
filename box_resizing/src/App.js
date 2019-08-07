import React, { useState } from 'react';
import Slider from './slider';
import NumberInput from './numberInput';
import './App.css';

function App() {

  const [divWidth, setDivWidth] = useState(500);
  const [divHeight, setDivHeight] = useState(500);

  const scale = 500 / 300;

  return (

    <div id="container">

      <div style={{
                    "width": divWidth / scale,
                    "height": divHeight / scale,
                    "backgroundColor": "green",
                    "margin": "0 auto 5rem"
                  }}
      >
      </div>

      <div id="number-inputs">

        <NumberInput value={divHeight} func={e => setDivHeight(e.target.value)} />
        <NumberInput value={divWidth} func={e => setDivWidth(e.target.value)} />

      </div>

      <div id="range-inputs">

        <Slider value={divHeight} func={e => setDivHeight(e.target.value)} />
        <Slider value={divWidth} func={e => setDivWidth(e.target.value)} />

      </div>

    </div>

  );

}

export default App;
