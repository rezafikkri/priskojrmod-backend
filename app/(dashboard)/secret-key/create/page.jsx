import CreateForm from '@/components/secret-key/create-form';

export default async function CreateSecretKey() {
  return (
    <>
      <h1 className="text-xl mb-7 font-bold">Create Secret Key</h1>
      <CreateForm />
    </>
  );
}
