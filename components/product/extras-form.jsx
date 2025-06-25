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
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Plus, Trash, ArrowLeft, ArrowRight } from 'lucide-react';
import TooltipWrapper from '../ui/tooltip-wrapper';
import { Separator } from '../ui/separator';
import { Fragment } from 'react';
import ImageFields from './image-fields';
import { Image } from 'lucide-react';
import ExpiredAtInput from './expired-at-input';
import { Percent } from 'lucide-react';
import { createProductExtrasSchema } from '@/lib/validators/product-validator';
import { useCreateProductStore } from '@/lib/providers/create-product-store-provider';
import { v4 } from 'uuid';

export default function ExtrasForm({
  onNextStep,
  onPrevStep,
}) {
  const extras = useCreateProductStore(state => state.extras);
  const setExtras = useCreateProductStore(state => state.setExtras);
  const form = useForm({
    resolver: zodResolver(createProductExtrasSchema),
    defaultValues: extras,
  });
  const errors = form.formState.errors;
  const {
    fields: variants,
    remove: removeVariant,
    append: appendVariant,
  } = useFieldArray({
    control: form.control,
    name: 'variants',
  });
  const {
    fields: images,
    remove: removeImage,
    append: appendImage,
    update: updateImage,
  } = useFieldArray({
    control: form.control,
    name: 'images',
  });

  function handleAddVariant() {
    appendVariant({
      id: v4(),
      name: '',
      download_link: '',
    });
  }

  function handleSetAsThumbnail({ index, image }) {
    for (const [currentIndex, image] of images.entries()) {
      if (image.is_thumbnail) {
        updateImage(currentIndex, {
          ...image,
          is_thumbnail: false,
        });
        break;
      }
    }
    updateImage(index, {
      ...image,
      is_thumbnail: true,
    });
  }

  function handleNext(data) {
    setExtras(data);
    onNextStep();
  }

  function handlePrev() {
    const data = form.getValues();
    setExtras(data);
    onPrevStep();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleNext)} className="space-y-6 lg:max-w-2/3 mb-10">
        <section className="space-y-6 mb-9">
          <h3 className="text-lg font-bold mb-0">Variants</h3>
          <h4 className="text-zinc-700 dark:text-zinc-300/80">List available variants that represent different options for this product.</h4>

          {variants.map((variant, index) => (
            <Fragment key={variant.id}>
              <div key={variant.id} className="flex gap-5 items-center">
                <div className="flex-1 space-y-5">
                  <FormField
                    control={form.control}
                    name={`variants.${index}.name`}
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel className="text-base">Name</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="shadow-none md:text-base h-auto px-3 py-1.5"
                          />
                        </FormControl>
                        <FormDescription>Enter the variant name.</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`variants.${index}.download_link`}
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel className="text-base">Download Link</FormLabel>
                        <FormControl>
                          <Input
                            type="url"
                            {...field}
                            className="shadow-none md:text-base h-auto px-3 py-1.5"
                          />
                        </FormControl>
                        <FormDescription>Optional. Add a download link if this variant includes an extra file.</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Separator orientation="vertical" className="h-30!" />
                {index === variants.length - 1 ? (
                  <TooltipWrapper text="Add variant">
                    <Button
                      type="button"
                      variant="secondary"
                      onClick={handleAddVariant}
                    >
                      <Plus />
                    </Button>
                  </TooltipWrapper>
                ) : (
                    <TooltipWrapper text="Delete variant" background="bg-destructive">
                      <Button
                        type="button"
                        variant="secondary"
                        className="hover:text-destructive dark:hover:text-red-500/90"
                        onClick={() => removeVariant(index)}
                      >
                        <Trash className="icon" />
                      </Button>
                    </TooltipWrapper>               
                  )}
              </div>

              {index !== variants.length - 1 && (
                <div className="pe-15">
                  <Separator />
                </div>
              )}
            </Fragment>
          ))}
        </section>
        <Separator />
        <section className="space-y-6 mb-9">
          <h3 className="text-lg font-bold mb-0">Images</h3>
          <h4 className="text-zinc-700 dark:text-zinc-300/80 mb-0">
            A collection of image URLs that illustrate different aspects of the product.
          </h4>
          <p className="text-sm text-gray-500 dark:text-zinc-400 mt-0.5">
            Make sure all product images have the same dimensions (width and height).
          </p>

          <div className="grid grid-cols-3 gap-2 items-start">
            {images.length <= 0 ? (
              <div className="rounded-md border bg-gray-100 dark:bg-zinc-900/50 overflow-hidden relative">
                <img src="/not-found-image.svg" alt="Not found" className="opacity-30 dark:opacity-100" />
              </div>
            ) : images.map((image, index) => (
              <div
                className={`rounded-md border bg-gray-100 dark:bg-zinc-900/50 overflow-hidden relative group ${image.is_thumbnail ? 'border-green-500 dark:border-green-600 border-2' : ''}`}
                key={image.id}
              >
                <div className="absolute right-2 top-2 space-x-2 items-center invisible opacity-0 group-hover:visible group-hover:opacity-100 animate-in fade-in duration-200">
                  {!image.is_thumbnail && (
                    <TooltipWrapper text="Set as thumbnail">
                      <Button
                        variant="outline"
                        type="button"
                        className="p-1! h-auto border-0 rounded-full dark:hover:bg-input"
                        onClick={() => handleSetAsThumbnail({ index, image })}
                      >
                        <Image className="icon size-4" />
                      </Button>
                    </TooltipWrapper>
                  )}
                  <TooltipWrapper text="Delete" background="bg-destructive">
                    <Button
                      onClick={() => removeImage(index)}
                      variant="outline"
                      type="button"
                      className="p-1! h-auto border-0 rounded-full hover:text-destructive dark:hover:text-red-500/90 dark:hover:bg-zinc-800/95"
                    >
                      <Trash className="icon size-4" />
                    </Button>
                  </TooltipWrapper>
                </div>
                <img
                  src={image.url}
                  alt="Images"
                  className="w-full object-cover"
                  loading="lazy"
                  decoding="async"
                  width={image.width}
                  height={image.height}
                />
                {image.is_thumbnail && (
                  <span
                    className="absolute bottom-2 left-2 text-xs bg-zinc-100 dark:bg-zinc-900 rounded-sm py-0.5 px-1 invisible opacity-0 group-hover:visible group-hover:opacity-100 animate-in fade-in duration-200"
                  >
                    Thumbnail
                  </span>
                )}
              </div>
            ))}
          </div>

          <ImageFields onAppend={appendImage} images={images} />

          {errors?.images && (
            <p className="dark:text-red-500/85 text-destructive text-sm">
              At least one image is required
            </p>
          )}
        </section>
        <Separator />
        <section className="space-y-6 mb-9">
          <h3 className="text-lg font-bold mb-0">Discount</h3>
          <h4 className="text-zinc-700 dark:text-zinc-300/80">
            Optional. The discount percentage to apply to the product price.
          </h4>

          <FormField
            control={form.control}
            name="discount.value"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="text-base">Value</FormLabel>
                <div className="flex">
                  <FormControl>
                    <Input
                      type="number"
                      {...field}
                      className="shadow-none md:text-base h-auto px-3 py-1.5 rounded-e-none z-1"
                    />
                  </FormControl>
                  <span
                    className="inline-block md:text-base h-auto px-3 py-1.5 border border-s-0 rounded-e-md bg-zinc-50 dark:bg-zinc-900/50"
                  >
                    <Percent className="icon size-4" />
                  </span>
                </div>
                <FormDescription>Enter discount percentage (e.g. 10 for 10%).</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="discount.expired_at"
            render={({ field }) =>
              <ExpiredAtInput field={field} description="Enter the expiration time of the discount." />
            }
          />
        </section>
        <Separator />
        <section className="space-y-6 mb-9">
          <h3 className="text-lg font-bold mb-0">Coupon</h3>
          <h4 className="text-zinc-700 dark:text-zinc-300/80">
            Optional. Provides a discount for previous buyers when purchasing product upgrades.
          </h4>

          <div className="flex items-start gap-3">
            <FormField
              control={form.control}
              name="coupon.code"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel className="text-base">Code</FormLabel>
                  <FormControl>
                    <Input {...field} className="md:text-base h-auto px-3 py-1.5 shadow-none" />
                  </FormControl>
                  <FormDescription>Enter the coupon code in UPPERCASE (e.g. SAVE-20-NOW).</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="coupon.discount"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel className="text-base">Discount</FormLabel>
                  <div className="flex">
                    <FormControl>
                      <Input
                        type="number"
                        {...field}
                        className="shadow-none md:text-base h-auto px-3 py-1.5 rounded-e-none z-1"
                      />
                    </FormControl>
                    <span
                      className="inline-block md:text-base h-auto px-3 py-1.5 border border-s-0 rounded-e-md bg-zinc-50 dark:bg-zinc-900/50"
                    >
                      <Percent className="icon size-4" />
                    </span>
                  </div>
                  <FormDescription>Enter discount value in percent (e.g. 10 means 10%).</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="coupon.expired_at"
            render={({ field }) =>
              <ExpiredAtInput field={field} description="Enter the expiration time of the coupon." />
            }
          />
        </section>

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
  );
}
