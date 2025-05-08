import CreateForm from '@/components/secret-key/create-form';

export const metadata = {
  title: 'Create Secret Key - Prisko Jr Mod',
};

export default function CreateSecretKey() {
  return (
    <>
      <h1 className="text-2xl mb-7 font-bold">Create Secret Key</h1>
      <CreateForm />
    </>
  );
}
