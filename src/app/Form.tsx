'use client';

import IconArrowRight from './IconArrowRight';
import CharLength from './CharLength';
import PasswordOption from './PasswordOption';
import React, { useEffect, useState } from 'react';

export default function Form() {
  const [charLength, setCharLength] = useState(10);
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [number, setNumber] = useState(true);
  const [symbol, setSymbol] = useState(true);

  const [uppercaseLetters, setUppercaseLetters] = useState<string[]>([]);
  const [lowercaseLetters, setLowercaseLetters] = useState<string[]>([]);
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const symbols = ['.', ',', '@', '&', '#', '-'];

  useEffect(() => {
    const upLetters = [];
    const lowLetters = [];
    for (let i = 65; i <= 90; i++) {
      upLetters.push(String.fromCharCode(i));
    }
    for (let i = 97; i <= 122; i++) {
      lowLetters.push(String.fromCharCode(i));
    }
    setUppercaseLetters(upLetters);
    setLowercaseLetters(lowLetters);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <CharLength charLength={charLength} setState={setCharLength} />
      <PasswordOption text='Include Uppercase Letters' checked={uppercase} setState={setUppercase} />
      <PasswordOption text='Include Lowercase Letters' checked={lowercase} setState={setLowercase} />
      <PasswordOption text='Include Numbers' checked={number} setState={setNumber} />
      <PasswordOption text='Include Symbols' checked={symbol} setState={setSymbol} />
      <div className='strength'>
        <p>Strength</p>
        <div className='medium'>
          Medium
          <p>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </p>
        </div>
      </div>
      <button type='submit'>
        Generate <IconArrowRight />
      </button>
    </form>
  );
}
