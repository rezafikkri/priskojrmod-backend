import { getSecretKeys } from '@/lib/services/secret-key-service';
import CreateForm from './create-form';
import { getLicenseKey } from '@/lib/services/license-key-service';
import EditForm from './edit-form';
import jwt from 'jsonwebtoken';
import {
  Alert,
  AlertTitle,
} from '../ui/alert';
import Error404 from '../icon/error-404';

export default async function LicenseKeyForm({ action = 'create', id = null }) {
  const secretKeys = await getSecretKeys({ id: true, app_name: true });

  if (action === 'create') {
    return <CreateForm secretKeys={secretKeys} />
  }

  const licenseKey = await getLicenseKey(id);
  if (!licenseKey) {
    return (
      <Alert className="lg:max-w-2/3">
        <Error404 />
        <AlertTitle>License key not found.</AlertTitle>
      </Alert>
    );
  }

  licenseKey.parsedKey = jwt.decode(licenseKey.key);
  return <EditForm secretKeys={secretKeys} licenseKey={licenseKey} />
}
