import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}°C`;
}

export default function Knob() {
  return (
    <Box sx={{ width: 300 }}>
      <Slider className='slider'
        
        aria-label="Temperature"
        defaultValue={30}
        getAriaValueText={valuetext}
        color="secondary"
        sx= {{
            width: 99.
          }}
        
      />
    </Box>
  );
}