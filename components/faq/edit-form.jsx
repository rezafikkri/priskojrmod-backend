'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { editFaqSchema } from '@/lib/validators/faq-validator';
import FormFields from './form-fields';
import { editFaq } from '@/actions/faq-actions';
import { toast } from 'sonner';

export default function EditForm({ faq }) {
  const form = useForm({
    resolver: zodResolver(editFaqSchema),
    defaultValues: {
      id: faq.id,
      translationId: {
        id: faq.translations.id.id,
        en: faq.translations.en.id,
      },
      title: {
        id: faq.translations.id.title,
        en: faq.translations.en.title,
      },
      content: {
        id: faq.translations.id.content,
        en: faq.translations.en.content,
      },
    },
  });

  async function handleSubmit(data) {
    const editRes = await editFaq(data);
    if (editRes.status === 'success') {
      toast.success('FAQ updated successfully.');
    } else {
      toast.error(editRes.message);
    }
  }

  return <FormFields mode="edit" form={form} onSubmit={handleSubmit} />;
}
