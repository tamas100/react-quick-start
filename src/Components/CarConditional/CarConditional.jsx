import React from 'react';
import CarProfile from '../CarProfile/CarProfile';

const styles = {  
  headOne: {
    color: '#FFD066'
  }
};

export default function CarConditional({myCar}) {
  return (
    <>
      <h1 style={styles.headOne}>Honda, vagy Kia?</h1>
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
