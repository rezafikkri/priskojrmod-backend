import CreateForm from '@/components/secret-key/create-form';
import { headers } from 'next/headers';

export default async function CreateSecretKey() {
  const h = await headers();
  const csrfToken = h.get('X-CSRF-Token') || 'missing';

  return (
    <>
      <h1 className="text-xl mb-7 font-bold">Create Secret Key</h1>
      <CreateForm csrfToken={csrfToken} />
    </>
  );
}
