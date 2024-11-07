import { styled } from '@mui/system';
import { keyframes } from '@mui/system';

export const shockwaveJump = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

export const gradientPulse = keyframes`
  0% {
    opacity: 1;
    transform: scale(0.5);
  }
  100% {
    opacity: 0;
    transform: scale(2);
  }
`;

export const circlePulse = keyframes`
  0% {
    transform: scale(0.5);
    opacity: 1;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
`;

export const BtnQuay = styled('a')({
  position: 'relative',
  background: `url('https://github.com/nguyendh-xp97/VerDHN-FORTUNE-WHEEL-REACTJS/blob/main/src/modules/FortuneWheel/Spin/click_quay.png?raw=true') no-repeat center center`,
  backgroundSize: '100% 100%',
  width: '90px',
  height: '90px',
  display: 'inline-block',
  transition: 'all 0.4s',
  cursor: 'pointer',
   // khong nên setup vị trí ở component con
  // zIndex: "9",
  // position: "absolute",
  // top: "152px",
  // left: "149px",
  animation: `${shockwaveJump} 1s ease-out infinite`,
  '&::before, &::after, & span': {
    content: '""',
    position: 'absolute',
    top: '-5%',
    left: '4%',
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    background: 'rgba(255, 255, 255, 0.5)',
    transform: 'translate(-50%, -50%)',
    animation: `${circlePulse} 1.5s infinite`,
    zIndex: -1,
  },
  '&::before': {
    animationDelay: '1s',
  },
  '&::after': {
    animationDelay: '1s',
  },
  '& span': {
    animationDelay: '1s',
  },
});



  