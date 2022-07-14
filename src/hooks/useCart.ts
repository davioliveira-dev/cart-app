import { useAtom } from "jotai";
import store from "../store";
import { Product } from "../types";

export const useCart = () => {
  const [cart, setCart] = useAtom(store.cart);

  const addToCart = (product: Product) => {
    const isProductInCart = cart.products.find((p) => p.id === product.id);

    const quantity = isProductInCart ? ++isProductInCart.quantity : 1;

    const price = quantity * product.price;

    const item = {
      id: product.id,
      quantity,
      price,
    };

    setCart({ ...cart, products: [...cart.products, item] });

    return;
  };

  const removeOneFromCart = (product: Product) => {
    const isProductInCart = cart.products.find((p) => p.id === product.id);

    if (!isProductInCart) {
      return;
    }

    const quantity = --isProductInCart.quantity;

    const price = quantity * product.price;

    const item = {
      id: product.id,
      quantity,
      price,
    };

    const products = cart.products.filter((p) => p.id !== product.id);

    setCart({ ...cart, products: [...products, item] });

    return;
  };

  const removeFromCart = (product: Product) => {
    const products = cart.products.filter((item) => item.id !== product.id);
    setCart({ ...cart, products });

    return;
  };

  const clearCart = () => {
    setCart({ ...cart, products: [] });
    return;
  };

  const getQuantityByProductId = (productId: string) => {
    const product = cart.products.find((p) => p.id === productId);
    return product ? product.quantity : 0;
  };

  const getCartItems = () => {
    const ids = new Set<string>();
    const products = cart.products.filter((p) => {
      if (ids.has(p.id)) {
        return false;
      }
      ids.add(p.id);
      return true;
    });

    const removeProductsWithZeroQuantity = products.filter(
      (p) => p.quantity > 0
    );

    return removeProductsWithZeroQuantity;
  };

  const getTotalProducts = () => getCartItems().length;

  const getTotalPrice = () => {
    const products = getCartItems();
    const prices = products.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
    return prices;
  };

  return {
    cart,
    addToCart,
    removeOneFromCart,
    removeFromCart,
    clearCart,
    getQuantityByProductId,
    getTotalProducts,
    getCartItems,
    getTotalPrice,
  };
};
