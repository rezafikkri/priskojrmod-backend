'use client';

import {
  keepPreviousData,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { generatePageInfo } from '@/lib/utils';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Search, AlertCircle, X } from 'lucide-react';
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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export default function LicenseKeysTable() {
  const queryClient = useQueryClient();
  const isRerender = useRef(false);
  const [isSearching, setIsSearching] = useState(false);
  const [searchedLicenseKey, setSearchedLicenseKey] = useState(null);
  const searchRef = useRef(null);
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

  async function handleSubmitSearch() {
    const key = searchRef.current.value;

    if (key.trim() === '') return false;    
    
    setIsSearching(true);
    try {
      const result = await queryClient.fetchQuery({
        queryKey: ['licenseKeysSearch', key],
        queryFn: async () => {
          const res = await fetch(`/api/license-keys?sk=${key}`);
          const resJson = await res.json();
          return resJson;
        },
        staleTime: 10000,
        gcTime: 10000,
      });
      setSearchedLicenseKey(result.data);
    } catch (err) {
      console.error(err);
    }
    setIsSearching(false);
  }

  function handleEnterSearch(e) {
    if (e.key === 'Enter') {
      handleSubmitSearch();
    }
  }

  function handleClearSearchInput() {
    setSearchedLicenseKey(null);
    searchRef.current.value = '';
  }

  const {
    data: dataLK,
    isFetching: isFetchingLK,
    status: statusLK,
    isError: isErrorLK,
    error: errorLK,
    isPlaceholderData: isPlaceholderDataLK,
  } = useQuery({
    queryKey: ['licenseKeys', pagination],
    queryFn: async () => {
      let toastId;
      if (isRerender.current) {
        toastId = toast.loading('Loading License Keys...');
      }

      const res = await fetch(`/api/license-keys?pi=${pagination.pageIndex}&ps=${pagination.pageSize}`);
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
    enabled: !searchedLicenseKey,
  });

  let licenseKey;
  if (searchedLicenseKey) {
    licenseKey = searchedLicenseKey;
  } else if (dataLK) {
    licenseKey = dataLK.data;
  }

  // generate pageInfo like this: 1-10 of 20
  const pageInfo = useMemo(() => {
    return generatePageInfo({
      pageSize: pagination.pageSize,
      pageIndex: pagination.pageIndex,
      totalData: licenseKey?.rowCount,
      totalDataPerPage: licenseKey?.licenseKeys?.length,
      searchKey: searchRef?.current?.value,
    });
  }, [licenseKey]);

  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-between gap-3 items-start mb-5">
        <Button asChild variant="outline" className="w-full md:w-auto h-auto text-base px-3 py-1.5">
          <Link href="/license-key/create">Create License</Link>
        </Button>
        <div className="flex shadow-xs rounded-md w-full lg:w-1/3">
          <div className="relative flex items-center w-full -me-[1px] z-1">
            <Input
              placeholder="Search with email..."
              className="rounded-e-none shadow-none md:text-base h-auto px-3 py-1.5 pe-9"
              disabled={isFetchingLK || isSearching}
              ref={searchRef}
              onKeyUp={handleEnterSearch}
            />
            {searchedLicenseKey ? (
              <TooltipProvider>
                <Tooltip delayDuration={1000}>
                  <TooltipTrigger asChild>
                    <Button
                      className="absolute right-2 w-4 h-5 p-0 z-1"
                      variant="ghost"
                      onClick={handleClearSearchInput}
                      disabled={isSearching}
                    >
                      <X className="size-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className="px-3 py-2 pb-2.5 text-sm">
                    <p>Clear search input</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ) : null}
          </div>
          <Button
            variant="secondary"
            className="border shadow-none rounded-s-none h-auto text-base px-3 py-1.5 focus:z-2"
            disabled={isFetchingLK || isSearching}
            onClick={handleSubmitSearch}
          >
            <Search />
          </Button>
        </div>
      </div>

      {(statusLK === 'pending') || (isFetchingLK && !isRerender.current) || isSearching ? (
        <TablePaginationSekeleton pagination={!isSearching} />
      ) : isErrorLK ? (
        <Alert variant="destructive" className="border-destructive/50 text-base">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>{errorLK.message}</AlertTitle>
        </Alert>
      ) : (
        <DataTable
          licenseKey={licenseKey}
          pageInfo={pageInfo}
          onPagination={handlePagination}
          pagination={pagination}
          isPlaceholderData={isPlaceholderDataLK}
          searchKey={searchRef?.current?.value}
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
