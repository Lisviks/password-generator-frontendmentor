'use client';

import { Slider } from '@mui/material';
import { useState } from 'react';

export default function CharLength() {
  const [charLength, setCharLength] = useState<number>(10);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setCharLength(newValue as number);
  };

  return (
    <div className='character-length'>
      <p>
        <span>Character Length </span>
        <span>{charLength}</span>
      </p>
      <Slider
        min={5}
        max={30}
        value={charLength}
        onChange={handleChange}
        sx={{
          color: '#a4ffaf',
          borderRadius: 0,
          height: 8,
          boxShadow: 0,
          '& .MuiSlider-rail': { color: '#18171f' },
          '& .MuiSlider-thumb': {
            height: 28,
            width: 28,
            '&:hover': { color: '#18171f', border: '2px solid #a4ffaf', boxShadow: 0 },
            '&.Mui-focusVisible': { boxShadow: 0 },
          },
        }}
      />
    </div>
  );
}
