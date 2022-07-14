import { useRouter } from "next/router";
import { CartIcon } from "../CartIcon";
import { StyledHeader } from "./styles";

export const Header = () => {
  const router = useRouter();

  return (
    <StyledHeader>
      <h1>Carrin Feliz</h1>
      <CartIcon width={35} height={35} onClick={() => router.push("/cart")} />
    </StyledHeader>
  );
};
