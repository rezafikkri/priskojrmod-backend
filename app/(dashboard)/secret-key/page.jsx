import { Button } from '@/components/ui/button';
import Link from 'next/link';
import verifySession from '@/lib/verifySession';
import SecretKeysTable from '@/components/secret-key/secret-keys-table';
import { Suspense } from 'react';
import TableSekeleton from '@/components/loadings/table-skeleton';

export const metadata = {
  title: 'Secret Key - Prisko Jr Mod',
};

export default async function SecretKey() {
  const session = await verifySession();
  if (!session) return null;

  return (
    <>
      <h1 className="text-xl mb-1 font-bold">Secret Key</h1>
      <h2 className="text-zinc-700 dark:text-zinc-300/80 mb-6">Secret key is used for generate license key for application.</h2>
      
      <Button asChild variant="outline" className="mb-5 h-auto text-base px-3 py-1.5">
        <Link href="/secret-key/create">Create Secret</Link>
      </Button>
      
      <Suspense fallback={<TableSekeleton />}>
        <SecretKeysTable />
      </Suspense>
    </>
  );
}
