'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormField,
} from '../ui/form';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Loader2, ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import { faqSchema } from '@/lib/validators/faq-validator';
import TitleInput from './title-input';
import ContentInput from './content-input';

function hasOtherSectionError(errors, activeLang) {
  if (errors.title && errors.content) {
    if (!errors.title[activeLang] && !errors.content[activeLang]) {
      return true;
    }
  } else if (errors.title && !errors.content && !errors.title[activeLang]) {
    return true;
  } else if (errors.content && !errors.title && !errors.content[activeLang]) {
    return true;
  }
  return false;
}

export default function CreateForm() {
  const [activeLang, setActiveLang] = useState('id');
  const form = useForm({
    resolver: zodResolver(faqSchema),
    defaultValues: {
      title: {
        id: '',
        en: '',
      },
      content: {
        id: '',
        en: '',
      },
    },
  });

  const { isSubmitting, errors } = form.formState;

  async function handleSubmit(data) {
    console.dir(data);
    // const addRes = await addLicenseKey(data);
    // if (addRes.status === 'success') {
    //   await queryClient.invalidateQueries({ queryKey: ['licenseKeys'] })
    //   form.reset();
    //   toast.success('License key was successfully created.');
    // } else {
    //   toast.error(addRes.message);
    // }
  }

  return (
    <>
      <div className="space-y-2 mb-6">
        <div className="flex space-x-2 mb-2">
          <Button
            variant="ghost"
            className={activeLang === 'id' ? 'bg-accent' : ''}
            onClick={() => setActiveLang('id')}
          >
            Indonesia
          </Button>
          <Button
            variant="ghost"
            className={activeLang === 'en' ? 'bg-accent' : ''}
            onClick={() => setActiveLang('en')}
          >
            English
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">Select a language to enter the content.</p>
        {hasOtherSectionError(errors, activeLang) && (
          <p className="text-destructive text-sm">
            There are errors in the {activeLang === 'id' ? 'English' : 'Indonesian'} section.
          </p>
        )}
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6 lg:max-w-2/3 mb-10">
          {activeLang === 'id' && (
            <>
              <FormField
                control={form.control}
                name={`title.id`}
                render={({ field, formState }) => (
                  <TitleInput field={field} formState={formState} activeLang="id" />
                )}
              />
              <FormField
                control={form.control}
                name="content.id"
                render={({ field, formState }) => (
                  <ContentInput field={field} formState={formState} activeLang="id" />
                )}
              />
            </>
          )}
          {activeLang === 'en' && (
            <>
              <FormField
                control={form.control}
                name={`title.en`}
                render={({ field, formState }) => (
                  <TitleInput field={field} formState={formState} activeLang="en" />
                )}
              />
              <FormField
                control={form.control}
                name="content.en"
                render={({ field, formState }) => (
                  <ContentInput field={field} formState={formState} activeLang="en" />
                )}
              />
            </>
          )}

          <Button asChild variant="outline" className="me-3 mb-0 h-auto inline-block text-base px-3 py-1.5">
            <Link href="/faq"><ArrowLeft className="icon" /> Back</Link>
          </Button>
          <div className="relative inline-flex">
            <Button
              type="submit"
              className={`disabled:opacity-100 ${isSubmitting ? 'transition-none' : ''} h-auto text-base px-3 py-1.5 border border-primary`}
              disabled={isSubmitting}
            >
              <span className={isSubmitting ? 'opacity-0' : ''}>Create</span>
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
