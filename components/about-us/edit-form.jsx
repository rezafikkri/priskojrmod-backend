'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormField,
} from '../ui/form';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';
import FormLanguageToggle from '../ui/form-language-toggle';
import ContentInput from '../ui/content-input';

export default function EditForm({ mode }) {
  const form = useForm({
    // resolver: zodResolver(),
    defaultValues: {
      id: '',
      content: {
        id: '',
        en: '',
      },
    },
  });

  const [activeLang, setActiveLang] = useState('id');
  const { isSubmitting, errors } = form.formState;

  async function handleSubmit(data) {
    console.dir(data);
    // const editRes = await editFaq(data);
    // if (editRes.status === 'success') {
    //   toast.success('FAQ updated successfully.');
    // } else {
    //   toast.error(editRes.message);
    // }
  }

  return (
    <>
      <FormLanguageToggle activeLang={activeLang} onToggle={setActiveLang} errors={errors} />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6 lg:max-w-2/3 mb-10">
          {activeLang === 'id' && (
            <FormField
              control={form.control}
              name="content.id"
              render={({ field, formState }) => (
                <ContentInput
                  field={field}
                  formState={formState}
                  activeLang="id"
                />
              )}
            />
          )}
          {activeLang === 'en' && (
            <FormField
              control={form.control}
              name="content.en"
              render={({ field, formState }) => (
                <ContentInput
                  field={field}
                  formState={formState}
                  activeLang="en"
                />
              )}
            />
          )}

          <div className="relative inline-flex">
            <Button
              type="submit"
              className={`disabled:opacity-100 ${isSubmitting ? 'transition-none' : ''} h-auto text-base px-3 py-1.5 border border-primary`}
              disabled={isSubmitting}
            >
              <span className={isSubmitting ? 'opacity-0' : ''}>
                {mode === 'edit' ? 'Update' : 'Create'}
              </span>
            </Button>
            {isSubmitting && 
              <div className="absolute h-full top-0 left-0 right-0 flex justify-center items-center">
                <Loader2 className="animate-spin text-primary-foreground" size={16} />
              </div>
            }
          </div>
        </form>
      </Form>
    </>
  );
}
