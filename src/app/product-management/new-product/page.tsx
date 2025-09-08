'use client';

import { addProductApi } from '@/core/api/api.products';
import { DasboardContentLayout } from '@/core/components/DasboardContentLayout';
import Loading from '@/core/components/Loading';
import PageActionLayout from '@/core/components/PageActionLayout';
import { Breadcrumbs } from '@/core/type/breadcrumbs';
import { ConfirmationActionProps } from '@/core/type/confirmation-action';
import { InformationForm } from '@/core/type/information-form';
import { useRouter } from 'next/navigation';
import { Suspense } from 'react';

export default function AddProductPage() {
  const router = useRouter();

  const handleSubmit = async (data: InformationForm) => {
    try {
      await addProductApi(data);
      router.push('/product-management');
    } catch (error) {
      console.error('Error Adding product:', error);
    }
  };

  const breadcrumbs: Breadcrumbs = [
    { label: 'Product', url: '/product-management' },
    { label: 'Add Product' }
  ];

  const confirmationAction: ConfirmationActionProps = {
    cancel: {
      label: 'Cancel',
      action: () => router.back()
    },
    process: {
      label: 'Save Product',
      icon: '/svg/add-white-20.svg',
      action: () => {}
    }
  };

  return (
    <DasboardContentLayout title="Add Product">
      <Suspense
        fallback={
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
            <Loading />
          </div>
        }
      >
        <PageActionLayout
          confirmationAction={confirmationAction}
          method="POST"
          breadcrumbs={breadcrumbs}
          onSubmit={handleSubmit}
        />
      </Suspense>
    </DasboardContentLayout>
  );
}
