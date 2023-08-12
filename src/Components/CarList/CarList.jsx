import React from 'react';

export default function CarList({data}) {
    const listItems = data.map(data =>
        <li key={data.regNumber}>
            {data.manufacturer === 'Honda' ? data.manufacturer : 'Nem Honda :-( '}
            {data.fuel !== 'petrol' && <>és nem is benzines, hanem  <i>{data.fuel}.</i></>}
        </li>
        );
  return (
    <ol>{listItems}</ol>
  );
}
