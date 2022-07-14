import { Product } from "../types";
import { fetcher } from "../utils/fetcher";

export async function loadProduct(id: string) {
  const data = await fetcher<Product>(`/api/products/${id}`);
  return data;
}
