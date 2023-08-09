import React from 'react';

export default function SyncButtons({count, onClick}) {
  return (
    <button onClick={onClick}>
        Clicked {count} times      
    </button>
  );
}
