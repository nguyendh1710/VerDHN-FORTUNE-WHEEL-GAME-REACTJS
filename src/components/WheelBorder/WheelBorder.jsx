import React, { useState, useEffect } from "react";
import SpinButton from "./Spin/SpinButton";
import { Box } from "@mui/material";
import { BackgroundContainer } from "./WheelBorder.style";
import Pointer from "./Pointer/Pointer";

export default function WheelBorder({ onHadSpin, hadSpin }) {
  const [showFirstImage, setShowFirstImage] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstImage((prev) => !prev);
    }, 100); // 0.1 giây

    return () => clearInterval(interval);
  }, []);

  // tương tác bấm nút

  const handleClick = () => {
    onHadSpin(!hadSpin);
  };

  return (
    <BackgroundContainer
      sx={{
        position: "relative",
        width: 444,
        height: 445,
        borderRadius: "50%",
        border: "1px solid white",
        boxShadow: "2px 2px 4px red",
        zIndex: "1",
        backgroundImage: showFirstImage
          ? "url(https://github.com/nguyendh-xp97/VerDHN-FORTUNE-WHEEL-REACTJS/blob/main/src/components/WheelBorder/spin_1.png?raw=true)"
          : "url(https://github.com/nguyendh-xp97/VerDHN-FORTUNE-WHEEL-REACTJS/blob/main/src/components/WheelBorder/spin_2.png?raw=true)",
      }}
    >
      <Box
        position={{
          //  position: "absolute",
          // top: "6px",
          // left: "1086px",
          zIndex: "16",
          marginLeft: "39px",
          marginTop: "30px",
        }}
      >
        <Pointer />
      </Box>
      <Box
        style={{
          zIndex: "29",
          position: "absolute",
          top: "182px",
          left: "179px",
        }}
      >
        <SpinButton
          position={{ top: "266px", left: "1086px" }}
          onClick={handleClick}
        />
      </Box>
    </BackgroundContainer>
  );
}
