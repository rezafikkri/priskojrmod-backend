import { CardTotal } from '@/components/dashboard/card-total';
import ChartTransactions from '@/components/dashboard/chart-transactions';
import TopSellingProduct from '@/components/dashboard/top-selling-product';
import ShopBag from '@/components/icon/shop-bag';
import {
  Users,
  Package,
  CalendarFold,
} from 'lucide-react';

export default function Dashboard() {
  return (
    <>
      <div className="flex mb-7 items-center">
        <div className="flex-1">
          <h1 className="text-2xl mb-1 font-bold">Hello, Reza</h1>
          <h2 className="text-zinc-700">Here’s what’s going on at your business right now</h2>
        </div>
        <div className="flex gap-3 items-center text-zinc-700">
          <time className="font-medium">16 Maret, 2025</time>
          <div className="rounded-full bg-zinc-100/90 p-3">
            <CalendarFold size={22} />
          </div>
        </div>
      </div>
      <div className="flex gap-4 mb-4">
        <CardTotal title="Sales" total={240} icon={<ShopBag />} />
        <CardTotal title="Customers" total={600} icon={<Users />} />
        <CardTotal title="Products" total={400} icon={<Package />} />
      </div>
      <ChartTransactions />
      <TopSellingProduct />
    </>
  );
}
