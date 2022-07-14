import { styled } from "../../../../themes";

export const Svg = styled("svg", {
  color: "$black",
  cursor: "pointer",
  variants: {
    showCount: {
      true: {
        position: "relative",
      },
    },
  },
});

export const Count = styled("span", {
  background: "$primary",
  borderRadius: "50%",
  color: "$white",
  fontSize: "0.8rem",
  height: "22px",
  padding: "0.15rem",
  textAlign: "center",
  position: "absolute",
  right: "-0.5rem",
  top: "-0.5rem",
  width: "22px",
});
