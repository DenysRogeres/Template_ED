import React, { useState, useEffect } from 'react';

export function CountdownTimer(){
  const [timeLeft, setTimeLeft] = useState(15 * 60);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        if (prevTimeLeft > 0) {
          return prevTimeLeft - 1;
        } else {
          clearInterval(intervalId);
          return 0; // Ensure timeLeft stays at 0 when countdown finishes
        }
      });
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div id="countdown">
      {minutes}:{seconds < 10 ? '0' : ''}{seconds}
    </div>
  );
};
