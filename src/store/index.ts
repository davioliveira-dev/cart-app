import { atom } from "jotai";
import { Cart } from "../types/Cart";

const store = {
  cart: atom<Cart>({ products: [] }),
};

export default store;
