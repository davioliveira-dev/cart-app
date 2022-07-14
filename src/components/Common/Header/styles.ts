import { styled } from "../../../themes";

export const StyledHeader = styled("header", {
  alignItems: "center",
  background: "$white",
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "1rem",
  padding: "0 3rem",
  width: "100%",

  "& > h1": {
    color: "$black",
  },
});
