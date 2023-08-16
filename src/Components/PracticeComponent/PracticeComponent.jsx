import React from 'react';

export default function PracticeComponent({name}) {
  return (
    <div>       
        <section>
            <h1>{name}</h1>
                <dl>
                    <dt>Part of plant</dt>
                    <dd>{name === 'tea' ? 'leaf' : 'bean'}</dd>
                    <dt>Caffeine content</dt>
                    <dd>{name === 'tea' ? '15–70 mg/cup' : '80–185 mg/cup'}</dd>
                    <dt>Age</dt>
                    <dd>{name === 'tea' ? '4,000+ years' : '1,000+ years'}</dd>
                </dl>
        </section>
    </div>
  );
}
