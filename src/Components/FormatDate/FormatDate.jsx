import React from 'react';

export default function FormatDate() {
  const today = new Date();
  const formattedDate = new Intl.DateTimeFormat(
    ['hu', 'en-US'],
    { era: 'long', timeZoneName: 'long' }
  ).format(today);
  return (
    <>
      <p>A mai pontos dátum:</p>
      <p>{formattedDate}</p>
    </>    
  );
}

