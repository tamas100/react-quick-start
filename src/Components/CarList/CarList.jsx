import React from 'react';

export default function CarList({data}) {
    const listItems = data.map(data =>
        <li key={data.regNumber}>
            {data.manufacturer === 'Honda' ? data.manufacturer : 'Nem Honda :-('}
        </li>
        );
  return (
    <ul>{listItems}</ul>
  );
}
