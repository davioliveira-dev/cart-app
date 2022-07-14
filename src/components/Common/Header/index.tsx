import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import { CartIcon, MoonIcon } from "../icons";
import { SunIcon } from "../icons/SunIcon";
import { StyledHeader } from "./styles";

export const Header = () => {
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  return (
    <StyledHeader>
      <h1>Carrin Feliz</h1>
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}
      >
        <CartIcon width={35} height={35} onClick={() => router.push("/cart")} />
        {theme === "light" ? (
          <div
            style={{ cursor: "pointer", marginTop: "-1px" }}
            onClick={() => setTheme("dark")}
          >
            <MoonIcon width={35} height={35} />
          </div>
        ) : (
          <div
            style={{ cursor: "pointer", marginTop: "1px" }}
            onClick={() => setTheme("light")}
          >
            <SunIcon width={35} height={35} />
          </div>
        )}
      </div>
    </StyledHeader>
  );
};
