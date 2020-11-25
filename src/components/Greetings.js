// props = lang
// props = children
// depending on lang output 4 diferent greetings EN ES FR DE
import React from 'react';

function Greetings(props) {
  let message = 'Ola';
  if (props.lang === 'en') {
    message = 'Hello';
  } else if (props.lang === 'fr') {
    message = 'Bonjour';
  } else if (props.lang === 'es') {
    message = 'Hola';
  } else if (props.lang === 'de') {
    message = 'Hallo';
  }
  return (
    <div>
      {message} {props.children}
    </div>
  );
}

export default Greetings;
