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
import { Button } from '../ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { createProductContentSchema } from '@/lib/validators/product-validator';
import { useCreateProductStore } from '@/lib/providers/create-product-store-provider';

export default function ContentForm({
  onNextStep,
  onPrevStep,
}) {
  const [activeLang, setActiveLang] = useState(Language.ID);
  const content = useCreateProductStore(state => state.content);
  const setContent = useCreateProductStore(state => state.setContent);
  const form = useForm({
    resolver: zodResolver(createProductContentSchema),
    defaultValues: content,
  });
  const errors = form.formState.errors;

  function handleNext(data) {
    setContent(data);
    onNextStep();
  }

  function handlePrev() {
    // save too to localstorage, this is for keep the data
    // when admin want go back to prev step
    const data = form.getValues();
    setContent(data);
    onPrevStep();
  }

  return (
    <>
      <FormLanguageToggle
        activeLang={activeLang}
        onToggle={setActiveLang}
        errors={errors}
        fieldNames={['description']}
      />

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
            onClick={handlePrev}
          >
            <ArrowLeft className="icon" /> Previous
          </Button>

          <Button
            type="submit"
            className={`h-auto text-base px-3 py-1.5 border border-primary inline-block`}
          >
            Next <ArrowRight className="icon" />
          </Button>
        </form>
      </Form>
    </>
  );
}
