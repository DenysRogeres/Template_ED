import React, { useState, useEffect } from 'react';

export function CountdownTimer(){
  const [timeLeft, setTimeLeft] = useState(15 * 60);

  useEffect(() => {
    const countdown = () => {
      if (timeLeft >= 0) {
        setTimeout(() => {
          setTimeLeft(timeLeft - 1);
        }, 1000);
      }
    };
    countdown();
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div id="countdown">
      {minutes}:{seconds < 10 ? '0' : ''}{seconds}
    </div>
  );
};
