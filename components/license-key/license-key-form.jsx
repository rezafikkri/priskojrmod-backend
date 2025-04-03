import { getSpecificSecretKeys } from '@/lib/services/secret-key-service';
import verifySession from '@/lib/verifySession';
import CreateForm from './create-form';

export default async function LicenseKeyForm() {
  const session = await verifySession();
  if (!session) return null;

  const secretKeys = await getSpecificSecretKeys({ id: true, app_name: true });

  return <CreateForm secretKeys={secretKeys} />
}
