import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  Avatar,
} from "@material-tailwind/react";

interface EventContentCardProps {
  title: string;
  des: string;
  name: string;
  position: string;
  panel: string;
  img: string;
}
export function EventContentCard({
  title,
  des,
  name,
  position,
  panel,
  img,
}: EventContentCardProps) {
  return (
    <Card
      color="transparent"
      shadow={false}
      className="lg:!flex-row mb-10 lg:items-end"
    >
      <CardHeader
        floated={false}
        shadow={false}
        className="h-[32rem] max-w-[28rem] shrink-0"
      >
        <Image
          width={768}
          height={768}
          src={img}
          alt="testimonial image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody className="col-span-full lg:col-span-3">
        <div color="blue-gray" className="mb-4">
          {panel}
        </div>
        <div color="blue-gray" className="mb-4 font-medium">
          {title}
        </div>
        <div className="mb-12 md:w-8/12 font-medium !text-gray-500">
          {des}
        </div>
        <div className="flex items-center gap-4">
          <Avatar
            variant="circular"
            src="/logos/spotify-logo.png"
            alt="spotify"
            size="lg"
          />
          <div>
            <div color="blue-gray" className="mb-0.5">
              {name}
            </div>
            <div className="font-normal !text-gray-500">
              {position}
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export default EventContentCard;
