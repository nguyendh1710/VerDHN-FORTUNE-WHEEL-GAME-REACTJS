import React, { useState, useEffect } from "react";
import { Modal, Typography } from "@mui/material";
import {
  ModalContent,
  Overlay,
  GradientButton,
  CusTextField,
} from "./CusModal.style";

export default function CustomModal({ onUserInfo }) {
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    birthYear: "",
    address: "",
  });
  // const [userInfo, setUserInfo] = useState(null); // State lưu thông tin người dùng sau khi submit
  const [errorMessage, setErrorMessage] = useState(""); // Thông báo lỗi khi thiếu thông tin

  // Mở modal khi người dùng vào ứng dụng (component mount)
  useEffect(() => {
    setOpen(true); // Hiển thị modal ngay khi ứng dụng tải xong
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    // Kiểm tra dữ liệu người dùng nhập đầy đủ chưa
    if (
      formData.fullName &&
      formData.phoneNumber &&
      formData.birthYear &&
      formData.address
    ) {
      // Lưu thông tin người dùng vào biến state để callback lên App
      onUserInfo(formData);

      console.log(formData);
      setOpen(false); // Đóng modal sau khi submit
    } else {
      setErrorMessage("Vui lòng nhập đầy đủ thông tin để tiếp tục quay.");
    }
  };

  const handleOverlayClick = () => {
    // Nếu thông tin chưa đầy đủ, không đóng modal mà chỉ hiển thị thông báo lỗi
    if (
      formData.fullName &&
      formData.phoneNumber &&
      formData.birthYear &&
      formData.address
    ) {
      setOpen(false); // Đóng modal nếu tất cả thông tin đầy đủ
    } else {
      setErrorMessage("Vui lòng nhập đầy đủ thông tin để tiếp tục quay.");
    }
  };

  return (
    <div>
      {/* Nếu có thông tin người dùng, hiển thị thông tin ra màn hình */}
      {/* {userInfo && (
       
          JSON.stringify(userInfo, null, 2)
    
      )} */}

      {open && (
        <>
          <Overlay onClick={handleOverlayClick} />
          <Modal
            open={open}
            onClose={() => {}}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1500,
            }}
          >
            <ModalContent
              style={{
                position: "relative",
              }}
            >
              <img
                style={{
                  position: "absolute",
                  width: "420px",
                  height: "210px",
                  top: "-84px",
                  left: "-8px",
                }}
                src="https://github.com/nguyendh-xp97/VerDHN-FORTUNE-WHEEL-REACTJS/blob/main/src/components/CusModal/line.png?raw=true"
                alt="line"
              />
              <Typography
                variant="h6"
                sx={{
                  textAlign: "center",
                  marginTop: "33px",
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                NHẬP THÔNG TIN ĐỂ TIẾP TỤC QUAY
              </Typography>

              <CusTextField
                label="Họ Tên"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                variant="outlined"
                margin="normal"
                fullWidth
                placeholder="Nhập họ tên"
              />
              <CusTextField
                label="Số điện thoại/Email"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                variant="outlined"
                margin="normal"
                fullWidth
                placeholder="Nhập số điện thoại/Email"
              />

              <CusTextField
                label="Địa Chỉ"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                variant="outlined"
                margin="normal"
                fullWidth
                placeholder="Nhập địa chỉ"
              />
              <CusTextField
                label="Tên Nha khoa"
                name="birthYear"
                value={formData.birthYear}
                onChange={handleInputChange}
                variant="outlined"
                margin="normal"
                fullWidth
                placeholder="Nhập tên nha khoa"
              />
              {/* Hiển thị thông báo lỗi nếu thông tin chưa đầy đủ */}
              {errorMessage && (
                <Typography
                  color="error"
                  sx={{ marginTop: "10px", textAlign: "center" }}
                >
                  {errorMessage}
                </Typography>
              )}

              <GradientButton
                variant="contained"
                onClick={handleSubmit}
                sx={{
                  marginTop: "10px",
                  marginBottom: "80px",
                  width: "60%",
                  height: "10%",
                  marginLeft: "70px",
                }}
              >
                Gửi
              </GradientButton>
              <img
                style={{
                  position: "absolute",
                  width: "420px",
                  height: "210px",
                  bottom: "-84px",
                  left: "-8px",
                }}
                src="https://github.com/nguyendh-xp97/VerDHN-FORTUNE-WHEEL-REACTJS/blob/main/src/components/CusModal/line.png?raw=true"
                alt="line"
              />
            </ModalContent>
          </Modal>
        </>
      )}
    </div>
  );
}
