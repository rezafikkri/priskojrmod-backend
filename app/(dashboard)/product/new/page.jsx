import FormSkeleton from '@/components/loadings/form-skeleton';
import ProductForm from '@/components/product/product-form';
import { CreateProductStoreProvider } from '@/lib/providers/create-product-store-provider';
import { Suspense } from 'react';

export const metadata = {
  title: 'Create Product',
};

export default function CreateProductPage() {
  return (
    <CreateProductStoreProvider>
      <h1 className="text-2xl mb-7 font-bold">Create Product</h1>

      <Suspense fallback={<FormSkeleton />}>
        <ProductForm />
      </Suspense>
    </CreateProductStoreProvider>
  );
}
