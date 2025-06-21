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

export default function BasicForm({
  onNextStep,
}) {
  const form = useForm({
    // resolver: zodResolver(categorySchema),
    defaultValues: {
      name: '',
      category_id: '',
      owner_id: '',
      license_id: '',
      download_link: '',
    },
  });
  const isSubmitting = form.formState.isSubmitting;

  async function handleNext(data) {
    onNextStep();
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
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full shadow-none text-base h-auto! px-3 py-1.5">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem className="text-base" value="m@example.com">m@example.com</SelectItem>
                  <SelectItem className="text-base" value="m@google.com">m@google.com</SelectItem>
                  <SelectItem className="text-base" value="m@support.com">m@support.com</SelectItem>
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
                  <SelectTrigger className="w-full shadow-none text-base h-auto! px-3 py-1.5">
                    <SelectValue placeholder="Select an owner" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem className="text-base" value="m@example.com">m@example.com</SelectItem>
                  <SelectItem className="text-base" value="m@google.com">m@google.com</SelectItem>
                  <SelectItem className="text-base" value="m@support.com">m@support.com</SelectItem>
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
                  <SelectTrigger className="w-full shadow-none text-base h-auto! px-3 py-1.5">
                    <SelectValue placeholder="Select a license" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem className="text-base" value="m@example.com">m@example.com</SelectItem>
                  <SelectItem className="text-base" value="m@google.com">m@google.com</SelectItem>
                  <SelectItem className="text-base" value="m@support.com">m@support.com</SelectItem>
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
                  type="url"
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
          <Link href="/product"><ArrowLeft className="icon" /> Back</Link>
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
