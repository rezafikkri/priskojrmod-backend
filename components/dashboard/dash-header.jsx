'use client';

import { useSession } from 'next-auth/react';
import { CalendarFold } from 'lucide-react';

export default function DashHeader() {
  const { data: session } = useSession();

  return (
    <>
      <div className="flex-1">
        <h1 className="text-2xl mb-1 font-bold">Hello, {session ? session.user.name : ''}</h1>
        <h2 className="text-zinc-700 dark:text-zinc-300/80">Here’s what’s going on at your business right now</h2>
      </div>
      <div className="flex max-lg:flex-row-reverse gap-3 max-lg:justify-end items-center text-zinc-700 dark:text-zinc-300/80">
        <time className="font-medium">16 Maret, 2025</time>
        <div className="rounded-md bg-zinc-100/90 dark:bg-zinc-800/70 p-2">
          <CalendarFold size={22} />
        </div>
      </div>
    </>
  );
}
