import { Products } from "../type/products";

const BASE_URL = "https://dummyjson.com";

export async function getProducts(limit = 10, skip = 0): Promise<Products> {
  const query = new URLSearchParams({
    limit: String(limit),
    skip: String(skip),
    select: "title,price,sku,stock,category,thumbnail,meta",
  });

  const res = await fetch(`${BASE_URL}/products?${query.toString()}`, {
    cache: "no-store",
  });

  return res.json();
}
