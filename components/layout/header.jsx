'use client';

import { generateBreadcrumb } from '@/lib/utils';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../ui/breadcrumb';
import { Separator } from '../ui/separator';
import { SidebarTrigger } from '../ui/sidebar';
import { usePathname } from 'next/navigation';
import { Fragment } from 'react';
import Link from 'next/link';

export default function Header() {
  const pathname = usePathname();
  const breadCrumb = generateBreadcrumb((pathname));
  console.dir(breadCrumb);

  return (
    <header className="flex h-16 shrink-0 items-center gap-2">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 !h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            {breadCrumb.map(bc =>
              bc.path ? (
              <Fragment key={bc.breadCrumb}>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink asChild>
                    <Link href={bc.path}>{bc.breadCrumb}</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
              </Fragment>
              ) : (
                <BreadcrumbItem key={bc.breadCrumb}>
                  <BreadcrumbPage>{bc.breadCrumb}</BreadcrumbPage>
                </BreadcrumbItem>
              )
            )}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </header>
  );
}
