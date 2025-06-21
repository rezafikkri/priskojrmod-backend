'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useFieldArray, useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { CurrencyCode, PriceType } from '@/constants/enums';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import PriceInput from './price-input';
import { Checkbox } from '../ui/checkbox';
import { Button } from '../ui/button';
import { ArrowLeft } from 'lucide-react';
import { Separator } from '../ui/separator';

export default function PricingForm({
  onPrevStep,
}) {
  function getDefaultPrices(priceType) {
    if (priceType === PriceType.FREE) return [];

    return [
      { variantId: '1', variantName: 'Pro', price: '', currency_code: CurrencyCode.IDR },
      { variantId: '1', variantName: 'Pro', price: '', currency_code: CurrencyCode.USD },
      { variantId: '2', variantName: 'Enterprise', price: '', currency_code: CurrencyCode.IDR },
      { variantId: '2', variantName: 'Enterprise', price: '', currency_code: CurrencyCode.USD },
    ];
  }

  const form = useForm({
    // resolver: zodResolver(categorySchema),
    defaultValues: {
      price_type: '',
      prices: [],
      is_published: false,
    },
  });
  const isSubmitting = form.formState.isSubmitting;
  const {
    fields: prices,
    replace: replacePrices,
  } = useFieldArray({
    control: form.control,
    name: 'prices',
  });

  function handlePriceTypeChange({ selectedValue, field }) {
    field.onChange(selectedValue);
    replacePrices(getDefaultPrices(selectedValue));
  }

  async function handleSubmit() {

  }

  function handlePrev() {
    onPrevStep();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6 lg:max-w-2/3 mb-10">
        <FormField
          control={form.control}
          name="price_type"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">Price Type</FormLabel>
              <Select
                onValueChange={(priceType) => handlePriceTypeChange({ selectedValue: priceType, field: field })}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger className="shadow-none text-base h-auto! px-3 py-1.5 w-full">
                    <SelectValue placeholder="Select price type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem className="text-base" value={PriceType.FREE}>
                    {PriceType.FREE[0].toUpperCase() + PriceType.FREE.substring(1)}
                  </SelectItem>
                  <SelectItem className="text-base" value={PriceType.PAID}>
                    {PriceType.PAID[0].toUpperCase() + PriceType.PAID.substring(1)}
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>Select whether this product is free or paid.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {form.getValues('price_type') === 'paid' && (
          <PriceInput prices={prices} form={form} />
        )}

        <FormField
          control={form.control}
          name="is_published"
          render={({ field }) => (
            <FormItem className="flex space-x-2 items-start">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  disabled={isSubmitting}
                />
              </FormControl>
              <div className="space-y-2">
                <FormLabel className="text-base leading-none">Publish</FormLabel>
                <FormDescription>
                  Make this product visible on the website.
                </FormDescription>
              </div>
            </FormItem>
          )}
        />

        <Button
          variant="outline"
          className="me-3 mb-0 h-auto inline-block text-base px-3 py-1.5"
          onClick={handlePrev}
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
              Create
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
  );
}
