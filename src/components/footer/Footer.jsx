import React from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import logo from "../../../public/images/logo.svg";
function Footer() {
  return (
    <div className=" w-full">
      <div className="flex justify-between bg-[#0b0f31] h-full lg:px-12 px-10 py-10  w-full">
        <div className="flex flex-col gap-5">
          <img
            src={logo}
            alt="image is missing"
            height={120}
            width={120}
            className="bg-gray-700 rounded-lg"
          />
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              {" "}
              <h1 className="text-white text-xl font-bold">Email</h1>
              <p className="text-white text-base font-bold">
                contact@jobformautoator.com
              </p>
            </div>
            <div className="flex flex-col gap-3">
              {" "}
              <h1 className="text-white text-xl font-bold">Whatsapp</h1>
              <p className="text-white text-base font-bold">+91 9766116839</p>
            </div>
            <div className="flex flex-col gap-3">
              {" "}
              <h1 className="text-white text-xl font-bold">Address</h1>
              <p className="text-white text-base font-bold">
                Flat No.116, Sairpark Building, AP Alephata, Maharashtra 412411
              </p>
            </div>
          </div>
        </div>
        <div className="font-bold text-white">
          © 2022 Aiking Software Solutions Pvt Ltd
        </div>
        <div>
          <ul className="flex gap-5 text-4xl text-white">
            <li>
              <IoLogoInstagram />
            </li>
            <li>
              <FaFacebook />
            </li>
            <li>
              <FaLinkedin />
            </li>
            <li>
              <FaYoutube />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
