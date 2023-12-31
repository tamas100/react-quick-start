import React from 'react';
import './CarProfile.css';
import FormatDate from '../FormatDate/FormatDate';
import CarList from '../CarList/CarList';

const car = [{
    manufacturer: 'Honda',
    type: 'Civic',
    fuel: 'petrol',
    regNumber: 'MTD-562',
    price: 16000000,
    picture: 'https://www.driva.com.au/static/9426e1fb4f6ff994c46b4409b8bc6156/01c9c/8c484284-920b-4953-9d6e-f03722109839_2023-Honda-Civic-Type-R-front.webp'
  },
  {
    manufacturer: 'Kia',
    type: 'Ceed',
    fuel: 'petrol',
    regNumber: 'AAFE-555',
    price: 11000000,
    picture: 'https://www.diariomotor.com/imagenes/2012/10/kia-ceed-ficha-dm-p-61df223f386b4.jpg'
  },
  {
    manufacturer: 'Toyota',
    type: 'Corolla',
    fuel: 'hybrid',
    regNumber: 'ABAC-256',
    price: 14000000,
    picture: 'https://di-enrollment-api.s3.amazonaws.com/toyota/models/2023/corolla-hybrid/Trims/2023+Hybrid+LE.png'
  }
  
];

export default function CarProfile() {
    const listItems = car.map(car =>
        <li key={car.regNumber}>
            {car.manufacturer+' '+car.type + ' - '+ car.fuel+' '} <i>{car.price}</i> {' HUF'} - <img className='car-list-img' 
            src={car.picture} 
            alt={car.manufacturer+' '+car.type} />
        </li>
        );
    return (
        <>
            <h2>{car[0].manufacturer}</h2>
            <h3>{car[0].type}</h3>
            <p>
                {car[0].fuel}
            </p>
            <FormatDate/>
            <img className='car-img' src={car[0].picture} alt="Honda Civic 2023" />
            <ol>{listItems}</ol>           
            <CarList data={car}/>
        </>
    );
}
