import React from "react";
import Referal from "../../../public/images/referal.svg";
import { Navigate } from "react-router-dom";
import SignIn from "./SignIn";
function Referral() {
  return (
    <div className="h-screen w-full bg-[#0b1355]">
      <div className="flex flex-col justify-center items-center mt-[143px] lg:px-40 px-10">
        <h1 className="py-10 text-center text-white lg:text-7xl md:text-6xl sm:text-5xl text-4xl font-bold">
          Earn Money While You Job Hunt!
        </h1>
        <div className="flex justify-between items-start ">
          <div className="w-1/2">
            <img
              src={Referal}
              alt="image is missing"
              className="px-36 bg-black rounded-lg"
            />
          </div>
          <div className="w-1/2 flex flex-col gap-5">
            <h1 className="text-2xl font-bold text-white py-5">
              Start Earning Now🎉
            </h1>
            <p className="text-xl text-white">
              Refer a friend and earn $9* for every successful referral—no
              limits, no catch, just extra cash while you're on the path to your
              dream job.
            </p>
            <p className="text-xl text-red-600">
              To Get Referral Link, Login First!
            </p>
            <button className="flex flex-start">
              <a href="/signIn" className="text-white">
                Login
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Referral;
