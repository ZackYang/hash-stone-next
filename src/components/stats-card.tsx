
import { Card } from "flowbite-react";
interface StatsCardProps {
  count: string;
  title: string;
}

export function StatsCard({ count, title }: StatsCardProps) {
  return (
    <Card color="transparent">
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
