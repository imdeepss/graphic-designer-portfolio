import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <>
      <section className="relative  w-full md:h-screen">
        <div className="grid h-full grid-cols-1 content-center gap-5 md:grid-cols-2 ">
          <div className="">
            <h1 className="mb-5 text-3xl font-extrabold text-primary md:text-6xl">
              About Us
            </h1>
            <p
              className="pb-4 text-lg font-medium
          text-primary"
            >
              Hello! I&apos;m Simran Vishwakarma, a passionate graphic designer
              with a love for all things creative. From a young age, I&apos;ve
              been fascinated by the power of visual storytelling and its
              ability to evoke emotions and inspire action. With proficiency in
              Adobe Illustrator, Photoshop, and Canva, I bring ideas to life
              through compelling designs that captivate and engage audiences.{" "}
            </p>
            <p
              className="pb-4 text-lg font-medium
          text-primary"
            >
              Whether it&apos;s crafting a brand identity, designing captivating
              social media graphics, or creating stunning illustrations, I
              thrive on turning visions into reality. I&apos;m constantly
              seeking new challenges and opportunities to grow as a designer,
              always pushing the boundaries of my creativity. Let&apos;s
              collaborate and bring your next project to life!
            </p>
          </div>
          <div className="">
            <Image
              src="/images/aboutus.jpg"
              alt="Simran"
              width={7000}
              height={7000}
              className="h-full w-full"
            />
          </div>
        </div>
      </section>
      {/* <section className="relative  w-full md:h-screen">
        <div className="absolute left-0 top-0 h-full w-full bg-[url('/images/sim.png')] bg-cover bg-center bg-no-repeat" />
        <div className="relative z-10 w-1/3">
          <h1 className="mb-5 text-6xl font-extrabold text-primary">
            About Us
          </h1>
          <p className="text-base font-medium text-primary">
            Hello! I&apos;m Simran Vishwakarma, a passionate graphic designer
            with a love for all things creative. From a young age, I&apos;ve
            been fascinated by the power of visual storytelling and its ability
            to evoke emotions and inspire action. With proficiency in Adobe
            Illustrator, Photoshop, and Canva, I bring ideas to life through
            compelling designs that captivate and engage audiences. Whether
            it&apos;s crafting a brand identity, designing captivating social
            media graphics, or creating stunning illustrations, I thrive on
            turning visions into reality. I&apos;m constantly seeking new
            challenges and opportunities to grow as a designer, always pushing
            the boundaries of my creativity. Let&apos;s collaborate and bring
            your next project to life!
          </p>
        </div>
      </section> */}
    </>
  );
};

export default AboutUs;
