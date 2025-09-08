'use client';
import { BaseButton } from '@/core/component/BaseButton';
import { SearchInputComponent } from '@/core/component/SearchInput';
import { useRouter } from 'next/navigation';
import { DateSelection } from '../../../core/component/DateSelection';
import { ProductCategory } from './ProductCategory';
import ProductFilter from './ProductFilter';

export default function ProductTopActions() {
  const EXPORT_ICON = '/svg/export-blue-500.svg';
  const ADD_ICON = '/svg/add-white-20.svg';
  const router = useRouter();
  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-[1fr_auto_auto] gap-4">
        <SearchInputComponent placeholder="Search order. . ." />
        <BaseButton
          icon={EXPORT_ICON}
          label="Export"
          className="bg-blue-700/15 px-3.5 py-2.5 text-blue-700 outline-transparent"
        />
        <BaseButton
          icon={ADD_ICON}
          label="Add Product"
          action={() => router.push('/product-management/new-product')}
          className="bg-blue-700 px-3.5 py-2.5 text-white outline-transparent"
        />
      </div>
      <div className="flex justify-between not-xl:flex-col-reverse not-xl:gap-5">
        <ProductCategory />
        <div className="grid grid-cols-[1fr_auto_auto] gap-4">
          <SearchInputComponent placeholder="Search product. . ." />
          <DateSelection />
          <ProductFilter />
        </div>
      </div>
    </div>
  );
}
