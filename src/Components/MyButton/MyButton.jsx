import React from 'react';
import { useState } from 'react';

export default function MyButton() {
  const [count, setCount] = useState(0);  

  function handleClick() {
    alert('You clicked me!')
    setCount(count +1);
  }

  return (
    <>
      <button onClick={handleClick}>
        Click!
        Clicked {count} times
      </button>
      <p>
        {count % 2 === 0 & count > 0 ? 'Even number' : 'Odd number' }
      </p>
    </>
  );
}
