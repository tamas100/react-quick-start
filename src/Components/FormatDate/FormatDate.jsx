import React from 'react';

export default function FormatDate({lengthEra = 'long'}) {
  const today = new Date();
  const formattedDate = new Intl.DateTimeFormat(
    ['hu', 'en-US'],
    { era: lengthEra, timeZoneName: 'long' }
  ).format(today);
  return (
    <>
      <p>A mai pontos dátum:</p>
      <p>{formattedDate}</p>
    </>    
  );
}

