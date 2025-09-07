import { DasboardContentLayout } from '@/core/component/DasboardContentLayout';
import { ProductList } from './components/ProductList';
import { ProductTopActions } from './components/ProductTopActions';

export default async function ProductManagementComponent() {
  return (
    <DasboardContentLayout title="Product">
      <ProductTopActions />
      <ProductList />
    </DasboardContentLayout>
  );
}
