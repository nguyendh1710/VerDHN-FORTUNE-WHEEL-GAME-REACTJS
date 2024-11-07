import "./App.css";
import FortuneWheel from "./modules/FortuneWheel/FortuneWheel";
import EllipseLogo from "./components/EllipseLogo/EllipseLogo";
import background from "./components/assets/image/bg.svg";
import WheelBorder from "./components/WheelBorder/WheelBorder";
import { Box, Typography, Container } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import Grid from "@mui/material/Grid2";
import React, { useState, useEffect, useRef } from "react";
import confetti from "canvas-confetti";
import CusModal from "./components/CusModal/CusModal";
function App() {
  const [showFirstImage, setShowFirstImage] = useState(true);
  // dùng kỹ thuật nâng state để chuyển state từ FortuneWheel->App->WheelBorder
  const [hadSpin, setHadSpin] = useState(false);
  // Hiệu ứng pháo hoa -> dùng callback gọi hàm từ component FortuneWheel
  // dùng kỹ thuật nâng state để chuyển state từ CusModal->App->FortuneWheel
  const [userInfo, setUserInfo] = useState(null);

  const handleRecieveUserInfo = (userdata) => {
    // phai nhan kieu callback vo ham setState chu khong se bi null
    setUserInfo((prevdData) => ({
      ...prevdData,
      ...userdata,
    }));
  };
  useEffect(() => {
    console.log(userInfo);
  }, [userInfo]);
  // console.log(userInfo);

  const handleFireworks = () => {
    confetti({
      particleCount: 200,
      spread: 260,
      origin: { y: 0.6 },
      colors: ["#bb0000", "#ffffff"],
      resize: true,
      useWorker: true,
    });
  };
  //
  useEffect(() => {
    console.log("Shared Spin State:", hadSpin);
  }, [hadSpin]);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstImage((prev) => !prev);
    }, 200); // 0.1 giây

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        overflow: "hidden",
        width: "100vw",
        height: "100vh",
        "@media (max-width: 600px)": {
          backgroundSize: "contain", // Điều chỉnh kích thước hình nền cho màn hình nhỏ hơn
          height: "50vh", // Giảm chiều cao cho thiết bị di động
          width: "50vw",
        },
      }}
    >
      <Container sx={{ height: "100%", width: "100%" }}>
        <CusModal onUserInfo={handleRecieveUserInfo} />
        {/* ///////////////// */}

        <Grid
          container
          spacing={2}
          sx={{
            width: "100vw",
            position: "relative",
            height: "100vh",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            "@media (max-width: 600px)": {
              backgroundSize: "contain",
              height: "50vh",
              gridTemplateColumns: "1fr",
            },
          }}
        >
          {/* Columm 1 */}
          <Grid item xs={12} sm={6} sx={{ height: "auto", width: "100%" }}>
            <img
              style={{
                position: "absolute",
                width: { xs: "100%", sm: "590px" }, // Responsive width
                height: { xs: "auto", sm: "240px" }, // Responsive height
                top: "96px",
                left: "-39px",
                transform: " rotate(-24deg)",
              }}
              src="https://github.com/nguyendh-xp97/VerDHN-FORTUNE-WHEEL-REACTJS/blob/main/src/App/text.gif?raw=true"
              alt="Text"
            />
            <Box
              style={{
                position: "absolute",
                width: "320px",
                height: "180px",
                top: "216px",
                left: "199px",
                transform: "rotate(-7deg)",
                backgroundImage:
                  'url("https://raw.githubusercontent.com/nguyendh-xp97/VerDHN-FORTUNE-WHEEL-REACTJS/main/src/App/shapes.png")',
                backgroundSize: "cover", // Để hình ảnh phủ kín phần tử
                backgroundPosition: "center", // Để hình ảnh căn giữa
              }}
            >
              <Typography
                style={{
                  position: "absolute",
                  top: "60px",
                  width: "330px",
                  left: "29px",
                  fontWeight: "bold",
                  fontSize: "15px",
                  transform: " rotate(-7deg)",
                }}
              >
                {" "}
                Từ 01/11/2024 đến 12/12/2024
              </Typography>
            </Box>

            <Typography
              style={{
                position: "absolute",
                top: "426px",
                width: "430px",
                left: "90px",
                fontWeight: "bold",
                color: "white",
              }}
            >
              {" "}
              Quý bác sĩ vui lòng like{" "}
              <FontAwesomeIcon fontSize={40} icon={faFacebook} /> để có thêm
              thông tin chi tiết
            </Typography>
            {/* Light1 */}
            <img
              style={{
                position: "absolute",
                width: "190px",
                height: "120px",
                top: "466px",
                left: "199px",
                transform: "rotate(-24deg)",
              }}
              src={
                showFirstImage
                  ? "https://github.com/nguyendh-xp97/VerDHN-FORTUNE-WHEEL-REACTJS/blob/main/src/App/light%20effect.png?raw=true"
                  : "https://github.com/nguyendh-xp97/VerDHN-FORTUNE-WHEEL-REACTJS/blob/main/src/App/light-2.png?raw=true"
              }
              alt="Light"
            />
            <img
              style={{
                position: "absolute",
                width: "190px",
                height: "120px",
                top: "480px",
                left: "-169px",
                transform: "rotate(-24deg)",
              }}
              src={
                showFirstImage
                  ? "https://github.com/nguyendh-xp97/VerDHN-FORTUNE-WHEEL-REACTJS/blob/main/src/App/light%20effect.png?raw=true"
                  : "https://github.com/nguyendh-xp97/VerDHN-FORTUNE-WHEEL-REACTJS/blob/main/src/App/light-2.png?raw=true"
              }
              alt="Light"
            />
          </Grid>
          {/* Columm 2 */}
          <Grid item xs={12} sm={6} sx={{ height: "auto", width: "100%" }}>
            {/* Light2 */}
            <img
              style={{
                position: "absolute",
                width: "990px",
                height: "430px",
                top: "-160px",
                left: "520px",
                zIndex: "19",
              }}
              src={
                showFirstImage
                  ? "https://github.com/nguyendh-xp97/VerDHN-FORTUNE-WHEEL-REACTJS/blob/main/src/App/light_3.png?raw=true"
                  : "https://github.com/nguyendh-xp97/VerDHN-FORTUNE-WHEEL-REACTJS/blob/main/src/App/light-4.png?raw=true"
              }
              alt="Light"
            />
            {/* WheelBorder */}
            <Box
              sx={{
                position: "absolute",
                top: "36px",
                left: "780px",
                zIndex: "10",
              }}
            >
              <WheelBorder onHadSpin={setHadSpin} hadSpin={hadSpin} />
            </Box>
            {/* FortuneWheel */}
            <Box
              sx={{
                position: "absolute",
                top: "71px",
                left: "612px",
              }}
            >
              <FortuneWheel
                userHadSpin={hadSpin}
                onSuccess={handleFireworks}
                dataOfUSerSpin={userInfo}
              />
            </Box>
            {/* EllipseLogo */}
            <Box
              sx={{
                position: "absolute",
                top: "0px",
                left: "1214px",
              }}
            >
              <EllipseLogo />
            </Box>
            {/* Triangle Base */}
            <img
              style={{
                position: "absolute",
                width: "400px",
                height: "300px",
                top: "370px",
                left: "810px",
              }}
              src="https://raw.githubusercontent.com/nguyendh-xp97/VerDHN-FORTUNE-WHEEL-REACTJS/a56af04a8ea6c9d940fe8b33884467c4ae1ed407/src/App/triangle%20base.svg"
              alt="Your SVG"
            />
            {/* Products */}

            <img
              style={{
                position: "absolute",
                width: "720px",
                height: "400px",
                top: "400px",
                left: "650px",
                zIndex: "12",
              }}
              src="https://raw.githubusercontent.com/nguyendh-xp97/VerDHN-FORTUNE-WHEEL-REACTJS/a56af04a8ea6c9d940fe8b33884467c4ae1ed407/src/App/products%201.svg"
              alt="Your SVG"
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
