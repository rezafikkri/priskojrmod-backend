import { CardTotal } from '@/components/dashboard/card-total';
import ChartTransactions from '@/components/dashboard/chart-transactions';
import TopSellingProduct from '@/components/dashboard/top-selling-product';
import ShopBag from '@/components/icon/shop-bag';
import { Button } from '@/components/ui/button';
import {
  Users,
  Package,
  CalendarFold,
} from 'lucide-react';

export default function Dashboard() {
  return (
    <>
      <div className="flex max-lg:flex-col mb-7 lg:items-center max-lg:gap-5 lg:gap-10">
        <div className="flex-1">
          <h1 className="text-2xl mb-1 font-bold">Hello, Reza</h1>
          <h2 className="text-zinc-700 dark:text-zinc-300/80">Here’s what’s going on at your business right now</h2>
        </div>
        <div className="flex max-lg:flex-row-reverse gap-3 max-lg:justify-end items-center text-zinc-700 dark:text-zinc-300/80">
          <time className="font-medium">16 Maret, 2025</time>
          <div className="rounded-md bg-zinc-100/90 dark:bg-zinc-800/70 p-2">
            <CalendarFold size={22} />
          </div>
        </div>
      </div>
      <div className="flex gap-4 mb-4 flex-wrap">
        <CardTotal title="Sales" total={240} icon={<ShopBag />} />
        <CardTotal title="Customers" total={600} icon={<Users />} />
        <CardTotal title="Products" total={400} icon={<Package />} />
      </div>
      <ChartTransactions />
      <TopSellingProduct />
      <Button className="mt-4">Test Button</Button>
    </>
  );
}
