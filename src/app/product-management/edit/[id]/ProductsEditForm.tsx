'use client';
import BreadCrumbs from '@/core/component/Breadcrumbs';
import { Breadcrumbs } from '@/core/type/breadcrumbs';
import { SingleProduct } from '@/core/type/products';

export function ProductsEditForm({ product }: { product: SingleProduct }) {
  const breadcrumbs: Breadcrumbs = [
    { label: 'Product', url: '/product-management' },
    { label: 'Edit Product' }
  ];
  return (
    <div className="flex gap-4">
      <BreadCrumbs breadcrumbs={breadcrumbs} />
      {JSON.stringify(product)}
    </div>
  );
}
