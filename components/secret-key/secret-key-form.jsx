import RegenerateForm from '@/components/secret-key/regenerate-form';
import { getSecretKey } from '@/lib/services/secret-key-service';
import {
  Alert,
  AlertTitle,
} from '../ui/alert';
import Error404 from '../icon/error-404';

export default async function SecretKeyForm({ id }) {
  const secretKey = await getSecretKey(id);
  if (!secretKey) {
    return (
      <Alert className="lg:max-w-2/3">
        <Error404 />
        <AlertTitle>Secret key not found.</AlertTitle>
      </Alert>
    );
  }

  return <RegenerateForm secretKey={secretKey} />;
}
