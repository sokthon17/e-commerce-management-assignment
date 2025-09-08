'use client';

import { useEffect, useState } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { getCategoryListApi } from '../api/api.products';
import { InformationForm } from '../type/information-form';

interface CategorySelectProps {
  register: UseFormRegister<InformationForm>;
  option?: string;
}

export default function CategorySelect({ register, option }: CategorySelectProps) {
  const [categories, setCategories] = useState<string[]>([]);
  useEffect(() => {
    async function fetchCategories() {
      const data = await getCategoryListApi();
      setCategories(data);
    }
    fetchCategories();
  }, []);

  return (
    <label className="flex flex-col gap-1">
      <span className="text-sm font-medium text-gray-500">Category</span>
      <select
        {...register('category', { required: 'Category is required' })}
        className="outline_gray_300 h-10 w-full bg-gray-50 px-3 py-2 text-sm text-gray-700"
        defaultValue={option || ''}
      >
        <option value="" disabled>
          Select a category
        </option>
        {categories.map((c, idx) => (
          <option key={idx} value={c}>
            {c}
          </option>
        ))}
      </select>
    </label>
  );
}
