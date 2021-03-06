import { styled } from "../../themes";
import { Button } from "../Common/Button";

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

export const ProductDetails = styled("div", {
  color: "$black",
});

export const ButtonsContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "80%",
});

export const ButtonWithIcon = styled(Button, {
  display: "grid",
  placeItems: "center",
  width: "auto",
});
