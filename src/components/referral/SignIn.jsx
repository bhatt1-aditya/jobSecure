import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
function SignIn() {
  const notify = () => {
    toast.success("login successful");
  };
  return (
    <>
      <Navbar />
      <div className="h-screen w-full bg-[#0b1355] lg:px-44 px-10 pt-[143px]">
        <div className=" flex flex-col gap-20">
          <h1 className="text-center text-white lg:text-7xl md:text-6xl sm:text-5xl text-4xl font-bold px-10 mt-28">
            Sign In
          </h1>
          <div className="flex gap-10 w-full">
            <div className="w-1/2  text-white">
              <h1 className="text-3xl font-bold mb-5 ">
                Get your Dream Job with Us
              </h1>
              <p className="">
                Land your perfect job with ease! Try Job Form Automator today!
              </p>
            </div>
            <div className="w-1/2 flex flex-col gap-5">
              <input className=" p-4 rounded-lg" placeholder="email" />
              <input className=" p-4 rounded-lg" placeholder="password" />
              <button
                className="bg-black text-white font-bold w-1/2 py-3 px-3 rounded-lg hover:text-black hover:bg-white transition-all duration-500"
                onClick={notify}
              >
                Sign In
              </button>

              <span className=" text-white font-bold w-1/2">
                Don't have an account? <NavLink to="/signup">Sign Up</NavLink>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SignIn;
