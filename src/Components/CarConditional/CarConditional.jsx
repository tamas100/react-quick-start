import React from 'react';
import CarProfile from '../CarProfile/CarProfile';


export default function CarConditional({myCar}) {
  return (
    <>
      {
        myCar === 'Honda' ? <CarProfile/> : 'Kia? Bad decision!'
      }
    </>
  );
}
