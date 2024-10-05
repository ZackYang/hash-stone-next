// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "../components/home/hero";
import SponsoredBy from "./sponsored-by";
import AboutEvent from "../components/home/about-event";
import OurStats from "../components/home/our-stats";
import EventContent from "../components/home/event-content";
import Faq from "../components/home/faq";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutEvent />
      <OurStats />
      <EventContent />
      <SponsoredBy />
      <Faq />
      <Footer />
    </>
  );
}
