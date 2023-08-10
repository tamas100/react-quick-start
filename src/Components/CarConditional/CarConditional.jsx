import React from 'react';
import CarProfile from '../CarProfile/CarProfile';


export default function CarConditional({myCar}) {
  return (
    <>
      {
        myCar === 'Honda' ? <CarProfile/> :
         <p style={
          {color: 'lightgreen', fontWeight: 'bold'}
        }
        >Kia? Bad decision!</p>
      }
    </>
  );
}
