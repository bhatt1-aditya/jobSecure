import React from "react";

function Offer() {
  return (
    <div>
      <div className="h-screen w-full bg-[#0b1355] lg:px-44 px-10">
        <h1 className="text-center text-white lg:text-7xl md:text-6xl sm:text-5xl text-4xl font-bold lg:px-48 px-10 mb-10">
          Choose The plan that's right for you
        </h1>
        <div className="grid grid-cols-3 gap-5">
          <div className="flex flex-col gap-5 lg:px-20 px-5 rounded-lg border bg-white py-10">
            <h1 className="text-black font-bold text-2xl">Starter</h1>
            <p className="text-xl">Perfect to get Started</p>
            <h2 className="text-xl font-bold">₹0</h2>
            <ul className="text-xl flex flex-col gap-1">
              <li>Limited offer:Free access</li>
              <li>Auto-Apply 10 jobs Daily</li>
              <li>Ai-powered Auto-Fills</li>
              <li>Delete your data anytime</li>
            </ul>
            <button className="text-white bg-black rounded-lg py-4 px-6  hover:bg-white hover:text-black border transition-all duration-500">
              Start Now
            </button>
          </div>

          <div className="flex flex-col gap-5 lg:px-20 px-5 rounded-lg border bg-white py-10">
            <h1 className="text-black font-bold text-2xl">Premium</h1>
            <p className="text-xl">Perfect to Apply More Jobs</p>
            <h2 className="text-xl font-bold">
              ₹499 <span className="text-base">for limited time</span>
            </h2>
            <ul className="text-xl flex flex-col gap-1">
              <li>Limited offer:Free access</li>
              <li>Auto-Apply 10 jobs Daily</li>
              <li>Ai-powered Auto-Fills</li>
              <li>Delete your data anytime</li>
            </ul>
            <button className="text-white bg-black rounded-lg py-4 px-6  hover:bg-white hover:text-black border transition-all duration-500">
              Start Now
            </button>
          </div>

          <div className="flex flex-col gap-5 lg:px-20 px-5 rounded-lg border bg-white py-10">
            <h1 className="text-black font-bold text-2xl">Diamond</h1>
            <p className="text-xl">Perfect to Get Personalized Assistance</p>
            <h2 className="text-xl font-bold">₹999</h2>
            <ul className="text-xl flex flex-col gap-1">
              <li>Limited offer:Free access</li>
              <li>Auto-Apply 10 jobs Daily</li>
              <li>Ai-powered Auto-Fills</li>
            </ul>
            <button className="text-white bg-black rounded-lg py-4 px-6 hover:bg-white hover:text-black border transition-all duration-500">
              Start Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offer;
