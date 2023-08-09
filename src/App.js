import './App.css';
import MyButton from './Components/MyButton/MyButton';
import TextPractice from './Components/TextPractice/TextPractice';
import CarProfile from './Components/CarProfile/CarProfile';
import CarConditional from './Components/CarConditional/CarConditional';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Quick Start</h1>
        <MyButton />
        <MyButton />
        <TextPractice />
        <CarProfile />
        <CarConditional myCar='Honda' />
        <CarConditional myCar='Kia' />
      </header>
    </div>
  );
}

