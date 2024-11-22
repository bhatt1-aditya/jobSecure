import React from "react";
import { FaUserShield } from "react-icons/fa6";
function Story() {
  const items = [
    {
      description:
        "JobForm Automator didn't just save me time; it transformed my job search experience.",
      icon: <FaUserShield />,
      heading: "Godchoice Bright",
      subheading: "Human Resources Manager",
    },
    {
      description:
        "I landed interviews at companies I thought were out of reach. This tool is a game-changer.",
      icon: <FaUserShield />,
      heading: "Adão",
      subheading: "Job Seeker",
    },
    {
      description:
        "he efficiency and ease are unparalleled. It's like having a personal assistant for my job hunt.",
      icon: <FaUserShield />,
      heading: "Aditya Verma",
      subheading: "Software Engineer",
    },

    {
      description:
        "JobForm Automator didn't just save me time; it transformed my job search experience.",
      icon: <FaUserShield />,
      heading: "Arun Kumar",
      subheading: "Software Testing Engineer",
    },
  ];
  return (
    <div className="h-screen w-full bg-[#0b1355] ">
      <div className="flex flex-col justify-center items-center h-screen lg:px-40 px-10">
        <h1 className="text-center text-white lg:text-7xl md:text-6xl sm:text-5xl text-4xl font-bold lg:px-40  py-10">
          Real Stories from Our Tribe
        </h1>
        <div className="grid grid-cols-2 gap-5">
          {items.map((item) => {
            return (
              <div className=" bg-black text-white flex flex-col gap-5 rounded-lg p-10">
                <p className="text-xl">{item.description}</p>
                <div className="flex  items-center gap-5">
                  <h1 className="text-3xl">{item.icon}</h1>
                  <div>
                    <p className="text-xl font-bold">{item.heading}</p>
                    <p>{item.subheading}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Story;
