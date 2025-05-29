import CategoriesTable from '@/components/category/categories-table';
import TableSekeleton from '@/components/loadings/table-skeleton';
import { Suspense } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata = {
  title: 'Categories - Prisko Jr Mod',
};

export default function CategoryListPage() {
  return (
    <>
      <h1 className="text-2xl mb-7 font-bold">Categories</h1>

      <Button asChild variant="outline" className="mb-5 h-auto text-base px-3 py-1.5">
        <Link href="/category/new">Create Category</Link>
      </Button>

      <Suspense fallback={<TableSekeleton />}>
        <CategoriesTable />
      </Suspense>
    </>
  );
}
