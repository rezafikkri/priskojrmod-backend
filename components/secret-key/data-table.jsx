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
import dayjs from 'dayjs';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '../ui/button';
import { MoreHorizontal } from 'lucide-react';
import { Toaster } from '../ui/sonner';
import { toast } from 'sonner';
import { removeSecretKey } from '@/actions/secret-key-actions';

export default function DataTable({ secretKeys: data }) {
  const [secretKeys, setSecretKeys] = useState(data);
  const [loading, setLoading] = useState(false);

  async function handleDelete(id) {
    // show loading
    setLoading(true);
    const toastId = toast.loading('Deleting Secret Key...');
    const remove = await removeSecretKey(id);

    if (remove.status === 'success') {
      setSecretKeys(secretKeys.filter(s => {
        return s.id !== id;
      }));
      toast.success('Successfully deleted the secret key.', {
        id: toastId,
      });
    } else {
      toast.error(remove.message, { id: toastId });
    }

    // hide loading
    setLoading(false);
  }

  const columns = useMemo(() => [
    {
      accessorKey: 'app_name',
      header: 'App Name',
    },
    {
      accessorKey: 'key',
      header: 'Secret Key',
      cell: ({ row }) => <div className="font-medium">{row.getValue('key')}</div>,
    },
    {
      accessorKey: 'created_at',
      header: () => 'Created At',
      cell: ({ row }) => dayjs.unix(row.getValue('created_at').toString()).format('MM-DD-YYYY hh:mm A'),
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
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem asChild>
                <Button onClick={() => handleDelete(row.original.id)} variant="ghost" className="w-full justify-start focus-visible:ring-0 focus:bg-red-50 dark:focus:bg-red-300/8 font-normal">Delete</Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    }
  ], [secretKeys]);
  const table = useReactTable({
    data: secretKeys,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <div className="rounded-md border relative">
        <div className={`absolute bg-background/50 top-0 bottom-0 left-0 right-0 z-0 rounded-md opacity-0 ${loading ? 'z-1 opacity-100' : ''}`} />
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="bg-muted/50">
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id} className="px-3 text-zinc-600 dark:text-zinc-400">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="p-3">
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
      <Toaster richColors />
    </>
  );
}
