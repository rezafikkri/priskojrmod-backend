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
    <Card className="shadow-none lg:flex-1 flex-row gap-2 items-center max-lg:w-full">
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
      <div className="me-6 bg-primary/7 p-3 text-primary rounded-md border border-dashed border-primary/30">
        {icon}
      </div>
    </Card>
  )
}
