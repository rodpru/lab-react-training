import React from 'react';

function IdCard(props) {
  return (
    <div className="container-id">
      <img src={props.picture}></img>
      <p>First Name: {props.firstName}</p>
      <p>Last Name: {props.lastName}</p>
      <p>Gender: {props.gender}</p>
      <p>Height: {props.height}</p>
      <p>Birth: {props.birth.toDateString()}</p>
    </div>
  );
}
export default IdCard;
