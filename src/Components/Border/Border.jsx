import React from 'react';

export default function Border({children}) {
  return (
    <div style={{border: '5px solid red', padding: '20px'}}>
        {children}
    </div>
  );
}

