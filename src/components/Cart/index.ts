import { styled } from "../../themes";
import { Button } from "../Common/Button";

export const Main = styled("main", {
  alignItems: "center",
  display: "flex",
  background: "$background",
  flexDirection: "column",
  height: "100%",
  minHeight: "100vh",
  justifyContent: "center",
  padding: "2rem 0",
  width: "auto",

  "@media (max-width: 768px)": {
    "& > ul": {
      margin: 0,
      padding: "0",
    },
  },
});

export const Title = styled("h1", {
  display: "block",
  borderBottom: "$borderColor 2px solid",
  color: "$black",
  fontSize: "1.5rem",
  marginTop: "-10px",
  padding: "10px",
  textAlign: "center",

  "& > div": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },

  variants: {
    total: {
      true: {
        alignItems: "center",
        borderTop: "$borderColor 2px solid",
        display: "flex",
        flexDirection: "column",
        marginBottom: "30px",
      },
    },
  },
});

export const CheckoutButton = styled(Button, {
  maxWidth: "none",
});

export const FreightBonus = styled("article", {
  background: "$secondary",
  border: "none",
  borderRadius: "20px",
  color: "$green",
  display: "grid",
  fontSize: "1rem",
  padding: "0.5rem 1rem",
  margin: "1.2rem",
  placeItems: "center",
  width: "100%",
});

export const ReturnButton = styled(Button, {
  maxWidth: "none",
  margin: "1rem 0",
});

export const NoData = styled("div", {
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  height: "81.6vh",
  justifyContent: "center",
  marginBottom: "8.7rem",
  width: "100%",

  "& > div": {
    width: "300px",
  },

  "& > button": {
    marginTop: "1rem",
  },
});
