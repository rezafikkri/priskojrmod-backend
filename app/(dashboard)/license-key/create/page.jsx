import LicenseKeyForm from '@/components/license-key/license-key-form';
import FormSkeleton from '@/components/loadings/form-skeleton';
import { Suspense } from 'react';

export const metadata = {
  title: 'Create Secret Key - Prisko Jr Mod',
};

export default function CreateLicenseKey() {
  return (
    <>
      <h1 className="text-2xl mb-7 font-bold">Create License Key</h1>
      <Suspense fallback={<FormSkeleton />}>
        <LicenseKeyForm />
      </Suspense>
    </>
  );
}
