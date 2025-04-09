'use client';

import {
  keepPreviousData,
  useQuery,
} from '@tanstack/react-query';
import { generatePageInfo } from '@/lib/utils';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Search, AlertCircle } from 'lucide-react';
import DataTable from './data-table';
import { useMemo, useRef, useState } from 'react';
import TablePaginationSekeleton from '../loadings/table-pagination-skeleton';
import { Toaster } from '../ui/sonner';
import { toast } from 'sonner';
import UnknownError from '@/lib/errors/UnknownError';
import {
  Alert,
  AlertTitle,
} from '@/components/ui/alert';

export default function LicenseKeysTable() {
  const isRerender = useRef(false);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 30,
  });
  function handlePagination(dataPagination) {
    if (!isRerender.current) {
      isRerender.current = true;
    }
    setPagination(dataPagination);
  }

  const dataQuery = useQuery({
    queryKey: ['licenseKeys', pagination],
    queryFn: async () => {
      let toastId;
      if (isRerender.current) {
        toastId = toast.loading('Loading License Keys...');
      }

      const res = await fetch(`/api/license-key?pi=${pagination.pageIndex}&ps=${pagination.pageSize}`);
      const resJson = await res.json();

      if (toastId) {
        toast.dismiss(toastId);
      }
      if (!res.ok) {
        throw new UnknownError('An unexpected error occurred. Please try reloading the page!');
      }

      return resJson;
    },
    placeholderData: keepPreviousData,
    staleTime: 1000 * 30,
    gcTime: 1000 * 60 * 3,
  });

  // generate pageInfo like this: 1-10 of 20
  const pageInfo = useMemo(() => {
    return generatePageInfo({
      pageSize: pagination.pageSize,
      pageIndex: pagination.pageIndex,
      totalData: dataQuery.data?.rowCount,
      totalDataPerPage: dataQuery.data?.licenseKeys?.length,
    });
  }, [dataQuery.data]);

  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-between gap-3 items-start mb-5">
        <Button asChild variant="outline" className="w-full md:w-auto h-auto text-base px-3 py-1.5">
          <Link href="/license-key/create">Create License</Link>
        </Button>
        <div className="w-full lg:w-1/3 flex shadow-xs rounded-md">
          <Input
            placeholder="Search with email..."
            className="z-3 -me-[1px] rounded-e-none shadow-none md:text-base h-auto px-3 py-1.5"
            disabled={dataQuery.isLoading}
          />
          <Button
            type="button"
            variant="secondary"
            className="border shadow-none rounded-s-none h-auto text-base px-3 py-1.5"
            disabled={dataQuery.isLoading}
          >
            <Search />
          </Button>
        </div>
      </div>

      {(dataQuery.status === 'pending') || (dataQuery.isFetching && !isRerender.current) ? (
        <TablePaginationSekeleton />
      ) : dataQuery.isError ? (
        <Alert variant="destructive" className="border-destructive/50 text-base">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>{dataQuery.error.message}</AlertTitle>
        </Alert>
      ) : (
        <DataTable
          licenseKey={dataQuery.data}
          pageInfo={pageInfo}
          onPagination={handlePagination}
          pagination={pagination}
          isPlaceholderData={dataQuery.isPlaceholderData}
        />
      )}

      <small className="mt-5 inline-block text-muted-foreground text-sm"><b>Note</b>: <i>Activate</i> is indicate the license key has been used for activate the application, while <i>Download</i> is indicate the license key has been used for download something that asosiated with the application, for example: Sider Manager app have Default Addon, this mean <i>Download</i> indicate license key has been used for download this Default Addon.</small>

      <Toaster
        richColors
        position="bottom-center"
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
