import CategoryForm from '@/components/category/category-form';
import { Suspense } from 'react';
import FormSkeleton from '@/components/loadings/form-skeleton';

export const metadata = {
  title: 'Edit FAQ - Prisko Jr Mod',
};

export default async function CategoryEditPage({ params }) {
  const { id } = await params;

  return (
    <>
      <h1 className="text-2xl mb-7 font-bold">Edit FAQ</h1>
      <Suspense fallback={<FormSkeleton />}>
        <CategoryForm id={id} />
      </Suspense>
    </>
  );
}
