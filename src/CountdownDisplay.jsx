import React, { useEffect, useState } from 'react';

const CountdownDisplay = ({ targetDate, onReset }) => {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining(targetDate));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining(targetDate));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  if (timeRemaining.total <= 0) {
    return (
      <div className="countdown-container">
        <h2>Time's up!</h2>
        <button onClick={onReset}>Start New Countdown</button>
      </div>
    );
  }

  return (
    <div className="countdown-container">
      <h2>Time Remaining</h2>
      <div className="timer-grid">
        <div>{timeRemaining.days}d</div>
        <div>{timeRemaining.hours}h</div>
        <div>{timeRemaining.minutes}m</div>
        <div>{timeRemaining.seconds}s</div>
      </div>
      <button onClick={onReset}>Cancel Countdown</button>
    </div>
  );
};

const calculateTimeRemaining = (targetDate) => {
  const total = Date.parse(targetDate) - Date.now();
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return { total, days, hours, minutes, seconds };
};

export default CountdownDisplay;
