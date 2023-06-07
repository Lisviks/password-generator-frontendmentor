'use client';

import { Slider } from '@mui/material';

export default function CharLength() {
  return (
    <div className='character-length'>
      <p>
        <span>Character Length </span>
        <span>10</span>
      </p>
      <Slider
        min={5}
        max={30}
        defaultValue={10}
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
