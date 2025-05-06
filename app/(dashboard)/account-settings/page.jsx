import AccountSettingsForm from "@/components/account-settings/account-settings-form";
import { Suspense } from "react";

export const metadata = {
  title: 'Account Settings - Prisko Jr Mod',
};

export default function AccountSettings() {
  return (
    <>
      <h1 className="text-xl mb-7 font-bold">Account Settings</h1>
      <Suspense fallback={'Loading...'}>
        <AccountSettingsForm />
      </Suspense>
    </>
  );
}
