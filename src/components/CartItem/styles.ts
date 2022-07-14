import { styled } from "../../themes";

export const Li = styled("li", {
  display: "grid",
  gridTemplateColumns: "1fr 1.5fr",
  gap: "0.5rem",
  listStyle: "none",
  margin: "2rem 0",
  padding: "0",
  maxWidth: "450px",
  width: "100%",

  "@media (max-width: 768px)": {
    maxWidth: "350px",
    margin: "0",
  },
});

export const ImageContainer = styled("div", {
  width: "150px",
  height: "150px",
});
