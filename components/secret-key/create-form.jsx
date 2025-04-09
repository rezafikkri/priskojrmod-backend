'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { secretKeySchema } from '@/lib/validators/secret-key-validator';
import { Toaster } from '@/components/ui/sonner';
import { toast } from 'sonner';
import Link from 'next/link';
import random32Bytes from '@/actions/random-32-bytes-actions';
import { addSecretKey } from '@/actions/secret-key-actions';

export default function CreateForm() {
  const form = useForm({
    resolver: zodResolver(secretKeySchema),
    defaultValues: {
      key: '',
      app_name: '',
    },
  });
  const isSubmitting = form.formState.isSubmitting;
  const [loadingKey, setLoadingKey] = useState(false);

  async function handleSubmit(data) {
    const add = await addSecretKey(data);
    if (add.status === 'success') {
      form.reset();
      toast.success('Secret Key created successfully.');
    } else {
      toast.error('Failed to create Secret Key. Please try again.');
    }
  }

  async function handleGenerateKey() {
    setLoadingKey(true);
  
    const key = await random32Bytes();
    form.setValue('key', key.random);
    form.clearErrors('key');

    setLoadingKey(false);
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6 lg:max-w-2/3 mb-10">
          <FormField
            control={form.control}
            name="key"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base">Secret Key</FormLabel>
                <div className="flex w-full items-center">
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      className="md:text-base h-auto px-3 py-1.5 -me-[1px] shadow-none rounded-e-none z-3 relativ"
                      {...field}
                    />
                  </FormControl>
                  <div className="relative">
                    <Button
                      variant="secondary"
                      type="button"
                      onClick={handleGenerateKey}
                      className={`h-auto text-base px-3 py-1.5 border rounded-s-none ${loadingKey ? 'disabled:opacity-100 transition-none' : ''}`}
                      disabled={loadingKey || isSubmitting}
                    >
                      <span className={loadingKey ? 'opacity-0' : ''}>Generate</span>
                    </Button>
                    {loadingKey && (
                      <div className="absolute h-full top-0 left-0 right-0 flex justify-center items-center">
                        <Loader2 className="animate-spin" size={16} />
                      </div>
                    )}
                  </div>
                </div>
                <FormDescription>Click Generate button to generate Secret Key!</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="app_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base">Application Name</FormLabel>
                <FormControl>
                  <Input disabled={isSubmitting} {...field} className="md:text-base h-auto px-3 py-1.5 shadow-none" />
                </FormControl>
                <FormDescription>One application product can only have one secret key.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            asChild
            variant="outline"
            className="me-3 mb-0 h-auto text-base px-3 py-1.5"
          >
            <Link href="/secret-key">Cancel</Link>
          </Button>
          <div className="relative inline-block">
            <Button
              type="submit"
              className={`h-auto text-base px-3 py-1.5 disabled:opacity-100 ${isSubmitting ? 'transition-none' : ''} border border-primary`}
              disabled={isSubmitting}
            >
              <span className={isSubmitting ? 'opacity-0' : ''}>Create</span>
            </Button>
            {isSubmitting && (
              <div className="absolute h-full top-0 left-0 right-0 flex justify-center items-center">
                <Loader2 className="animate-spin text-primary-foreground" size={16} />
              </div>
            )}
          </div>
        </form>
      </Form>
      <Toaster
        richColors
        toastOptions={{
          classNames: {
            title: 'text-[15px]',
            description: 'text-[15px]',
          },
        }}
      />
    </>
  );
}
