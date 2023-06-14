'use client';

import IconArrowRight from './IconArrowRight';
import CharLength from './CharLength';
import PasswordOption from './PasswordOption';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';

interface Props {
  setPassword: Dispatch<SetStateAction<string>>;
}

type PasswordStrenth = '' | 'too weak!' | 'weak' | 'medium' | 'strong';

export default function Form({ setPassword }: Props) {
  const [charLength, setCharLength] = useState(10);
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [number, setNumber] = useState(true);
  const [symbol, setSymbol] = useState(true);
  const [strength, setStrength] = useState<PasswordStrenth>('');

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

  useEffect(() => {
    if (charLength <= 5) setStrength('too weak!');
    if (charLength > 5 && charLength <= 12) setStrength('weak');
    if (charLength > 12 && charLength <= 20) setStrength('medium');
    if (charLength > 20) setStrength('strong');
  }, [charLength]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const charsToUse: string[] = [];
    let password = '';

    if (uppercase) charsToUse.push(...uppercaseLetters);
    if (lowercase) charsToUse.push(...lowercaseLetters);
    if (number) charsToUse.push(...numbers);
    if (symbol) charsToUse.push(...symbols);

    for (let i = 0; i < charLength; i++) {
      const randomNumber = Math.floor(Math.random() * charsToUse.length);
      password += charsToUse[randomNumber];
    }

    if (!uppercase && !lowercase && !number && !symbol) return setPassword('');

    setPassword(password);
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
        <div className={strength === 'too weak!' ? 'too-weak' : strength}>
          {strength}
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
