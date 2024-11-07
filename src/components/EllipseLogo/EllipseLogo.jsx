import React from 'react';
import { EllipseContainer, CenteredImage } from './EllipseLogo.style'; // Đường dẫn tới file chứa các styled

export default function EllipseLogo () {

  return (
    <EllipseContainer>
    <svg width="325" height="72 0">
      <ellipse cx="-7" cy="90" rx="80" ry="70" fill="white" style={{   transform: " rotate(-68deg)"}}/>
    </svg>

    <CenteredImage src='https://github.com/nguyendh-xp97/VerDHN-FORTUNE-WHEEL-REACTJS/blob/main/src/components/EllipseLogo/logo.png?raw=true' alt="centered" />
  </EllipseContainer>
  );
};


