import React from "react";

function Contact() {
  return (
    <div className="h-screen w-full bg-[#0b1355] flex justify-center items-center lg:px-44 px-10">
      <div className="flex flex-col justify-center items-center ">
        <h1 className="text-center text-white lg:text-7xl md:text-6xl sm:text-5xl text-4xl font-bold lg:px-48 px-10 mt-28">
          Contact
        </h1>
        <div className="flex justify-between items-center">
          <div className="w-1/2 p-20 text-white">
            <h1 className="text-3xl font-bold mb-5">Our Message</h1>
            <p className="">
              If you're interested in collaboration, job openings, or product
              suggestions, we value your input. Let's discuss potential
              partnerships, employment, or product enhancements. Feel free to
              share your ideas, and let's explore exciting opportunities
              together.
            </p>
          </div>
          <div className="w-1/2 p-20 flex flex-col gap-5">
            <input className="w-3/4 p-4 rounded-lg" placeholder="name" />
            <input
              className="w-3/4 p-4 rounded-lg"
              placeholder="Mobile Number"
            />
            <input className="w-3/4 p-4 rounded-lg" placeholder="Email" />
            <textarea className="w-3/4 p-4 rounded-lg" placeholder="message" />
            <button className="bg-black text-white font-bold w-1/2 py-3 px-3 rounded-lg hover:text-black hover:bg-white transition-all duration-500">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
