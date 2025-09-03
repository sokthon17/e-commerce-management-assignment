export interface Product {
  id: number;
  title: string;
  price: number;
  sku?: string;
  stock?: number;
  category?: string;
  thumbnail?: string;
}

export interface Products {
  products: Product[];
  total: number;
  skip?: number;
  limit?: number;
}
