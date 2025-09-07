'use client';
import { getProducts } from '@/core/api/api.products';
import Loading from '@/core/component/Loading';
import Pagination from '@/core/component/Pagination';
import { Product } from '@/core/type/products';
import { useEffect, useState } from 'react';
import ProductListTable from './ProductListTable';

export function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const limit = 10;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      setIsLoading(true);
      try {
        const { products, total } = await getProducts(limit, (page - 1) * limit);
        setProducts(products);
        setTotal(total);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProducts();
  }, [page]);

  return (
    <>
      {isLoading ? (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          <Loading />
        </div>
      ) : (
        <>
          <ProductListTable products={products} />
          <Pagination total={total} limit={limit} currentPage={page} onPageChange={setPage} />
        </>
      )}
    </>
  );
}
