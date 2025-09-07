'use client';
import { BaseButton } from '@/core/component/BaseButton';
import clsx from 'clsx';
import { useState } from 'react';
import { ProductCategories } from '../constants/category.constants';

export function ProductCategory() {
  const [isCategory, setIsCategory] = useState<ProductCategories>(ProductCategories.All);
  const categories = Object.values(ProductCategories);

  return (
    <div className="outline_gray_300 flex w-fit gap-3 p-1">
      {categories.map((category, idx) => (
        <BaseButton
          key={idx}
          action={() => setIsCategory(category)}
          label={category}
          className={clsx(
            'flex h-full cursor-pointer items-center rounded-md px-2 py-1 text-sm leading-5 outline-transparent transition',
            isCategory === category
              ? 'bg-blue-700/15 text-blue-700 outline outline-solid'
              : 'text-gray-700 hover:bg-gray-200 hover:outline hover:outline-solid'
          )}
        />
      ))}
    </div>
  );
}
