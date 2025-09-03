import { DasboardContentLayout } from "@/core/component/DasboardContentLayout";
import Loading from "@/core/component/Loading";
import { Suspense } from "react";
import { ProductList } from "./components/ProductList";
import { ProductTopActions } from "./components/ProductTopActions";

export default async function ProductManagementComponent() {
  return (
    <DasboardContentLayout title="Product">
      <ProductTopActions />
      <Suspense
        fallback={
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Loading />
          </div>
        }
      >
        <ProductList />
      </Suspense>
    </DasboardContentLayout>
  );
}
