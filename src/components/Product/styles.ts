import { styled } from "../../themes";

export const Section = styled("section", {
  alignItems: "center",
  background: "$white",
  boxShadow: "$default",
  display: "flex",
  flexDirection: "column",
  height: "410px",
  maxWidth: "350px",
  position: "relative",
  transition: "$default",
  width: "100%",

  "& > div": {
    background: "none",
    maxWidth: "200px",
    width: "100%",
  },

  variants: {
    hover: {
      true: {
        "&:hover": {
          boxShadow: "$defaultHover",
        },
      },
    },
  },
});

export const ProductDetails = styled("p", {
  color: "$black",
});
