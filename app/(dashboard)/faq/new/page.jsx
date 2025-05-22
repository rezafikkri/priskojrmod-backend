import CreateForm from '@/components/faq/create-form';

export const metadata = {
  title: 'Create FAQ - Prisko Jr Mod',
};

export default function FaqCreatePage() {
  return (
    <>
      <h1 className="text-2xl mb-7 font-bold">Create FAQ</h1>
      <CreateForm />
    </>
  );
}
