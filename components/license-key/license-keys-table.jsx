'use client';

import {
  keepPreviousData,
  useQuery,
} from '@tanstack/react-query';
import { generatePageInfo } from '@/lib/utils';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Search } from 'lucide-react';
import DataTable from './data-table';
import { useMemo, useRef, useState } from 'react';
import TablePaginationSekeleton from '../loadings/table-pagination-skeleton';
import { Toaster } from '../ui/sonner';
import { toast } from 'sonner';

export default function LicenseKeysTable() {
  const isRerender = useRef(false);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5,
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
        toastId = toast.loading('Loading License Keys');
      }

      const res = await fetch(`/api/license-key?pi=${pagination.pageIndex}&ps=${pagination.pageSize}`);
      const resJson = await res.json();

      if (toastId) {
        toast.dismiss(toastId);
      }
      return resJson;
    },
    placeholderData: keepPreviousData,
    staleTime: 1000 * 60,
    gcTime: 1000 * 60 * 3,
  });

  // generate pageInfo like this: 1-10 of 20
  const pageInfo = useMemo(() => generatePageInfo({
    pageSize: pagination.pageSize,
    pageIndex: pagination.pageIndex,
    totalData: dataQuery.data?.rowCount,
    totalDataPerPage: dataQuery.data?.licenseKeys?.length,

  }), [dataQuery.data]);

  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-between gap-3 items-start mb-5">
        <Button asChild variant="outline" className="w-full md:w-auto">
          <Link href="/license-key/create">Create License</Link>
        </Button>
        <div className="w-full lg:w-1/3 flex shadow-xs rounded-md">
          <Input
            placeholder="Search with email..."
            className="z-3 -me-[1px] rounded-e-none shadow-none"
            disabled={dataQuery.isLoading}
          />
          <Button
            type="button"
            variant="secondary"
            className="border shadow-none rounded-s-none"
            disabled={dataQuery.isLoading}
          >
            <Search />
          </Button>
        </div>
      </div>
      
      {(dataQuery.status === 'pending') || (dataQuery.isFetching && !isRerender.current)
        ? <TablePaginationSekeleton />
        : <DataTable
          licenseKey={dataQuery.data}
          pageInfo={pageInfo}
          onPagination={handlePagination}
          pagination={pagination}
          isFetching={dataQuery.isFetching}
        />
      }

      <small className="mt-5 inline-block text-muted-foreground text-sm"><b>Note</b>: <i>Activate</i> is indicate the license key has been used for activate the application, while <i>Download</i> is indicate the license key has been used for download something that asosiated with the application, for example: Sider Manager app have Default Addon, this mean <i>Download</i> indicate license key has been used for download this Default Addon.</small>

      <Toaster richColors position="bottom-center" />
    </>
  );
}
