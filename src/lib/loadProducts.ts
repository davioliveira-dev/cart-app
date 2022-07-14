import { Product } from "../types";
import { fetcher } from "../utils/fetcher";

export async function loadProducts() {
  const products = await fetcher<Product[]>("/api/products");
  return products;
}
