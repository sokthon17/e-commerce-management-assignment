export interface Product extends ProductDetail {
  id: number;
  thumbnail?: string;
  meta: Meta;
}

export interface Products {
  products: Product[];
  total: number;
  skip?: number;
  limit?: number;
}

export interface SingleProduct extends Product {
  description: string;
  discountPercentage: number;
  rating: number;
  tags?: string[];
  brand: string;
  weight?: number;
  dimensions?: Dimension;
  warrantyInformation?: string;
  shippingInformation?: string;
  availabilityStatus?: string;
  reviews?: Review[];
  returnPolicy: string;
  minimumOrderQuantity?: number;
  images?: string[];
}

export interface Meta {
  barcode: string;
  createdAt: string;
  qrCode: string;
  updatedAt: string;
}

export interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName?: string;
  reviewerEmail?: string;
}

export interface Dimension {
  width: number;
  height: number;
  depth: number;
}

export interface ProductDetail {
  title: string;
  price: number;
  description: string;
  category: string;
  sku: string;
  stock: number;
}

export interface AddNewProduct {
  name: string;
  description: string;
  price: number;
  discount: number;
  sku: string;
  quantity: number;
}
