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
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '../ui/button';
import { MoreHorizontal } from 'lucide-react';
import { toast } from 'sonner';
import { removeSecretKey } from '@/actions/secret-key-actions';

export default function DataTable({ secretKeys: data }) {
  const [secretKeys, setSecretKeys] = useState(data);

  async function handleDelete(id) {
    const targetRow = document.querySelector(`#row${id}`);
    const targetActionBtn = targetRow.querySelector('td > button');
    targetRow.classList.add('opacity-50');
    targetActionBtn.setAttribute('disabled', true);
    const toastId = toast.loading('Deleting secret key...');

    const removeRes = await removeSecretKey(id);

    if (removeRes.status === 'success') {
      setSecretKeys(secretKeys.filter(s => {
        return s.id !== id;
      }));
      toast.success('Successfully deleted the secret key.', {
        id: toastId,
      });
    } else {
      toast.error(removeRes.message, { id: toastId });
      targetRow.classList.remove('opacity-50');
      targetActionBtn.removeAttribute('disabled');
    }
  }

  const columns = useMemo(() => [
    {
      accessorKey: 'app_name',
      header: 'App Name',
    },
    {
      accessorKey: 'key',
      header: 'Secret Key',
      cell: ({ row }) => row.getValue('key').substring(0, 40) + '...',
    },
    {
      accessorKey: 'created_at',
      header: () => 'Created At',
      cell: ({ row }) => dayjs.unix(row.getValue('created_at')).format('MM-DD-YYYY hh:mm A'),
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
            <DropdownMenuContent align="end" className="px-1.5">
              <DropdownMenuLabel className="text-muted-foreground text-[15px]">Actions</DropdownMenuLabel>
              <DropdownMenuItem asChild>
                <Button
                  variant="ghost"
                  className="w-full justify-start focus-visible:ring-0 font-normal text-base h-auto py-2"
                  onClick={() => navigator.clipboard.writeText(row.getValue('key'))}
                >
                  Copy secret key
                </Button>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="-mx-1.5" />
              <DropdownMenuItem asChild>
                <Button
                  onClick={() => handleDelete(row.original.id)}
                  variant="ghost"
                  className="w-full justify-start focus-visible:ring-0 focus:bg-red-50 dark:focus:bg-red-300/8 font-normal text-base h-auto p-2"
                >
                  Delete
                </Button>
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
      <div className="rounded-md border">
        <Table className="text-base">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="bg-muted/50">
                {headerGroup.headers.map((header) => (
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
                ))}
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
                      className={`p-3 ${cell.column.id === 'actions' ? 'text-right' : '' }`}
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
    </>
  );
}
