import React, { useState } from 'react';

const CountdownForm = ({ setTargetDate }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const target = new Date(`${date}T${time}`);
    setTargetDate(target);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            min={new Date().toISOString().split("T")[0]}
            max={new Date(Date.now() + 99 * 24 * 60 * 60 * 1000).toISOString().split("T")[0]}
          />
        </label>
      </div>
      <div>
        <label>
          Time:
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </label>
      </div>
      <button type="submit">Start Countdown</button>
    </form>
  );
};

export default CountdownForm;
