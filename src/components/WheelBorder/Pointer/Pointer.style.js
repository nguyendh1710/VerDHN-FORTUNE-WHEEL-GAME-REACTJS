import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const PointerContainer = styled(Box)(({size }) => ({

  transform: "translate(-50%, -50%) rotate(180deg)",
  background: "linear-gradient(145deg, #ff0000, #ff4d4d)", // Gradient để tạo chiều sâu
  borderLeft: `${size / 2}px solid transparent`,
  borderRight: `${size / 2}px solid transparent`,
  borderBottom: `${size}px solid red`,
  
}));
