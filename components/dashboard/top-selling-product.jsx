import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const topSellingProducts = [
  { name: 'Sony WH-1000XM4', price: 'IDR 1.013.115', quantity: '116', amount: 'IDR 117.521.340' },
  { name: 'Asus ROG Phone 5', price: 'IDR 153.457', quantity: '389', amount: 'IDR 59.694.773' },
  { name: 'Xiaomi Redmi Note 10', price: 'IDR 582.751', quantity: '73', amount: 'IDR 42.540.823' },
  { name: 'Apple MacBook Pro', price: 'IDR 634.316', quantity: '359', amount: 'IDR 227.719.444' },
  { name: 'Logitech MX Master 3', price: 'IDR 299.170', quantity: '423', amount: 'IDR 126.548.910' },
  { name: 'Canon EOS R5', price: 'IDR 418.235', quantity: '400', amount: 'IDR 167.294.000' },
  { name: 'Samsung Galaxy S10 Ultra', price: 'IDR 517.351', quantity: '259', amount: 'IDR 133.993.909' },
  { name: 'Apple iPhone 14', price: 'IDR 1.501.556', quantity: '169', amount: 'IDR 253.762.964' },
];

export default function TopSellingProduct() {
  return (
    <Card className="mt-4 shadow-none">
      <CardHeader>
        <CardTitle>Top Selling Products</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="px-3">Name</TableHead>
              <TableHead className="px-3">Price</TableHead>
              <TableHead className="px-3">Quantity</TableHead>
              <TableHead className="px-3">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {topSellingProducts.map((product) => (
              <TableRow key={product.name}>
                <TableCell className="p-3">{product.name}</TableCell>
                <TableCell className="p-3">{product.price}</TableCell>
                <TableCell className="p-3">{product.quantity}</TableCell>
                <TableCell className="p-3">{product.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
