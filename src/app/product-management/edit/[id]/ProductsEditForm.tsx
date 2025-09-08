'use client';

import { updateProductApi } from '@/core/api/api.products';
import PageActionLayout from '@/core/components/PageActionLayout';
import { Breadcrumbs } from '@/core/type/breadcrumbs';
import { ConfirmationActionProps } from '@/core/type/confirmation-action';
import { InformationForm } from '@/core/type/information-form';
import { SingleProduct } from '@/core/type/products';
import { useRouter } from 'next/navigation';

export function ProductsEditForm({ product }: { product: SingleProduct }) {
  const router = useRouter();

  const breadcrumbs: Breadcrumbs = [
    { label: 'Product', url: '/product-management' },
    { label: 'Edit Product' }
  ];

  const handleSubmit = async (data: InformationForm) => {
    try {
      await updateProductApi(product.id, data);
      router.push('/product-management');
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  const confirmationAction: ConfirmationActionProps = {
    cancel: {
      label: 'Cancel',
      action: () => router.back()
    },
    process: {
      label: 'Save Product',
      action: () => {}
    }
  };
  const information: InformationForm = {
    name: product.title,
    description: product.description,
    price: product.price,
    discount: product.discountPercentage,
    sku: product.sku,
    quantity: product.stock,
    category: product.category
  };
  return (
    <PageActionLayout
      confirmationAction={confirmationAction}
      method="PATCH"
      information={information}
      breadcrumbs={breadcrumbs}
      onSubmit={handleSubmit}
    />
  );
}
