import React from 'react';

export default function CarList({data}) {
    const listItems = data.map(data =>
        <li key={data.regNumber}>
            {data.manufacturer === 'Honda' ? data.manufacturer : 'Nem Honda :-( '}
            {data.fuel !== 'petrol' && ` és nem is benzines, hanem ${data.fuel}.`}
        </li>
        );
  return (
    <ol>{listItems}</ol>
  );
}
