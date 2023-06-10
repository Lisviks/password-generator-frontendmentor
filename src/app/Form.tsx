'use client';

import IconArrowRight from './IconArrowRight';
import CharLength from './CharLength';
import PasswordOption from './PasswordOption';
import React, { FormEventHandler } from 'react';

export default function Form() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <CharLength />
      <PasswordOption text='Include Uppercase Letters' />
      <PasswordOption text='Include Lowercase Letters' />
      <PasswordOption text='Include Numbers' />
      <PasswordOption text='Include Symbols' />
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
