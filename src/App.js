import './App.css';
import { useState } from 'react';
import MyButton from './Components/MyButton/MyButton';
import SyncButtons from './Components/SyncButtons/SyncButtons';
import TextPractice from './Components/TextPractice/TextPractice';
import CarProfile from './Components/CarProfile/CarProfile';
import CarConditional from './Components/CarConditional/CarConditional';
import FormatDate from './Components/FormatDate/FormatDate';
import Border from './Components/Border/Border';

export default function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Quick Start</h1>
        <FormatDate lengthEra='short' />
        <h2>Separated Buttons</h2>
        <MyButton />
        <MyButton />
        <h2>Synced Buttons</h2>
        <SyncButtons count={count} onClick={handleClick} />
        <SyncButtons count={count} onClick={handleClick} />
        <TextPractice />
        <Border>
          <CarProfile />
        </Border>
        <CarConditional myCar='Honda' />
        <CarConditional myCar='Kia' />
      </header>
    </div>
  );
}

