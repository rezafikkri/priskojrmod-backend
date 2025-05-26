import FaqsTable from '@/components/faq/faqs-table';
import TableSekeleton from '@/components/loadings/table-skeleton';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Suspense } from 'react';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'FAQs - Prisko Jr Mod',
};

export default function FaqListPage() {
  return (
    <>
      <h1 className="text-2xl mb-1 font-bold">FAQs</h1>
      <h2 className="text-zinc-700 dark:text-zinc-300/80 mb-7">List of all Frequently Asked Questions</h2>

      <Button asChild variant="outline" className="mb-5 h-auto text-base px-3 py-1.5">
        <Link href="/faq/new">Create FAQ</Link>
      </Button>

      <Suspense fallback={<TableSekeleton />}>
        <FaqsTable />
      </Suspense>
    </>
  );
}
