import { getAccount } from '@/lib/services/account-settings-service';
import { EditForm } from './edit-form';

export default async function AccountSettingsForm() {
  const account = await getAccount();
  return <EditForm account={account} />;
}
