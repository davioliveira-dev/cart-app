import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { Cart } from "../types/Cart";

const store = {
  cart: atom<Cart>({ products: [] }),
  theme: atomWithStorage<"light" | "dark">("theme", "light"),
};

export default store;
