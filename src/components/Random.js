import React from 'react';

function Random(props) {
  let minNumber = props.min;
  let maxNumber = props.max;

  return Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
}

export default Random;
