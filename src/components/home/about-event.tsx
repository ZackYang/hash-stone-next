"use client";

import AboutCard from "@/components/about-card";
import { WhiteHighlight } from "@/components/ulti";

const EVENT_INFO = [
  {
    bgSrc: '/image/talnet.jpg',
    title: "Matching the Right Talents",
    description: `Once we know what you need, we connect you with the best fit from our pool of highly skilled Hammer developers. Each developer is vetted for their technical expertise, adaptability, and ability to integrate with your team seamlessly. Think of us as providing the perfect "hammer" for your specific "nail."`,
  },
  {
    bgSrc: '/image/team.jpg',
    title: "Flexible Scaling",
    description: "Need more developers mid-project? We can rapidly scale your team without the hassle of traditional hiring processes, ensuring that your project moves forward smoothly, whether you're growing fast or need specialized talent quickly.",
  },
];

export function AboutEvent() {
  return (
    <section className="container mx-auto flex flex-col items-center px-2 py-10">
      <div variant="h3" className="text-center" color="blue-gray">
        Why Use a Hammer to <span className="text-nowrap text-reverse-highlight text-light-primary">Form Your Team</span>?
      </div>
      <div
        variant="lead"
        className="mt-2 lg:max-w-4xl mb-8 w-full text-center font-normal !text-gray-800"
      >
        Just as every nail needs a hammer, your business needs the right IT talent to succeed.
        With Hammer, you get the power and precision you need—whether it’s scaling your team quickly,
        hiring top-tier talent, or building something completely new.
        <br />
        Our cost-effective solutions ensure that every problem is tackled efficiently, without overspending.

      </div>
      <div className="mt-8 w-full grid grid-cols-1 md:grid-cols-3 gap-4 ">
        {EVENT_INFO.map((props, idx) => (
          <AboutCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default AboutEvent;
