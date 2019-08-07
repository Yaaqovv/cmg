import React  from 'react';

const NumberInput = (props) => {

  return (

    <input
        type="number"
        value={props.value}
        onChange={props.func}
        min="1"
        max="500"
    />

  );

}

export default NumberInput;