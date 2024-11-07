import React from 'react';
import { styled } from '@mui/system';
import { Box } from "@mui/material";

const FlashingLight = styled('div')(({ theme }) => ({
  width: '15px',
  height: '15px',
  backgroundColor: 'yellow',
  borderRadius: '50%',
  boxShadow: '0 0 80px black, 0 0 40px white, 0 0 60px yellow',
  animation: 'flash 1s infinite',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'yellow',
    borderRadius: '50%',
    boxShadow: '0 0 10px white ',
    zIndex: -1,
  },
  '@keyframes flash': {
    '0%': { opacity: 1 },
    '50%': { opacity: 0 },
    '100%': { opacity: 1 },
  },
}));

const Light = () => {
  return (
    <FlashingLight />
  );
};

export default Light;

