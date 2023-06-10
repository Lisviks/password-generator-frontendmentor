'use client';

import React, { Dispatch, SetStateAction } from 'react';

interface Props {
  text: string;
  checked: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
}

export default function PasswordOption({ text, checked, setState }: Props) {
  return (
    <div>
      <label>
        <input type='checkbox' checked={checked} onChange={() => setState(!checked)} />
        <span className='checkmark'></span>
        {text}
      </label>
    </div>
  );
}
