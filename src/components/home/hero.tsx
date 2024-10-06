import { Highlight, BlackHighlight } from "@/components/ulti";

function Hero() {
  return (
    <div className="relative min-h-[50vh] w-full bg-[url('/image/hero_bg1.jpg')] bg-top bg-cover bg-no-repeat">
      <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
      <div className="min-h-[50vh] px-8 pt-52 pb-16">
        <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            <div className="flex flex-col grow">
              <div className="text-2xl xl:text-5xl font-thin text-white text-nowrap">
                Welcome to <span className="font-extrabold text-reverse-highlight text-black">Code Hammer</span>
              </div>
              <div className="text-2xl xl:text-5xl font-thin text-white  text-nowrap">
                – Your Team, Ready in Days
              </div>
            </div>
            <div className="flex max-w-80">
              <div className="text-white text-lg font-normal mt-4 text-left rounded-md border p-3 bg-gray-900 bg-opacity-70">
                At <BlackHighlight>Hammer</BlackHighlight>, we provide the perfect <Highlight>Talents</Highlight> for your business to create,
                build, and maintain robust IT solutions.
                <br />
                <br />
                Whether you&apos;re a startup looking for cost-effective talent or an enterprise scaling up your tech team,
                our <BlackHighlight>pre-vetted</BlackHighlight> IT specialists
                <br />
                <br />
                Your <BlackHighlight>Hammer</BlackHighlight> Will get the job done with precision and efficiency.
                Our developers are skilled, adaptable, and dedicated to solving your IT challenges, just like a reliable <BlackHighlight>Hammer</BlackHighlight>.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
