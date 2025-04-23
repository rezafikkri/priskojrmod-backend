import LicenseKeyForm from '@/components/license-key/license-key-form';
import FormSkeleton from '@/components/loadings/form-skeleton';
import { Suspense } from 'react';

export const metadata = {
  title: 'Edit License Key - Prisko Jr Mod',
};

export default async function EditLicenseKey({ params }) {
  const { id } = await params;
  return (
    <>
      <h1 className="text-2xl mb-7 font-bold">Edit License Key</h1>
      <Suspense fallback={<FormSkeleton />}>
        <LicenseKeyForm action="edit" id={id} />
      </Suspense>
    </>
  );
}
