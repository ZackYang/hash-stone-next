import {
  Card,
  CardBody,
  div,
  Button,
} from "@material-tailwind/react";

interface AboutCardProp {
  title: string;
  subTitle: string;
  description: string;
  bgSrc?: string;
}

export function AboutCard({
  title,
  description,
  subTitle,
  bgSrc,
}: AboutCardProp) {
  return (
    <Card shadow={false}>
      <CardBody
        className={`h-[353px] p-5 flex flex-col items-center rounded-2xl grayscale-[80%] hover:grayscale-[40%] cursor-pointer bg-gray-900 bg-top bg-cover bg-no-repeat`}
        style={{
          backgroundImage: bgSrc ? `url(${bgSrc})` : 'none',
        }}>
        <div className="absolute inset-0 bg-black bg-opacity-70 rounded-2xl" />
        <div className="flex flex-col items-center justify-center z-10">
          <div variant="h4" className="text-center" color="white">
            {title}
          </div>
          <div
            color="white"
            className="mt-2 mb-10 text-base w-full lg:w-8/12 text-center font-normal"
          >
            {description}
          </div>
          <Button color="white" size="sm" onClick={() => { }} placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
            view details
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}

export default AboutCard;
