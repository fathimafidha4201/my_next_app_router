import { fetchAPI } from "./services_base";
export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  thumbnail: string;
  images: string[];
  rating: number;
  stock: number;
}
export async function getAllProducts(): Promise<Product[]> {
  const data = await fetchAPI("/products");
  return data.products;
}

export async function getProductById(id: string): Promise<Product> {
  return fetchAPI(`/products/${id}`);
}