import React from "react";
import chromeLogo from "../../../public/images/chrome.svg";
function DreamJob() {
  return (
    <div className="h-screen">
      <div className="bg-[#0b1355] h-full flex justify-center items-center flex-col lg:px-40 px-10 py-20 xl:pt-[143px] lg:pt-[220px] md:pt-[250px]pt-[280px]">
        <h1 className="text-center text-white xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold  lg:px-40 px-10 ">
          Land Your Dream Job Effortlessly
        </h1>
        <p className="text-white text-xl text-center py-10 lg:px-40 px-10 cursor-pointer">
          Effortless job hunting. JobForm Automator auto-fills, auto-applies,
          and accelerates your search across top platforms and 90% of company
          sites worldwide.
        </p>
        <a href="https://chromewebstore.google.com/detail/jobform-automator-ai-auto/lknamgjmcmbfhcjjeicdndokedcmpbaa?pli=1">
          <button className="flex text-white font-bold items-center border bg-gray-900 rounded-lg py-3 px-6 hover:bg-white hover:text-black transition-all duration-700">
            <img src={chromeLogo} alt="image is missing" />
            Add to chrome
          </button>
        </a>
        <p className="text-white text-xl text-center py-10 lg:px-40 px-10 cursor-pointer">
          Auto-Apply upto 10 jobs Daily free forever
        </p>
      </div>
    </div>
  );
}

export default DreamJob;
