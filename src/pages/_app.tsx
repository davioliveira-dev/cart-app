import { ThemeProvider, useTheme } from "next-themes";
import type { AppProps } from "next/app";
import { globalStyles } from "../themes";
import { darkTheme } from "../themes/dark";

function MyApp({ Component, pageProps }: AppProps) {
  const { theme } = useTheme();

  globalStyles();

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme={theme}
      value={{
        light: "light",
        dark: darkTheme.className,
      }}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
