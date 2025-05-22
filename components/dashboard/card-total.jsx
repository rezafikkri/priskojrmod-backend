import {
  Card,
  CardDescription,
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
          <CardDescription>Total {title}</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums">{total}</CardTitle>
        </CardHeader>
        <CardFooter className="text-sm">
          <p className="text-muted-foreground">Until today</p>
        </CardFooter>
      </div>
      <div className="me-6 bg-primary/7 dark:bg-green-200/5 p-3 text-primary rounded-md border border-dashed border-primary/30">
        {icon}
      </div>
    </Card>
  )
}
