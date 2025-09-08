import { deleteProductApi } from '@/core/api/api.products';
import BaseFullTable from '@/core/components/BaseFullTable';
import CheckboxComponent from '@/core/components/Checkbox';
import ConfirmDialog from '@/core/components/ConfirmDialog';
import { Product } from '@/core/type/products';
import { TableHeader } from '@/core/type/table-type';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { dateFormat } from '../utils/date-formated';

export default function ProductListTable({ products }: { products: Product[] }) {
  const [selected, setSelected] = useState<number[]>([]);
  const [, setProduct] = useState(products);
  const [brokenImages, setBrokenImages] = useState({});
  const handleError = (index) => {
    setBrokenImages((prev) => ({ ...prev, [index]: true }));
  };

  const toggleSelectAll = () => {
    if (selected.length === products.length) {
      setSelected([]);
    } else {
      setSelected(products.map((p) => p.id));
    }
  };

  const toggleSelect = (id: number) => {
    setSelected((prev) => (prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id]));
  };

  const handleDelete = async (id: number) => {
    setProduct((prev) => prev.filter((p) => p.id !== id));
    deleteProductApi(id);
  };

  const tableHeader: TableHeader[] = [
    {
      label: 'Product',
      bulkSelect: (
        <CheckboxComponent
          checked={selected.length === products.length}
          onChange={toggleSelectAll}
          icons="/svg/checkbox-bulk-white.svg"
        />
      )
    },
    {
      label: 'SKU'
    },
    {
      label: 'Category'
    },
    {
      label: 'Stock'
    },
    {
      label: 'Price'
    },
    {
      label: 'Added'
    },
    {
      label: 'Action'
    }
  ];
  return (
    <BaseFullTable
      header={tableHeader}
      bodyClass={(item) => clsx(selected.includes(item.id) && 'bg-[#F9F9FC]')}
      data={products}
      body={(item) => [
        {
          th: (
            <div className="flex items-center gap-3">
              <CheckboxComponent
                checked={selected.includes(item.id)}
                onChange={() => toggleSelect(item.id)}
              />
              <div className="flex gap-2">
                <Image
                  className="border border-solid border-transparent object-contain"
                  src={
                    brokenImages[item.id] || !item.thumbnail
                      ? '/image/default-product.jpg'
                      : item.thumbnail
                  }
                  alt={item.title}
                  width={44}
                  height={44}
                  onError={() => handleError(item.id)}
                />
                <div className="flex flex-col gap-1">
                  <p>{item.title}</p>
                  <p>{item.id} Varient</p>
                </div>
              </div>
            </div>
          )
        },
        {
          td: <span className="text-blue-700">{item.sku}</span>
        },
        {
          td: item.category
        },
        {
          td: item.stock
        },
        {
          td: `$ ${item.price}`
        },
        {
          td: dateFormat(item.meta.createdAt)
        },
        {
          td: (
            <div className="flex items-center gap-3">
              <Link href={`/product-management/edit/${item.id}`}>
                <Image src="/svg/edit-gray-500-16.svg" alt="edit product" width={16} height={16} />
              </Link>
              <ConfirmDialog
                name={item.title}
                action={() => handleDelete(item.id)}
                icon="/svg/bin-gray-500-16.svg"
              />
            </div>
          )
        }
      ]}
    />
  );
}
