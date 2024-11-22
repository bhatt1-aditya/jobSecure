import React from "react";
import Navbar from "../navbar/Navbar";

function About() {
  return (
    <div className="h-screen w-full bg-[#0b1355]">
      <div className="flex flex-col justify-center items-center text-center h-full lg:px-40 px-10 ">
        <h1 className="text-white text-5xl font-bold">About Us</h1>
        <p className=" text-xl text-white lg:px-28 pt-10">
          At JobForm Automator, we're transforming the job search landscape with
          our AI-powered automation tool. We understand that the job application
          process can be tedious and time-consuming. That's why we've created a
          remarkable solution that automates applications on major job sites and
          company websites globally. By leveraging advanced AI technology, we
          help you apply to multiple jobs daily, saving you time and maximizing
          your career opportunities.
        </p>
      </div>
    </div>
  );
}

export default About;
