import { styled } from "../../../themes";

export const Button = styled("button", {
  background: "$primary",
  border: "none",
  borderRadius: "4px",
  color: "$white",
  cursor: "pointer",
  fontSize: "1rem",
  fontWeight: "bold",
  padding: "0.5rem 1rem",
  transition: "$default",
  width: "100%",
  maxWidth: "300px",

  "&:hover": {
    boxShadow: "$defaultHover",
  },

  variants: {
    noShadow: {
      true: {
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none",
        },
      },
    },
    secondary: {
      true: {
        background: "$secondary",
        color: "$black",
      },
    },
  },
});
