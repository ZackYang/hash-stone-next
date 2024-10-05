"use client";

import StatsCard from "@/components/stats-card";

const STATS = [
  {
    count: "1,500+",
    title: "Participants",
  },
  {
    count: "50",
    title: "Speakers",
  },
  {
    count: "20+",
    title: "Workshops",
  },
  {
    count: "3",
    title: "Days",
  },
];

export function OurStats() {
  return (
    <section className="relative min-h-[30vh] w-full  gap-10 px-8 py-10 lg:grid-cols-1 lg:gap-20 xl:grid-cols-2 xl:place-items-center bg-[url('/image/hero_bg1.jpg')] bg-bottom bg-cover bg-no-repeat">
      <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
      <div className="container m-auto relative">
        <div className="mb-6 font-medium text-orange-700">
          Our Stats
        </div>
        <div
          className="text-5xl font-bold leading-tight lg:w-3/4 text-gray-50"
        >
          Conference Highlights
        </div>
        <div
          className="mt-3 w-full text-light-secondary"
        >
          This three-day extravaganza brings together the brightest minds,
          leading innovators, and top companies in the field of Artificial
          Intelligence.
        </div>
      </div>
      <div className="container m-auto">
        <div className="grid grid-cols-2 gap-8 gap-x-28">
          {STATS.map((props, key) => (
            <StatsCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurStats;
