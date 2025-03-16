import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export function CardTotal({
  title,
  total,
  icon,
}) {
  return (
    <Card className="shadow-none flex-1 flex-row gap-2 items-center">
      <div className="flex-1 flex flex-col gap-3">
        <CardHeader>
          <CardTitle>Total {title}</CardTitle>
        </CardHeader>
        <CardContent>
          <h2 className="text-2xl font-semibold">{total}</h2>
        </CardContent>
        <CardFooter>
          <small>Until today</small>
        </CardFooter>
      </div>
      <div className="me-6 bg-green-100/60 p-3 text-green-800 rounded-md">
        {icon}
      </div>
    </Card>
  )
}
