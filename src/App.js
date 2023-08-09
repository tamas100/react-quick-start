import './App.css';
import MyButton from './Components/MyButton/MyButton';
import TextPractice from './Components/TextPractice/TextPractice';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Quick Start</h1>
        <MyButton />
        <TextPractice />
      </header>
    </div>
  );
}

