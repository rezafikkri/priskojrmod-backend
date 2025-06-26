'use client';

import DataTable from './data-table';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Plus, Columns, AlertCircle } from 'lucide-react';
import TooltipWrapper from '@/components/ui/tooltip-wrapper';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
} from '@/components/ui/dropdown-menu';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import TableSekeleton from '../loadings/table-skeleton';
import {
  Alert,
  AlertTitle,
} from '@/components/ui/alert';
import { PriceType } from '@/constants/enums';

export default function ProductsTable() {
  const [columnVisibility, setColumnVisibility] = useState({
    is_published: true,
    released_at: true,
    created_at: false,
    updated_at: false,
  });

  const {
    data: dataP,
    isFetching: isFetchingP,
    isError: isErrorP,
    error: errorP,
  } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const res = await fetch('/api/products');
      const resJson = await res.json();

      if (!res.ok) {
        throw new UnknownError('An unexpected error occurred. Please try reloading the page!');
      }

      return resJson.data;
    },
    select: (products) => {
      return products.map(product => {
        let newProduct = { ...product };
        if (newProduct.price_type === PriceType.PAID) {
          const prices = newProduct.variants.flatMap(variant => variant.prices);
          newProduct.prices = prices.reduce((acc, { currency_code, price }) => {
            if (!acc[currency_code]) {
              acc[currency_code] = { min: price, max: price };
            } else {
              if (acc[currency_code].min > price) acc[currency_code].min = price;
              if (acc[currency_code].max < price) acc[currency_code].max = price;
            }
            return acc;
          }, {});
        }
        delete newProduct.variants;
        return newProduct;
      });
    },
  });

  return (
    <>
      <div className="flex flex-col lg:flex-row lg:justify-between gap-3 mb-4">
        <TooltipWrapper text="Create product">
          <Button asChild variant="outline" className="h-auto inline-block text-base px-3 py-1.5">
            <Link href="/product/new"><Plus className="icon" /> Create</Link>
          </Button>
        </TooltipWrapper>

        <DropdownMenu>
          <TooltipWrapper text="Manage columns">
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="px-3 py-1.5 h-auto">
                <Columns />
              </Button>
            </DropdownMenuTrigger>
          </TooltipWrapper>
          <DropdownMenuContent align="end" className="min-w-50" onCloseAutoFocus={(e) => e.preventDefault()}>
            <DropdownMenuLabel className="text-muted-foreground text-[15px]">Columns</DropdownMenuLabel>
            {Object.entries(columnVisibility).map((column) => (
              <DropdownMenuCheckboxItem
                key={column[0]}
                className="capitalize text-base hover:cursor-pointer"
                checked={column[1]}
                onCheckedChange={(value) =>
                  setColumnVisibility({
                    ...columnVisibility,
                    [column[0]]: value,
                  })}
              >
                {column[0].replace('_', ' ').replace('is','')}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {isFetchingP ? (
        <TableSekeleton />
      ) : isErrorP ? (
        <Alert variant="destructive" className="border-destructive/50 text-base">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>{errorP.message}</AlertTitle>
        </Alert>
      ) : (
        <DataTable
          products={dataP}
          columnVisibility={columnVisibility}
          onColumnVisibilityChange={setColumnVisibility}
        />
      )}
    </>
  );
}
