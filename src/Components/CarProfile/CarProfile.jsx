import React from 'react';

const car = {
    manufacturer: 'Honda',
    type: 'Civic',
    fuel: 'petrol'
  }

export default function CarProfile() {
  return (
    <>
      <h2>{car.manufacturer}</h2>
      <h3>{car.type}</h3>
      <p>
        {car.fuel}
      </p>
    </>
  );
}
