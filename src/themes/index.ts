import { createStitches } from "@stitches/react";

const { theme, styled, globalCss, createTheme, getCssText } = createStitches({
  theme: {
    colors: {
      background: "#d1d8e5",
      black: "#050000",
      white: "#ffffff",
      green: "#217a00",
      primary: "#3b74f2",
      secondary: "#c7ffa6",
      borderColor: "#c4c4c4",
    },
    shadows: {
      default: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
      defaultHover:
        "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);",
    },
    transitions: {
      default: "all 0.3s cubic-bezier(.25,.8,.25,1)",
    },
  },
});

const globalStyles = globalCss({
  body: {
    padding: 0,
    margin: 0,
    fontFamily: `Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
  },
  a: {
    color: "inherit",
    textDecoration: "none",
  },
  "*": {
    boxSizing: "border-box",
  },
  "button, input, textarea": {
    fontFamily: `Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
  },
});

export { theme, styled, globalStyles, createTheme, getCssText };
