
import { div, Card } from "@material-tailwind/react";
interface StatsCardProps {
  count: string;
  title: string;
}

export function StatsCard({ count, title }: StatsCardProps) {
  return (
    <Card color="transparent" shadow={false}>
      <div className="font-bold" color="blue-gray">
        {count}
      </div>
      <div color="blue-gray" className="mt-1 font-medium">
        {title}
      </div>
    </Card>
  );
}


export default StatsCard;
