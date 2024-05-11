import Image from "next/image";

const Banner = () => {
  return (
    <section className="flex min-h-[calc(100svh_-_120px)] w-full items-center justify-center">
      {/* <div className="w-full py-5 text-left md:w-[700px]">
        <h1 className="text-2xl font-medium text-primary md:text-5xl">
          Hello, I am Simran Vishwakarma, a Photographer & Designer based in
          India.
        </h1>
      </div> */}
      <div className="flex w-full flex-wrap items-center justify-between">
        <div className="relative z-10 w-full text-primary lg:w-1/2">
          <p className="relative mb-6 text-lg font-semibold">Hi, my name is</p>
          <h1 className=" mb-6 text-5xl font-bold md:text-7xl">
            Simran Vishwakarma,
          </h1>
          <h2 className="mb-6 text-5xl font-bold opacity-85 md:text-7xl">
            I build things for the web.
          </h2>
          <p className="text-lg">
            I design and code beautifully simple things, and I love what I do. I
            like to code things from scratch, and enjoy bringing ideas to life
            in the browser. I value simple content structure, clean design
            patterns, and thoughtful interactions.
          </p>
        </div>
        <div className="relative w-full lg:w-1/2">
          <Image
            src="/images/sim.png"
            alt="Banner"
            width="10000"
            height="10000"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
