import React, { useState, useEffect, useRef } from 'react';

export function ContadorView() {

  const [currentNumber, setCurrentNumber] = useState(419);
  const timeoutRef = useRef(null);

  const getRandomIncrement = () => {
    const increments = [1, 2, 3, 4];
    return increments[Math.floor(Math.random() * increments.length)];
  };

  const getRandomDecrement = () => {
    const decrements = [1, 2];
    return decrements[Math.floor(Math.random() * decrements.length)];
  };

  const updateNumber = () => {
    const shouldIncrement = Math.random() < 0.8;

    setCurrentNumber(prevNumber => shouldIncrement 
      ? prevNumber + getRandomIncrement() 
      : prevNumber - getRandomDecrement());
  };

  const startUpdateLoop = () => {
    timeoutRef.current = setTimeout(() => {
      updateNumber();
      startUpdateLoop();
    }, 1500);
  };

  useEffect(() => {
    startUpdateLoop();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <span>
      <strong>{currentNumber}</strong>
    </span>
  );
};