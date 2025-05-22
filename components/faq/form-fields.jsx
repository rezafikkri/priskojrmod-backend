'use client';

import {
  Form,
  FormField,
} from '../ui/form';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Loader2, ArrowLeft } from 'lucide-react';
import { useState } from 'react';
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

export default function FormFields({
  mode,
  form,
  onSubmit,
  isResetEditor,
}) {
  const [activeLang, setActiveLang] = useState('id');
  const { isSubmitting, errors } = form.formState;
  
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
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 lg:max-w-2/3 mb-10">
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
                  <ContentInput
                    field={field}
                    formState={formState}
                    activeLang="id"
                    {...(isResetEditor && { isResetEditor })}
                  />
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
                  <ContentInput
                    field={field}
                    formState={formState}
                    activeLang="en"
                    {...(isResetEditor && { isResetEditor })}
                  />
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
