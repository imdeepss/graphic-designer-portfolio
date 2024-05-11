const Banner = () => {
  return (
    <section className="flex min-h-screen items-center justify-center">
      <div className="w-full py-5 text-center md:w-[700px]">
        <h1 className="text-2xl font-medium text-primary md:text-5xl">
          Hello, I am Simran Vishwakarma, a Photographer & Designer based in
          India.
        </h1>
      </div>
      {/* <div className="flex items-center justify-between gap-5">
        <div className="relative z-10 w-[40%]">
          <h1 className="text-2xl font-medium text-primary md:text-5xl">
            Hello, I am Simran Vishwakarma, a Photographer & Designer based in
            India.
          </h1>
        </div>
        <div className="relative w-[60%]">
          <Image
            src="/images/sim.png"
            alt="Banner"
            width="10000"
            height="10000"
          />
        </div>
      </div> */}
    </section>
  );
};

export default Banner;
