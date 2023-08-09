import React from 'react';

const car = [{
    manufacturer: 'Honda',
    type: 'Civic',
    fuel: 'petrol',
    regNumber: 'MTD-562'
  },
  {
    manufacturer: 'Kia',
    type: 'Ceed',
    fuel: 'petrol',
    regNumber: 'AAFE-555'
  },
  {
    manufacturer: 'Toyota',
    type: 'Corolla',
    fuel: 'hybrid',
    regNumber: 'ABAC-256'
  }
  
];

export default function CarProfile() {
    const listItems = car.map(car =>
        <li key={car.regNumber}>
            {car.manufacturer}
        </li>
        );
    return (
        <>
            <h2>{car[0].manufacturer}</h2>
            <h3>{car[0].type}</h3>
            <p>
                {car[0].fuel}
            </p>
            <ul>{listItems}</ul>
        </>
    );
}
