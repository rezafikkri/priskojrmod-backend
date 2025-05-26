import { Button } from '@/components/ui/button';
import Link from 'next/link';
import SecretKeysTable from '@/components/secret-key/secret-keys-table';
import { Suspense } from 'react';
import TableSekeleton from '@/components/loadings/table-skeleton';

export const metadata = {
  title: 'Secret Key - Prisko Jr Mod',
};

export default async function SecretKeyListPage() {
  return (
    <>
      <h1 className="text-2xl mb-1 font-bold">Secret Keys</h1>
      <h2 className="text-zinc-700 dark:text-zinc-300/80 mb-7">The Secret Key is used to generate License Keys for the application.</h2>
      
      <Button asChild variant="outline" className="mb-5 h-auto text-base px-3 py-1.5">
        <Link href="/secret-key/new">Create Secret Key</Link>
      </Button>
      
      <Suspense fallback={<TableSekeleton />}>
        <SecretKeysTable />
      </Suspense>
    </>
  );
}
