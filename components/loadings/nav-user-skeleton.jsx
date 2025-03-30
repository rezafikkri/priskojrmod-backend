import { Skeleton } from '@/components/ui/skeleton';

export default function NavUserSkeleton() {
  return (
    <div className="flex items-center space-x-2">
      <Skeleton className="size-8 rounded-full bg-zinc-300/50" />
      <div className="space-y-1.5 flex-1">
        <Skeleton className="h-4.5 w-full bg-zinc-300/50 rounded-md" />
        <Skeleton className="h-4 w-1/2 bg-zinc-300/50 rounded-md" />
      </div>
    </div>
  );
}
