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
import { privacyPolicySchema } from '@/lib/validators/privacy-policy-validator';
import { addPrivacyPolicy, editPrivacyPolicy } from '@/actions/privacy-policy-actions';
import { formatDateTimeWIB } from '@/lib/format-date';

export default function EditForm({ privacyPolicy }) {
  const [updatedAt, setUpdatedAt] = useState(privacyPolicy?.updated_at);
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
    resolver: zodResolver(privacyPolicySchema),
    defaultValues,
  });

  const [activeLang, setActiveLang] = useState(Language.ID);
  const { isSubmitting, errors } = form.formState;

  async function handleSubmit(data) {
    const saveRes = hasPrivacyPolicy
      ? await editPrivacyPolicy(data)
      : await addPrivacyPolicy(data);

    if (saveRes.status === 'success') {
      let successMessage;
      if (hasPrivacyPolicy) {
        successMessage = 'Privacy Policy updated successfully.';
        setUpdatedAt(saveRes.data.updated_at);
      } else {
        successMessage = 'Privacy Policy created successfully.';

        // set id to form
        form.register('id');
        form.register('translationId.id');
        form.register('translationId.en');
        form.setValue('id', saveRes.data.id);
        form.setValue('translationId.id', saveRes.data.translations.id.id);
        form.setValue('translationId.en', saveRes.data.translations.id.en);

        setUpdatedAt(saveRes.data.updated_at);
        setHasPrivacyPolicy(true);
      }

      toast.success(successMessage);
    } else {
      toast.error(saveRes.message);
    }
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
                  description="Enter privacy policy content."
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
                  description="Enter privacy policy content."
                />
              )}
            />
          )}

          {hasPrivacyPolicy && (
            <p className="text-sm text-muted-foreground">
              Last updated: {formatDateTimeWIB(updatedAt)}
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
