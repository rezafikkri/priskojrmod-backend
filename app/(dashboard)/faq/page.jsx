import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata = {
  title: 'FAQs - Prisko Jr Mod',
};

export default function FaqListPage() {
  return (
    <>
      <h1 className="text-2xl mb-6 font-bold">Frequently Asked Questions (FAQ)</h1>

      <Button asChild variant="outline" className="mb-5 h-auto text-base px-3 py-1.5">
        <Link href="/faq/new">Create FAQ</Link>
      </Button>
    </>
  );
}
