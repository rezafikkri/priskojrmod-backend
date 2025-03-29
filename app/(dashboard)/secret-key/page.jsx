import { Button } from '@/components/ui/button';
import Link from 'next/link';
import DataTable from '@/components/secret-key/data-table';
import { getSecretKeys } from '@/lib/services/secret-key-service';

export default async function SecretKey() {
  const secretKeys = await getSecretKeys();

  return (
    <>
      <h1 className="text-xl mb-1 font-bold">Secret Key</h1>
      <h2 className="text-zinc-700 dark:text-zinc-300/80 mb-5">Secret key is used for generate License Key for application.</h2>
      
      <Button asChild variant="outline" className="mb-7">
        <Link href="/secret-key/create">Create Secret</Link>
      </Button>

      <DataTable secretKeys={secretKeys} />
    </>
  );
}
