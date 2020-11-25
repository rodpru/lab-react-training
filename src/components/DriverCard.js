import React from 'react';

const DriverCard = (props) => {
  return (
    <div>
      <img src={props.img} style={{ width: '20%' }} />
      <p>{props.name}</p>
      <p>{props.rating}</p>
      <p>{props.car.model}</p>
      <p>{props.car.licensePlate}</p>
    </div>
  );
};

export default DriverCard;
