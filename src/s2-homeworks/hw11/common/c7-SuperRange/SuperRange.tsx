import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
  return (
    <Slider
      min={0}
      max={100}
      sx={{
        borderRadius: '10px',
        width: '150px',
        height: '4px',
        '& .MuiSlider-rail': {
          backgroundColor: '#8b8b8b',
        },
        '& .MuiSlider-track': {
          backgroundColor: '#0c2',
          border: 'none'
        },
        '& .MuiSlider-thumb': {
          width: '18px',
          height: '18px',
          backgroundColor: '#0c2',
          border: '5px solid #fff',
          boxShadow: '0 0 0 2px #0c2',
        },
      }}
      {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
    />
  )
}

export default SuperRange;