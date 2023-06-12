'use client';

import IconCopy from './IconCopy';
import Form from './Form';
import { useState } from 'react';

export default function Home() {
  const [password, setPassword] = useState('');

  const handleCopy = () => {
    if (password) navigator.clipboard.writeText(password);
  };

  return (
    <main>
      <h1>Password Generator</h1>
      <div className='result'>
        <input className='password' placeholder='P4$5W0rD!' value={password} disabled />
        <div className='copy' onClick={handleCopy}>
          <IconCopy />
        </div>
      </div>
      <Form setPassword={setPassword} />
    </main>
  );
}
