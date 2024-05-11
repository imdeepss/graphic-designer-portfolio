import React from "react";

const Contact = () => {
  return (
    <section
      className="flex min-h-screen w-full items-center justify-center text-center"
      id="Contact"
    >
      <div className="w-full text-center lg:w-[700px]">
        <h2 className="mb-8 inline-block border-b-2 border-primary pb-5 text-5xl font-bold text-primary">
          Get in touch
        </h2>
        <p className="mb-6 text-lg font-normal text-primary">
          Although I’m not currently looking for any new opportunities, my inbox
          is always open. Whether you have a question or just want to say hi,
          I’ll try my best to get back to you!
        </p>
        <div className="flex items-center justify-center">
          <a
            className="my-3 flex items-center justify-center rounded border border-primary px-6 py-3 text-primary hover:bg-primary hover:text-secondary hover:outline-none"
            href="mailto:simranvishwakarma015@gmail.com"
          >
            Say Hello
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
