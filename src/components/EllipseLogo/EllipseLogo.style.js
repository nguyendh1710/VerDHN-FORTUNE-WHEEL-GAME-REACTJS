import { styled } from "@mui/system";

export const EllipseContainer = styled("div")({
  width: "120px",
  height: "120px",
});

export const CenteredImage = styled("img")({
  position: "absolute",
  top: "49px",
  right: "-40px",
  transform: "translate(-50%, -50%)",
  width: "90px", // Điều chỉnh kích thước ảnh theo ý muốn
  height: "60px",
});
