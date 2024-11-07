import React from 'react';
import { styled } from '@mui/system';

const FlashingLight = styled('div')(({ theme, style }) => ({
  width: '15px',
  height: '15px',
  backgroundColor: 'white',
  borderRadius: '50%',
  boxShadow: '0 0 60px yellow, 0 0 80px white, 0 0 90px yellow',
  animation: 'flash 1s infinite, glow 1s infinite, sparkle 1.5s infinite',

  '@keyframes flash': {
    '0%': { opacity: 1 },
    '50%': { opacity: 0 },
    '100%': { opacity: 1 },
  },
  '@keyframes glow': {
    '0%': { boxShadow: '0 0 60px white, 0 0 40px white, 0 0 60px white' },
    '50%': { boxShadow: '0 0 40px white, 0 0 80px white, 0 0 120px white' },
    '100%': { boxShadow: '0 0 60px white, 0 0 40px white, 0 0 60px white' },
  },
  '@keyframes sparkle': {
    '0%': { transform: 'rotate(0deg)', opacity: 1, filter: 'brightness(2)' },
    '25%': { transform: 'rotate(45deg)', opacity: 0.5, filter: 'brightness(6.5)' },
    '50%': { transform: 'rotate(90deg)', opacity: 1, filter: 'brightness(6)' },
    '75%': { transform: 'rotate(135deg)', opacity: 0.5, filter: 'brightness(3.5)' },
    '100%': { transform: 'rotate(180deg)', opacity: 1, filter: 'brightness(3)' },
  },
}));

const FlashLight = () => {
  return <FlashingLight />;
};

export default FlashLight;
