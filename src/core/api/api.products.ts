import { InformationForm } from '../type/information-form';
import { Products } from '../type/products';

const BASE_URL = 'https://dummyjson.com';

export async function getProducts(limit = 10, skip = 0): Promise<Products> {
  const query = new URLSearchParams({
    limit: String(limit),
    skip: String(skip),
    select: 'title,price,sku,stock,category,thumbnail,meta'
  });

  const res = await fetch(`${BASE_URL}/products?${query.toString()}`, {
    cache: 'no-store'
  });

  return res.json();
}
export async function deleteProduct(id: number) {
  return await fetch(`${BASE_URL}/products/${id}`, { method: 'DELETE' });
}

export async function getCategoryList() {
  const res = await fetch(`${BASE_URL}/products/category-list`, { cache: 'no-store' });
  return res.json();
}

export async function getProduct(id: number) {
  const res = await fetch(`${BASE_URL}/products/${id}`, { method: 'GET' });
  return res.json();
}

export async function updateProduct(id: number, data: InformationForm) {
  const res = await fetch(`${BASE_URL}/products/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  if (!res.ok) {
    throw new Error('Failed to update product');
  }

  return res.json();
}
