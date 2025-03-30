'use client';

import { useSession } from 'next-auth/react';
import { CalendarFold } from 'lucide-react';
import { Skeleton } from '../ui/skeleton';
import dayjs from 'dayjs';

export default function DashHeader() {
  const { data: session } = useSession();

  return (
    <>
      <div className="flex-1">
        <h1 className="text-2xl mb-1 font-bold flex items-center">
          <span className="me-1.5">Hello,</span>
          {session ? 
            <span>{session.user.name}</span>
          :
            <Skeleton className="h-[27px] w-25 inline-block" />
          }
        </h1>
        <h2 className="text-zinc-700 dark:text-zinc-300/80">Here’s what’s going on at your business right now</h2>
      </div>
      <div className="flex max-lg:flex-row-reverse gap-3 max-lg:justify-end items-center text-zinc-700 dark:text-zinc-300/80">
        <time className="font-medium">{dayjs().format('MMMM DD, YYYY')}</time>
        <div className="rounded-md bg-zinc-100/90 dark:bg-zinc-800/70 p-2">
          <CalendarFold size={22} />
        </div>
      </div>
    </>
  );
}
