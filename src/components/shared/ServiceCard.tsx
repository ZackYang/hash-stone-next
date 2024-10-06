import { Card, Button } from "flowbite-react";

interface ServiceCardProp {
  title: string;
  subTitle: string;
  description: string;
  bgSrc?: string;
}

export function ServiceCard({
  title,
  description,
  subTitle,
  bgSrc,
}: ServiceCardProp) {
  return (
    <Card
      className={`h-[353px] p-5 flex flex-col items-center rounded-2xl grayscale-[80%] hover:grayscale-[40%] cursor-pointer bg-gray-900 bg-top bg-cover bg-no-repeat`}
      style={{
        backgroundImage: bgSrc ? `url(${bgSrc})` : 'none',
      }}>
      <div className="absolute inset-0 bg-gray-900/60 rounded-2xl" />
      <div className="flex flex-col items-center justify-center z-10">
        <h2 className="text-center text-light-primary h-[50px]">
          {title}
        </h2>
        <div
          className="text-light-primary text-base w-full text-center font-normal h-[153px] text-ellipsis"
        >
          {description}
        </div>
        <Button>
          Details
        </Button>
      </div>
    </Card>
  );
}

export default ServiceCard;
