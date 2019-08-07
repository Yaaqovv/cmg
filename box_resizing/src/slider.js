import React from 'react';


const Slider = (props) => {

  return (

    <input
        type="range"
        value={props.value}
        onChange={props.func}
        min="1"
        max="500"
    />

  );

}

export default Slider;