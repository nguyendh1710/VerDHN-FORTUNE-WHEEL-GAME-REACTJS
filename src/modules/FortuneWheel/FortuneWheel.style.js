import { styled } from "@mui/system";
import { Box, Snackbar } from "@mui/material";

export const WheelContainer = styled(Box)({
  width: "52px",
  height: "52px",
  position: "relative",
  left: " 200px",
});

export const GradientSnackbar = styled(Snackbar)(({ theme }) => ({
  "& .MuiSnackbarContent-root": {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    color: "#fff",
  },
}));
export const WheelBorder = styled(Box)({
  position: "relative",
  top: '100px',
  left: '931px',
  width: 306,
  height: 306,

  borderRadius: "50%",
  border: "2px solid white",
 
  boxShadow: "2px 2px 4px black",
  zIndex: "2",
});

