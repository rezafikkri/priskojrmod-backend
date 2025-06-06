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
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { Button } from '../ui/button';
import { MoreHorizontal } from 'lucide-react';
import { Check } from 'lucide-react';
import Dot from '../icon/Dot';
import DeleteDialog from './delete-dialog';
import Link from 'next/link';
import { formatDateTimeWIB } from '@/lib/format-date';
import { getTableHeaderWidth } from '@/lib/utils';
import { Checkbox } from '../ui/checkbox';
import {
  Alert,
  AlertDescription,
} from '@/components/ui/alert';

export default function DataTable({
  licenseKey: {
    licenseKeys,
    rowCount,
    isTooMany,
  },
  pageInfo,
  onPaginationChange,
  pagination,
  isPlaceholderData,
  searchKey,
  deleteMutation,
  onRowSelectionChange,
  rowSelection,
}) {
  const [deleteData, setDeleteData] = useState(null);
  const [isOpenDeleteDialog, setIsOpenDeleteDialog] = useState(false);

  // table definition
  const columns = useMemo(() => [
    {
      id: 'select',
      enableHiding: false,
      enableSorting: false,
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && 'indeterminate')
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
          className="shadow-none bg-background"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
          className="shadow-none bg-background"
        />
      ),
    },
    {
      accessorKey: 'email',
      header: 'Email',
    },
    {
      accessorKey: 'used_for_activate',
      header: <div className="text-center">Activate</div>,
      cell: ({ row }) => (
        <div className="text-center">{
          row.getValue('used_for_activate')
            ? <Check className="size-4 inline-block" />
            : <Dot className="size-4 text-zinc-300/50 dark:text-zinc-800 inline-block" />
        }</div>
      ),
    },
    {
      accessorKey: 'used_for_download',
      header: <div className="text-center">Download</div>,
      cell: ({ row }) => (
        <div className="text-center">{
          row.getValue('used_for_download')
            ? <Check className="size-4 inline-block" />
            : <Dot className="size-4 text-zinc-300/50 dark:text-zinc-800 inline-block" />
        }</div>
      ),
    },
    {
      accessorKey: 'created_at',
      header: () => 'Created At',
      cell: ({ row }) => formatDateTimeWIB(row.getValue('created_at')),
    },
    {
      accessorKey: 'updated_at',
      header: () => 'Updated At',
      cell: ({ row }) => formatDateTimeWIB(row.getValue('updated_at')),
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
            <DropdownMenuContent align="end" className="min-w-50">
              <DropdownMenuLabel className="text-muted-foreground text-[15px]">Actions</DropdownMenuLabel>
              <DropdownMenuItem asChild className="text-base hover:cursor-pointer">
                <Link href={`/license-key/${row.original.id}/edit`}>Edit</Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="w-full text-base"
                asChild
              >
                <button onClick={() => navigator.clipboard.writeText(row.original.key)}>
                  Copy License Key
                </button>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="-mx-1.5" />
              <DropdownMenuItem
                className="w-full text-base focus:bg-red-100/70 dark:focus:bg-red-300/10"
                asChild
              >
                <button
                  onClick={() => {
                    setDeleteData({ id: row.original.id, email: row.getValue('email') });
                    setIsOpenDeleteDialog(true);
                  }}
                >
                  Delete
                </button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ], []);
  const table = useReactTable({
    data: licenseKeys,
    columns,
    rowCount,
    state: {
      pagination,
      rowSelection,
    },
    onPaginationChange,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    getRowId: row => row.id,
    onRowSelectionChange,
  });

  console.dir(Object.keys(table.getState().rowSelection));
  console.log('row selected in all page: ' + Object.keys(table.getState().rowSelection).length);
  console.dir('row selectted in current page: ' + table.getSelectedRowModel().rows.length);

  return (
    <>
      <Alert className="mb-4 flex items-center justify-center -mx-4 w-auto border-x-0 rounded-none text-center h-[50px] p-0">
        <AlertDescription className="text-base inline-block">
          <span className="pe-1">30 rows selected across pages.</span>
          <Button variant="ghost" className="text-base h-auto py-0.5 px-1.5">Clear Selection</Button>
        </AlertDescription>
      </Alert>
      <div className="rounded-md border">
        <Table className="text-base">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="bg-muted/50">
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    className={`px-3 py-2.5 text-zinc-600 dark:text-zinc-400 h-auto ${getTableHeaderWidth(header.id)} ${header.id === 'select' ? 'flex h-[44.5px] items-center' : ''}`}
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
                <TableRow
                  key={row.id}
                  id={`row${row.original.id}`}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className={`p-3 ${cell.column.id === 'actions' ? 'text-right' : '' } ${cell.column.id === 'select' ? 'flex h-[57px] items-center' : ''}`}
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {licenseKeys.length > 0 ? (
        <div className="flex max-md:flex-col max-md:items-start gap-3 md:gap-5 md:justify-between mt-4 items-center">
          <span className="text-muted-foreground">{pageInfo}</span>
          {!searchKey ? (
            <div className="space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
                className="h-auto text-base px-3 py-1.5"
              >
                Previous
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => table.nextPage()}
                disabled={isPlaceholderData || !table.getCanNextPage()}
                className="h-auto text-base px-3 py-1.5"
              >
                Next
              </Button>
            </div>
          ) : null}
        </div>
      ) : null}

      {(searchKey && isTooMany) ? (
        <p className="mt-5 inline-block text-muted-foreground text-sm"><b>Info</b>: If you haven't found the License Key you're looking for, please use a more specific email!</p>
      ) : null}

      <DeleteDialog
        deleteMutation={deleteMutation}
        isOpenDeleteDialog={isOpenDeleteDialog}
        setIsOpenDeleteDialog={setIsOpenDeleteDialog}
        deleteData={deleteData}
        setDeleteData={setDeleteData}
      />
    </>
  );
}
