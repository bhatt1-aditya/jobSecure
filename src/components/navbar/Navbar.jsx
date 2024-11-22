import React, { useState } from "react";
import Logo from "../../../public/images/logo.svg";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from "react-router-dom";
function Navbar() {
  let [menu, setMenu] = useState(false);
  let handleMenu = () => {
    setMenu(!menu);
  };
  return (
    <div className="">
      <nav className="flex justify-between  bg-[#0b1355] items-center lg:px-40 px-5 py-5  ">
        <img
          src={Logo}
          alt="image is missing"
          height={160}
          width={160}
          className=" bg-[#070d45] rounded-lg  relative lg:-ml-28 md:ml-4 sm:ml-8 ml-12 object-cover"
        />
        <ul className="lg:flex gap-14 hidden">
          <li className="text-gray-300 text-base font-medium cursor-pointer">
            <NavLink to="/"> Home</NavLink>
          </li>
          <li className="text-gray-300 text-base font-medium cursor-pointer">
            <NavLink to="/aboutUs"> About</NavLink>
          </li>
          <li className="text-gray-300 text-base font-medium cursor-pointer">
            <NavLink to="/policy"> Policy</NavLink>
          </li>
          <li className="text-gray-300 text-base font-medium cursor-pointer">
            <NavLink to="/contactUs"> Contact</NavLink>
          </li>
          <li className="text-gray-300 text-base font-medium cursor-pointer">
            <NavLink to="/referal"> Referral</NavLink>
          </li>
        </ul>
        {menu ? (
          <div>
            <RxCross2
              className="lg:hidden block text-white text-5xl"
              onClick={handleMenu}
            />
            <nav className="  top-[143px] absolute lg:hidden">
              <ul className=" left-0 right-0 fixed h-full bg-white pt-[100px] items-center flex flex-col gap-10">
                <li className="text-black text-3xl font-medium">Home</li>
                <li className="text-black text-3xl font-medium">About</li>
                <li className="text-black text-3xl font-medium">Policy</li>
                <li className="text-black text-3xl font-medium">Contact</li>
                <li className="text-black text-3xl font-medium">Referral</li>
              </ul>
            </nav>
          </div>
        ) : (
          <IoMdMenu
            className="lg:hidden block text-white text-5xl"
            onClick={handleMenu}
          />
        )}
      </nav>
    </div>
  );
}

export default Navbar;
