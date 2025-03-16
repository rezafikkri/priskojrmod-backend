import { CardTotal } from '@/components/dashboard/card-total';
import ChartTransactions from '@/components/dashboard/chart-transactions';
import TopSellingProduct from '@/components/dashboard/top-selling-product';
import ShopBag from '@/components/icon/shop-bag';
import { Users, Package } from 'lucide-react';

export default function Dashboard() {
  return (
    <>
      <h1 className="text-xl font-bold text-zinc-700 mb-7">Dashboard</h1>
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
