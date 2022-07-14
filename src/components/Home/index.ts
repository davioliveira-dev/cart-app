import { styled } from "../../themes";

export const Container = styled("div", {
  display: "flex",
  background: "$background",
  flexDirection: "column",
  height: "auto",
  paddingBottom: "2rem",
  width: "auto",
});

export const Main = styled("main", {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
  gap: "1rem",
  placeItems: "center",
  padding: "0 3rem",
  width: "100%",
});
