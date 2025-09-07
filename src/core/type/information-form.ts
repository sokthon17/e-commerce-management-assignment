export interface InformationForm {
  name: string;
  description: string;
  price: number;
  discount: number;
  sku: string;
  quantity: number;
}

export type Method = 'PUT' | 'POST';
