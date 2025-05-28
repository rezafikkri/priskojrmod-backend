import { getPrivacyPolicy } from '@/lib/services/privacy-policy-service';
import EditForm from './edit-form';

export default async function PrivacyPolicyForm() {
  const privacyPolicy = await getPrivacyPolicy();
  return <EditForm privacyPolicy={privacyPolicy} />
}
