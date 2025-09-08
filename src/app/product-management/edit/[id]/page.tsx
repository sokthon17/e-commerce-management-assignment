import { getProductApi } from '@/core/api/api.products';
import { DasboardContentLayout } from '@/core/components/DasboardContentLayout';
import Loading from '@/core/components/Loading';
import { Suspense } from 'react';
import { ProductsEditForm } from './ProductsEditForm';

export default async function EditProductPage({ params }: { params: Promise<{ id: number }> }) {
  const { id } = await params;
  const product = await getProductApi(id);
  return (
    <DasboardContentLayout title="Edit Product">
      <Suspense
        fallback={
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
            <Loading />
          </div>
        }
      >
        <ProductsEditForm product={product} />
      </Suspense>
    </DasboardContentLayout>
  );
}
