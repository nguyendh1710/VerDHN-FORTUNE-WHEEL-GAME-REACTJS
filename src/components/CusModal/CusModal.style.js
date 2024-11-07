import { styled } from '@mui/system';
import {Button,Box,TextField} from '@mui/material';

export const ModalContent = styled(Box)(({ theme }) => ({
  width: '400px',
  height: '650px',
  background: 'linear-gradient(45deg, #00C6FF, #7B2FF7, #FF416C)',
  borderRadius: '10px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
  transformStyle: 'preserve-3d',
  position: 'relative',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  boxSizing: 'border-box',
}));

export const Overlay = styled('div')({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 1000,
});

// Tạo nút Submit có màu gradient
export const GradientButton = styled(Button)(({ theme }) => ({
  borderRadius: '40px',
  fontSize:'20px',
  fontWeight:'900',
  background: 'linear-gradient(45deg, #ff8a65, #ff6f61,#ff4e50)', // gradient từ xanh, tím và đỏ
  color: 'white',
  '&:hover': {
    background: 'linear-gradient(45deg, #ff8a65, #ff6f61,#ff4e50,#ff8a65,#ff6f61)', // Đảm bảo gradient khi hover
  },
}));


export const CusTextField = styled('input')(({ theme }) => ({
  borderRadius: '40px',
  backgroundColor: '#ffffff',
  boxShadow: '5px 6px 4px rgba(136, 135, 135, 0.75)',
  border: 'none',
  borderBottom: '3px solid #f8b406',
  color: '#393838',
  padding: '18px 32px',
  font: '500 18px/27px Inter, sans-serif',
 
  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor: '#f8f8f8',
  },
  '&:focus': {
    outline: 'none',
    boxShadow: '0 0 0 3px rgba(248, 180, 6, 0.5)',
  },
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
    padding: '8px 20px',
  },
}));