'use client';

import { toast } from 'sonner';
import { Language } from '@/constants/enums';
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

export default function EditForm({ privacyPolicy }) {
  const [hasPrivacyPolicy, setHasPrivacyPolicy] = useState(privacyPolicy !== null);
  // generate form default values
  let defaultValues = {
    content: {
      id: '',
      en: '',
    },
  };
  if (privacyPolicy) {
    defaultValues = {
      id: privacyPolicy.id,
      translationId: {
        id: privacyPolicy.translations.id.id,
        en: privacyPolicy.translations.id.en,
      },
      content: {
        id: privacyPolicy.translations.content.id,
        en: privacyPolicy.translations.content.en,
      },
    };
  }

  const form = useForm({
    // resolver: zodResolver(aboutUsSchema),
    defaultValues,
  });

  const [activeLang, setActiveLang] = useState(Language.ID);
  const { isSubmitting, errors } = form.formState;

  async function handleSubmit(data) {
    console.dir(data);
    // const saveRes = hasAboutUs
    //   ? await editAboutUs(data)
    //   : await addAboutUs(data);
    //
    // if (saveRes.status === 'success') {
    //   let successMessage;
    //   if (hasAboutUs) {
    //     successMessage = 'About Us updated successfully.';
    //   } else {
    //     successMessage = 'About Us created successfully.';
    //
    //     // set id to form
    //     form.register('id');
    //     form.register('translationId.id');
    //     form.register('translationId.en');
    //     form.setValue('id', saveRes.data.id);
    //     form.setValue('translationId.id', saveRes.data.translations.id.id);
    //     form.setValue('translationId.en', saveRes.data.translations.id.en);
    //     
    //     setHasAboutUs(true);
    //   }
    //
    //   toast.success(successMessage);
    // } else {
    //   toast.error(saveRes.message);
    // }
  }

  return (
    <>
      <FormLanguageToggle activeLang={activeLang} onToggle={setActiveLang} errors={errors} />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6 lg:max-w-2/3 mb-10">
          {activeLang === Language.ID && (
            <FormField
              control={form.control}
              name={`content.${Language.ID}`}
              render={({ field, formState }) => (
                <ContentInput
                  field={field}
                  formState={formState}
                  activeLang={Language.ID}
                />
              )}
            />
          )}
          {activeLang === Language.EN && (
            <FormField
              control={form.control}
              name={`content.${Language.EN}`}
              render={({ field, formState }) => (
                <ContentInput
                  field={field}
                  formState={formState}
                  activeLang={Language.EN}
                />
              )}
            />
          )}

          {hasPrivacyPolicy && (
            <p className="text-sm text-muted-foreground">
              Last updated: May 26, 2025
            </p>
          )}

          <div className="relative inline-flex">
            <Button
              type="submit"
              className={`disabled:opacity-100 ${isSubmitting ? 'transition-none' : ''} h-auto text-base px-3 py-1.5 border border-primary`}
              disabled={isSubmitting}
            >
              <span className={isSubmitting ? 'opacity-0' : ''}>
                {hasPrivacyPolicy ? 'Update' : 'Create'}
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
