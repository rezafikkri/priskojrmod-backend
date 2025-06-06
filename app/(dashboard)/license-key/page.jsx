import LicenseKeysTable from '@/components/license-key/license-keys-table';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata = {
  title: 'License Key',
};

export default async function LicenseKeyListPage() {
  return (
    <>
      <h1 className="text-2xl mb-1 font-bold">License Keys</h1>
      <h2 className="text-zinc-700 dark:text-zinc-300/80 mb-7">For now, the License Key is only used to activate the Sider Manager application.</h2>

      <Button asChild variant="outline" className="w-full md:w-auto h-auto text-base px-3 py-1.5 mb-6">
        <Link href="/license-key/new">Create License Key</Link>
      </Button>
      
      <LicenseKeysTable />
    </>
  );
}
