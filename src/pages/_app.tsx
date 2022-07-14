import { useAtomValue } from "jotai";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import store from "../store";
import { globalStyles } from "../themes";
import { darkTheme } from "../themes/dark";

function MyApp({ Component, pageProps }: AppProps) {
  const currentTheme = useAtomValue(store.theme);
  globalStyles();

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme={currentTheme}
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
