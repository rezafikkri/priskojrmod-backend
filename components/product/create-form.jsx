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
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { createLicenseKeySchema } from '@/lib/validators/license-key-validator';
import { toast } from 'sonner';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Loader2, ArrowLeft } from 'lucide-react';
import { addLicenseKey } from '@/actions/license-key-actions';
import { useQueryClient } from '@tanstack/react-query';
import { Separator } from '../ui/separator';
import { ArrowRight } from 'lucide-react';
import { Progress } from '../ui/progress';
import { Check } from 'lucide-react';

export default function CreateForm() {
  // Get QueryClient from the context
  const queryClient = useQueryClient();

  const form = useForm({
    resolver: zodResolver(createLicenseKeySchema),
    defaultValues: {
      secret_key_id: '',
      email: '',
      name: '',
      type: 'online',
    },
  });

  const isSubmitting = form.formState.isSubmitting;

  async function handleSubmit(data) {
    const addRes = await addLicenseKey(data);
    if (addRes.status === 'success') {
      await queryClient.invalidateQueries({ queryKey: ['licenseKeys'] })
      form.reset();
      toast.success('License Key created successfully.');
    } else {
      toast.error(addRes.message);
    }
  }

  return (
    <>
      <div className="flex gap-5 mb-5 lg:max-w-2/3 font-medium text-zinc-700/90 dark:text-zinc-200">
        <section className="flex items-center space-x-2">
          <div className="rounded-sm size-6 flex-none text-sm flex justify-center items-center bg-zinc-200/50 dark:bg-zinc-800/80">
            <Check className="size-4" />
          </div>
          <h3>Basic</h3>
        </section>
        <section className="flex items-center space-x-2 flex-1">
          <div className="rounded-sm size-6 flex-none text-sm flex justify-center items-center bg-primary text-primary-foreground">
            <span>2</span>
          </div>
          <h3 className="me-4">Content</h3>
          <Progress value={80} className="h-1" />
        </section>
        <section className="flex items-center space-x-2 opacity-50">
          <div className="rounded-sm size-6 flex-none text-sm flex justify-center items-center bg-zinc-200/60 dark:bg-zinc-700/60">3</div>
          <h3>Extras</h3>
        </section>
        <section className="flex items-center space-x-2 opacity-50">
          <div className="rounded-sm size-6 flex-none text-sm flex justify-center items-center bg-zinc-200/60 dark:bg-zinc-700/60">4</div>
          <h3>Pricing</h3>
        </section>
      </div>

      <Separator className="lg:max-w-2/3 mb-7" />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6 lg:max-w-2/3 mb-10">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base">Customer Name</FormLabel>
                <FormControl>
                  <Input disabled={isSubmitting} {...field} className="shadow-none md:text-base h-auto px-3 py-1.5" />
                </FormControl>
                <FormDescription>Enter the customer name.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base">Email</FormLabel>
                <FormControl>
                  <Input type="email" disabled={isSubmitting} {...field} className="shadow-none md:text-base h-auto px-3 py-1.5" />
                </FormControl>
                <FormDescription>Enter the customer email.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel className="text-base">Type</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    value={field.value}
                    className="flex space-x-2"
                    disabled={isSubmitting}
                  >
                    <FormItem className="flex items-center space-x-1 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="online" />
                      </FormControl>
                      <FormLabel className="font-normal text-base">Online</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-1 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="offline" />
                      </FormControl>
                      <FormLabel className="font-normal text-base">Offline</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormDescription>Select activation type: online or offline.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button asChild variant="outline" className="me-3 mb-0 h-auto inline-block text-base px-3 py-1.5">
            <Link href="/license-key"><ArrowLeft className="icon" /> Back</Link>
          </Button>
          <div className="relative inline-flex">
            <Button
              type="submit"
              className={`disabled:opacity-100 ${isSubmitting ? 'transition-none' : ''} h-auto text-base px-3 py-1.5 border border-primary inline-block`}
              disabled={isSubmitting}
            >
              <span className={isSubmitting ? 'opacity-0' : ''}>Next <ArrowRight className="icon" /></span>
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
