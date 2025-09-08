import { InformationForm } from '../type/information-form';
import { AddNewProduct, Products } from '../type/products';

const BASE_URL = 'https://dummyjson.com';

export async function getProductsApi(limit = 10, skip = 0): Promise<Products> {
  const query = new URLSearchParams({
    limit: String(limit),
    skip: String(skip),
    select: 'title,price,sku,stock,category,thumbnail,meta'
  });

  const res = await fetch(`${BASE_URL}/products?${query.toString()}`, {
    cache: 'no-store'
  });
  if (!res.ok) {
    throw new Error('Failed to get product list');
  }
  return res.json();
}
export async function deleteProductApi(id: number) {
  return await fetch(`${BASE_URL}/products/${id}`, { method: 'DELETE' });
}

export async function getCategoryListApi() {
  const res = await fetch(`${BASE_URL}/products/category-list`, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to get product category');
  }
  return res.json();
}

export async function getProductApi(id: number) {
  const res = await fetch(`${BASE_URL}/products/${id}`, { method: 'GET' });
  if (!res.ok) {
    throw new Error('Failed to get product');
  }
  return res.json();
}

export async function updateProductApi(id: number, data: InformationForm) {
  const res = await fetch(`${BASE_URL}/products/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data)
  });
  if (!res.ok) {
    throw new Error('Failed to update product');
  }

  return res.json();
}

export async function addProductApi(product: AddNewProduct) {
  return await fetch(`${BASE_URL}/product/add`, {
    method: 'POST',
    body: JSON.stringify(product)
  });
}
