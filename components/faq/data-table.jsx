'use client';

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useMemo, useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '../ui/button';
import { MoreHorizontal } from 'lucide-react';
import { toast } from 'sonner';
import { removeFaq } from '@/actions/faq-actions';
import Link from 'next/link';
import { Language } from '@/constants/enums';
import { formatDateTimeWIB } from '@/lib/format-date';

export default function DataTable({ faqs: data }) {
  const [faqs, setFaqs] = useState(data);
  const [titleLang, setTitleLang] = useState(Language.ID);

  async function handleDelete(id) {
    const targetRow = document.querySelector(`#row${id}`);
    const targetActionBtn = targetRow.querySelector('td > button');
    targetRow.classList.add('opacity-50');
    targetActionBtn.setAttribute('disabled', true);
    // show loading
    const toastId = toast.loading('Deleting FAQ...');
    
    const removeRes = await removeFaq(id);

    targetRow.classList.remove('opacity-50');
    targetActionBtn.removeAttribute('disabled');

    if (removeRes.status === 'success') {
      setFaqs(faqs.filter(faq => faq.id !== id));
      toast.success('FAQ deleted successfully.', {
        id: toastId,
      });
    } else {
      toast.error(removeRes.message, {
        id: toastId,
      });
    }
  }

  const columns = useMemo(() => [
    {
      accessorKey: `translations.title.${titleLang}`,
      header: () => (
        <>
          <span>Title</span>
          <div className="ms-4 inline-block space-x-1">
            <Button
              variant="outline"
              className={`px-2 py-0.5 text-xs h-auto shadow-none ${titleLang === Language.ID ? 'text-accent-foreground bg-accent' : ''}`}
              onClick={() => setTitleLang(Language.ID)}
            >
              ID
            </Button>
            <Button
              variant="outline"
              className={`px-2 py-0.5 text-xs h-auto shadow-none ${titleLang === Language.EN ? 'text-accent-foreground bg-accent' : ''}`}
              onClick={() => setTitleLang(Language.EN)}
            >
              EN
            </Button>
          </div>
        </>
      ),
    },
    {
      accessorKey: 'created_at',
      header: 'Created At',
      cell: ({ row }) => formatDateTimeWIB(row.getValue('created_at')),
    },
    {
      id: 'actions',
      enableHiding: false,
      cell: ({ row }) => {
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0 focus-visible:ring-ring">
                <MoreHorizontal />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel className="text-muted-foreground text-[15px]">Actions</DropdownMenuLabel>
              <DropdownMenuItem asChild className="text-base py-2 hover:cursor-pointer">
                <Link href={`/faq/${row.original.id}/edit`}>Edit</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="-mx-1.5" />
              <DropdownMenuItem
                className="w-full text-base focus:bg-red-100/70 dark:focus:bg-red-300/10"
                asChild
              >
                <button onClick={() => handleDelete(row.original.id)}>
                  Delete
                </button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    }
  ], [faqs, titleLang]);
  const table = useReactTable({
    data: faqs,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <div className="rounded-md border">
        <Table className="text-base">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="bg-muted/50">
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      className="px-3 py-2.5 h-auto text-zinc-600 dark:text-zinc-400"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    </TableHead>
                  )})}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} id={'row' + row.original.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className={`p-3 ${cell.column.id === 'actions' ? 'text-right' : '' } ${cell.column.id === `translations_${titleLang}_title` ? 'max-w-150 whitespace-normal' : ''}`}
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
                <TableRow>
                  <TableCell colSpan={columns.length} className="h-24 text-center">
                    No results.
                  </TableCell>
                </TableRow>
              )}
          </TableBody>
        </Table>
      </div>

      {faqs.length > 0 && (
        <p className="text-muted-foreground mt-4">
          {faqs.length} {faqs.length === 1 ? 'result' : 'results'}
        </p>
      )}
    </>
  );
}
