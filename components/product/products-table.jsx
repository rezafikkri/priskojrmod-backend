'use client';

import DataTable from './data-table';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Plus, Columns } from 'lucide-react';
import TooltipWrapper from '@/components/ui/tooltip-wrapper';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
} from '@/components/ui/dropdown-menu';
import { useState } from 'react';

export default function ProductsTable() {
  const [columnVisibility, setColumnVisibility] = useState({
    published: true,
    released_at: true,
    created_at: false,
    updated_at: false,
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
                {column[0].replace('_', ' ')}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <DataTable
        products={[]}
        columnVisibility={columnVisibility}
        onColumnVisibilityChange={setColumnVisibility}
      />
    </>
  );
}
