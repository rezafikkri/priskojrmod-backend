import LicensesTable from '@/components/license/licenses-table';
import TableSekeleton from '@/components/loadings/table-skeleton';
import { Suspense } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Licenses',
};

export default function LicenseListPage() {
  return (
    <>
      <h1 className="text-2xl mb-1 font-bold">Licenses</h1>
      <h2 className="text-zinc-700 dark:text-zinc-300/80 mb-7">List of product usage rules, explaining what users are allowed and not allowed to do.</h2>

      <Button asChild variant="outline" className="mb-5 h-auto text-base px-3 py-1.5">
        <Link href="/license/new">Create License</Link>
      </Button>

      <Suspense fallback={<TableSekeleton />}>
        <LicensesTable />
      </Suspense>
    </>
  );
}
