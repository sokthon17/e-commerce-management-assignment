'use client';
import PageActionLayout from '@/core/component/PageActionLayout';
import { Breadcrumbs } from '@/core/type/breadcrumbs';
import { InformationForm } from '@/core/type/information-form';
import { SingleProduct } from '@/core/type/products';

export function ProductsEditForm({ product }: { product: SingleProduct }) {
  const breadcrumbs: Breadcrumbs = [
    { label: 'Product', url: '/product-management' },
    { label: 'Edit Product' }
  ];
  const information: InformationForm = {
    name: product.title,
    description: product.description,
    price: product.price,
    discount: product.discountPercentage,
    sku: product.sku,
    quantity: product.stock
  };
  return (
    <PageActionLayout
      id={product.id}
      method="PUT"
      breadcrumbs={breadcrumbs}
      information={information}
    />
  );
}
