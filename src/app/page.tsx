// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "../components/home/hero";
import SponsoredBy from "./sponsored-by";
import AboutEvent from "../components/home/about-services";
import OurStats from "../components/home/our-stats";
import EventContent from "../components/home/event-content";

export default function Portfolio() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutEvent />
      <OurStats />
      <EventContent />
      <SponsoredBy />
    </div>
  );
}
