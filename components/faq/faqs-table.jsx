import { getFaqs } from '@/lib/services/faq-service';
import DataTable from './data-table';

export default async function FaqsTable() {
  const faqs = await getFaqs({
    id: true,
    created_at: true,
    translations: {
      select: {
        language: true,
        title: true,
      },
    },
  });

  return <DataTable faqs={faqs} />
}
