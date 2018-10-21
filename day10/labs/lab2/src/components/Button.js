import React from 'react';

const Button = (props) => (
  <div>
    <button onClick={() => props.incrementBy(2)}>increment</button>
    <br/>
    <button onClick={() => props.decrementBy(2)}>decrement</button>
  </div>
);

export default Button;
