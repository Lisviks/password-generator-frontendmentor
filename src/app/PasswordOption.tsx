'use client';

import React, { useState } from 'react';

interface Props {
  text: string;
}

export default function PasswordOption({ text }: Props) {
  const [checked, setChecked] = useState(true);

  return (
    <div>
      <label>
        <input type='checkbox' checked={checked} onChange={() => setChecked(!checked)} />
        <span className='checkmark'></span>
        {text}
      </label>
    </div>
  );
}
