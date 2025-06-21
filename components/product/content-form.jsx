import {
  Form,
  FormField,
} from '../ui/form';
import ContentInput from '../ui/content-input';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Language } from '@/constants/enums';
import { zodResolver } from '@hookform/resolvers/zod';
import FormLanguageToggle from '../ui/form-language-toggle';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Loader2, ArrowLeft, ArrowRight } from 'lucide-react';

export default function ContentForm({
  onNextStep,
  onPrevStep,
}) {
  const [activeLang, setActiveLang] = useState(Language.ID);
  const form = useForm({
    // resolver: zodResolver(categorySchema),
    defaultValues: {
      description: {
        id: '',
        en: '',
      },
    },
  });
  const { isSubmitting, errors } = form.formState;

  function handleNext(data) {
    onNextStep();
  }

  function handlePrev() {
    const data = form.getValues();
    onPrevStep();
  }

  return (
    <>
      <FormLanguageToggle activeLang={activeLang} onToggle={setActiveLang} errors={errors} />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleNext)} className="space-y-6 lg:max-w-2/3 mb-10">
          {activeLang === Language.ID && (
            <FormField
              control={form.control}
              name={`description.${Language.ID}`}
              render={({ field, formState }) => (
                <ContentInput
                  field={field}
                  formState={formState}
                  activeLang={Language.ID}
                  label="Description"
                  description="Enter a clear and concise description of the product."
                />
              )}
            />
          )}
          {activeLang === Language.EN && (
            <FormField
              control={form.control}
              name={`description.${Language.EN}`}
              render={({ field, formState }) => (
                <ContentInput
                  field={field}
                  formState={formState}
                  activeLang={Language.EN}
                  label="Description"
                  description="Enter a clear and concise description of the product."
                />
              )}
            />
          )}

          <Button
            variant="outline"
            className="me-3 mb-0 h-auto inline-block text-base px-3 py-1.5"
            onClick={onPrevStep}
          >
            <ArrowLeft className="icon" /> Previous
          </Button>
          <div className="relative inline-block">
            <Button
              type="submit"
              className={`h-auto text-base px-3 py-1.5 disabled:opacity-100 ${isSubmitting ? 'transition-none' : ''} border border-primary inline-block`}
              disabled={isSubmitting}
            >
              <span className={isSubmitting ? 'opacity-0' : ''}>
                Next <ArrowRight className="icon" />
              </span>
            </Button>
            {isSubmitting && (
              <div className="absolute h-full top-0 left-0 right-0 flex justify-center items-center">
                <Loader2 className="animate-spin text-primary-foreground" size={16} />
              </div>
            )}
          </div>
        </form>
      </Form>
    </>
  );
}
