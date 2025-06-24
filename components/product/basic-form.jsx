'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Loader2, ArrowLeft, ArrowRight } from 'lucide-react';
import { createProductBasicSchema } from '@/lib/validators/product-validator';
import { useCreateProductStore } from '@/lib/providers/create-product-store-provider';

export default function BasicForm({
  onNextStep,
  categories,
  owners,
  licenses,
}) {
  const basic = useCreateProductStore(state => state.basic);
  const setBasic = useCreateProductStore(state => state.setBasic);
  const clearDraft = useCreateProductStore(state => state.clearDraft);
  const form = useForm({
    resolver: zodResolver(createProductBasicSchema),
    defaultValues: {
      name: basic.name,
      category_id: basic.category_id.toString(),
      owner_id: basic.owner_id.toString(),
      license_id: basic.license_id.toString(),
      download_link: basic.download_link,
    },
  });
  const isSubmitting = form.formState.isSubmitting;

  function handleNext(data) {
    setBasic(data);
    onNextStep();
  }

  function clearProductDraft() {
    clearDraft();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleNext)} className="space-y-6 lg:max-w-2/3 mb-10">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">Name</FormLabel>
              <FormControl>
                <Input disabled={isSubmitting} {...field} className="md:text-base h-auto px-3 py-1.5 shadow-none" />
              </FormControl>
              <FormDescription>Enter the product name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category_id"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">Category</FormLabel>
              <Select
                onValueChange={field.onChange}
                value={field.value}
              >
                <FormControl>
                  <SelectTrigger className="w-full shadow-none text-base h-auto! px-3 py-1.5 min-h-9.5">
                    <SelectValue placeholder="Select a category" suppressHydrationWarning />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem
                      key={category.id}
                      value={category.id.toString()}
                      className="text-base"
                    >
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription>Select the most relevant category for this product.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="owner_id"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">Owner</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full shadow-none text-base h-auto! px-3 py-1.5 min-h-9.5">
                    <SelectValue placeholder="Select an owner" suppressHydrationWarning />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {owners.map(owner => (
                    <SelectItem
                      key={owner.id}
                      className="text-base"
                      value={owner.id.toString()}
                    >
                      {owner.first_name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription>Select the owner of this product.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="license_id"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">License</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full shadow-none text-base h-auto! px-3 py-1.5 min-h-9.5">
                    <SelectValue placeholder="Select a license" suppressHydrationWarning />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {licenses.map(license => (
                    <SelectItem
                      key={license.id}
                      className="text-base"
                      value={license.id.toString()}
                    >
                      {license.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription>Select the license that applies to this product.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="download_link"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">Download Link</FormLabel>
              <FormControl>
                <Input
                  disabled={isSubmitting}
                  className="md:text-base h-auto px-3 py-1.5 shadow-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>Enter a direct download link for the product's main file.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button asChild variant="outline" className="me-3 mb-0 h-auto inline-block text-base px-3 py-1.5">
          <Link
            href="/product"
            onNavigate={clearProductDraft}
          >
            <ArrowLeft className="icon" /> Back
          </Link>
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
  );
}
