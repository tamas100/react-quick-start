import React from 'react';

export default function MyButton() {
  function handleClick() {
    alert('You clicked me!')
  }
  return (
    <button onClick={handleClick}>
      Click!
    </button>
  );
}
