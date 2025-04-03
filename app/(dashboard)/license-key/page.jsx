import { Button } from '@/components/ui/button';
import Link from 'next/link';
import verifySession from '@/lib/verifySession';

export const metadata = {
  title: 'License Key - Prisko Jr Mod',
};

export default async function LicenseKey() {
  const session = await verifySession();
  if (!session) return null;

  return (
    <>
      <h1 className="text-xl mb-1 font-bold">License Key</h1>
      <h2 className="text-zinc-700 dark:text-zinc-300/80 mb-5">For now, License Key only used to activate Sider Manager application.</h2>
      
      <Button asChild variant="outline" className="mb-7">
        <Link href="/license-key/create">Create License</Link>
      </Button>
    </>
  );

}
