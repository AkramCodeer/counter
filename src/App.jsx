import React, { useState } from 'react';
import CountdownForm from '../src/CountdownForm';
import CountdownDisplay from '../src/CountdownDisplay';
import './App.css';

function App() {
  const [targetDate, setTargetDate] = useState(null);

  const handleSetTargetDate = (date) => {
    setTargetDate(date);
  };

  const handleReset = () => {
    setTargetDate(null);
  };

  return (
    <div className="App">
      <h1>Countdown Timer</h1>
      {!targetDate ? (
        <CountdownForm setTargetDate={handleSetTargetDate} />
      ) : (
        <CountdownDisplay targetDate={targetDate} onReset={handleReset} />
      )}
    </div>
  );
}

export default App;
