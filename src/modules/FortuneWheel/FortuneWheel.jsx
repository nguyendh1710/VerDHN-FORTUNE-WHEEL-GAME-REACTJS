// src/components/Wheel.js
import React, { useRef, useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { gsap } from "gsap";
import { WheelContainer } from "./FortuneWheel.style";

export default function FortuneWheel({
  userHadSpin,
  onSuccess,
  dataOfUSerSpin,
}) {
  // bien state quan ly nut da duoc bam 1 lan hay chua
  const [isSpinning, setIsSpinning] = useState(false);
  const [hasSpun, setHasSpun] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [selectedSegment, setSelectedSegment] = useState(null);
  const [prize, setPrize] = useState("");
  const [prizeMessage, setPrizeMessage] = useState("");

  // Phát âm thanh khi quay
  const soundFile =
    "https://github.com/nguyendh-xp97/VerDHN-FORTUNE-WHEEL-REACTJS/raw/refs/heads/main/src/components/assets/sound/spin-232536.mp3";

  const sound = useRef(new Audio(soundFile)); // Tạo đối tượng âm thanh

  //  Phát âm thanh khi quay thắng
  const soundWinFile =
    "https://github.com/nguyendh-xp97/VerDHN-FORTUNE-WHEEL-REACTJS/raw/refs/heads/main/src/components/assets/sound/win.mp3";
  const soundWin = useRef(new Audio(soundWinFile));

  //
  const segmentsArr = [
    {
      id: "0",
      label: "May mắn",
      color: "linear-gradient(106deg, #F88E8E 54.53%, #F70004 92.44%)",
      message: "Chúc bạn may nắm lần sau!",
      rotate: 47,
    },
    {
      id: "1",
      label: "Mercedes",
      color: " linear-gradient(106deg, #8EC6F8 54.53%, #0470F7 92.44%)",
      message: "Chúc mừng bạn dã đạt giải thưởng Mercedes!",
      rotate: 45,
    },
    {
      id: "2",
      label: "May mắn",
      color: " linear-gradient(106deg, #F8E88E 54.53%, #F7C704 92.44%)",
      message: "Chúc bạn may nắm lần sau!",
      rotate: 70,
    },
    {
      id: "3",
      label: "1 lượng SJC",
      color: " linear-gradient(106deg, #D18EF8 54.53%, #7A04F7 92.44%)",
      message: "Chúc mừng bạn dã đạt giải thưởng 1 lượng vàng SJC!",
      rotate: 60,
    },
    {
      id: "4",
      label: "May mắn",
      color: " linear-gradient(106deg, #F8B88E 54.53%, #F77404 92.44%)",
      message: "Chúc bạn may nắm lần sau!",
      rotate: 55,
    },
    {
      id: "5",
      label: "Xe SHMode",
      color: " linear-gradient(106deg, #8EF8A8 54.53%, #04F74A 92.44%)",
      message: "Chúc mừng bạn dã đạt giải thưởng Xe SHMode!",
      rotate: 60,
    },
    {
      id: "6",
      label: "May mắn",
      color: " linear-gradient(106deg, #D18EF8 54.53%, #7A04F7 92.44%)",
      message: "Chúc bạn may nắm lần sau!",
      rotate: 55,
    },
    {
      id: "7",
      label: "Biệt thự",
      color: " linear-gradient(106deg, #F8B88E 54.53%, #F77404 92.44%)",
      message: "Chúc mừng bạn dã đạt giải thưởng 1 căn Biệt thự 1 tỷ USD!",
      rotate: 60,
    },
  ];

  // khoi tao vong tron
  const wheelRef = useRef(null);

  useEffect(() => {
    const segments = segmentsArr.length;
    const angle = 360 / segments;
    const wheel = wheelRef.current;

    for (let i = 0; i < segments; i++) {
      const segment = document.createElement("div");
      const label = document.createElement("div");

      // Segment
      segment.style.position = "absolute";
      segment.style.width = "50%";
      segment.style.height = "50%";
      segment.style.background = `${segmentsArr[i].color}`;
      segment.style.transformOrigin = "100% 100%";
      segment.style.transform = `rotate(${i * angle}deg) skewY(-${
        180 - angle
      }deg)`;
      segment.style.zIndex = "1";
      segment.style.borderRight = "3px solid";
      segment.style.borderImage =
        "linear-gradient(to bottom, #8A8A8A, #D3D3D3) 1";
      segment.style.boxShadow = "0 0 10px #8A8A8A";

      // Label
      label.style.position = "absolute";
      label.innerText = segmentsArr[i].label;
      label.style.bottom = "33px";
      label.style.left = "47px";
      label.style.transform = `rotate(${segmentsArr[i].rotate}deg)`;
      label.style.transformOrigin = "70% 30%";
      label.style.textAlign = "center";
      label.style.width = "100%";
      label.style.fontSize = "16px";
      label.style.color = "white";
      label.style.fontWeight = "bold";
      label.style.textShadow = "1px 1px 2px black";

      segment.appendChild(label);
      wheel.appendChild(segment);
    }
  }, []);

  // nhận thông tin người dùng đã spin từ App
  useEffect(() => {
    if (userHadSpin) {
      handleSpin();
    }
  }, [userHadSpin]);

  // ham tuong tac nhan vong quay => kiem tra nut spin da duoc bam hay chua neu da bam 1 lan thi khong cho bam nua

  const handleSpin = () => {
    if (!isSpinning && !hasSpun) {
      setIsSpinning(true);
      setHasSpun(true);
      sound.current.play(); // Phát âm thanh khi bắt đầu quay
      // taọ hiệu ứng quay với gsap
      const randomSpins = Math.floor(Math.random() * 4) + 1; // Số vòng quay ngẫu nhiên từ 5 đến 9
      const randomDegree = Math.floor(Math.random() * 360); // Góc ngẫu nhiên từ 0 đến 359
      const totalRotation = 360 * randomSpins + randomDegree;
      // khoi tao vong quay bang gsap
      gsap.to(wheelRef.current, {
        rotation: totalRotation,
        duration: 5,
        ease: "power4.out",

        onComplete: () => {
          soundWin.current.play();
          // const segmentAngle = 360 / segmentsArr.length;
          const pointerAngle = totalRotation % 360;
          //  const selectedIndex = Math.floor(pointerAngle / segmentAngle);
          // setSelectedSegment(segmentsArr[selectedIndex]);

          // console.log(`Selected Segment: ${segmentsArr[selectedIndex].id}`);
          console.log(`PointerAngle: ${pointerAngle}`);
          console.log(dataOfUSerSpin);
          if (pointerAngle >= 0 && pointerAngle <= 45) {
            setPrize(segmentsArr[0].label);
            setPrizeMessage(segmentsArr[0].message);
          } else if (pointerAngle >= 46 && pointerAngle <= 90) {
            setPrize(segmentsArr[7].label);
            setPrizeMessage(segmentsArr[7].message);
          } else if (pointerAngle >= 91 && pointerAngle <= 135) {
            setPrize(segmentsArr[6].label);
            setPrizeMessage(segmentsArr[6].message);
          } else if (pointerAngle >= 136 && pointerAngle <= 180) {
            setPrize(segmentsArr[5].label);
            setPrizeMessage(segmentsArr[5].message);
          } else if (pointerAngle >= 181 && pointerAngle <= 225) {
            setPrize(segmentsArr[4].label);
            setPrizeMessage(segmentsArr[4].message);
          } else if (pointerAngle >= 226 && pointerAngle <= 270) {
            setPrize(segmentsArr[3].label);
            setPrizeMessage(segmentsArr[3].message);
          } else if (pointerAngle >= 271 && pointerAngle <= 315) {
            setPrize(segmentsArr[2].label);
            setPrizeMessage(segmentsArr[2].message);
          } else if (pointerAngle >= 316 && pointerAngle <= 360) {
            setPrize(segmentsArr[1].label);
            setPrizeMessage(segmentsArr[1].message);
          }
          //kích hoạt pháo hoa
          onSuccess();
          //
          setShowAlert(true);
        },
      });
    }

    // nut spin da duoc bam hay chua neu da bam lan 2 thi khong cho bam nua
    else if (hasSpun) {
      setShowAlert(true);
    }
  };

  // dong mo thong bao
  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <>
      <WheelContainer>
        {showAlert && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.7)", // Màu nền mờ
              zIndex: "29", // Đảm bảo overlay nằm trên cùng
            }}
            onClick={handleCloseAlert}
          >
            <Box
              style={{
                position: "absolute",
                width: "36%",
                height: "80%",
                top: "26px",
                left: "32%",
                backgroundImage:
                  'url("https://github.com/nguyendh-xp97/VerDHN-FORTUNE-WHEEL-REACTJS/blob/main/src/modules/FortuneWheel/red-text-box.png?raw=true")',
                backgroundSize: "cover", // Để hình ảnh phủ kín phần tử
                backgroundPosition: "center", // Để hình ảnh căn giữa
              }}
            >
              <Typography
                style={{
                  position: "absolute",
                  top: "42%",
                  width: "330px",
                  left: "20%",
                  fontWeight: "bold",
                  fontSize: "20px",
                  color: "white",
                }}
              >
                {`Chúc mừng ${dataOfUSerSpin.fullName} đã trúng ${prize}. Phòng khám sẽ liên hệ sớm với bạn để trao giải!`}
              </Typography>
            </Box>{" "}
          </div>
        )}

        <Box
          ref={wheelRef}
          sx={{
            position: "absolute",
            width: 381,
            height: 381,
            borderRadius: "50%",
            border: "1px solid white",
            overflow: "hidden",
            boxShadow: "2px 2px 4px black",
            zIndex: "8",
          }}
        ></Box>
      </WheelContainer>
    </>
  );
}
