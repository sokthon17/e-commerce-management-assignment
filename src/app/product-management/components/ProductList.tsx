import { getProducts } from "@/core/api/api.products";

export async function ProductList() {
  const { products, total, skip, limit } = await getProducts(10, 1);

  return (
    <div>
      {products &&
        products.map((item, idx) => (
          <div key={idx}>
            <p className="text-sm">{item.title}</p>
          </div>
        ))}
    </div>
  );
}
