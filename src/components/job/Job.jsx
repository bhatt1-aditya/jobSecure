import React from "react";
import { CiStopwatch } from "react-icons/ci";
import { ImArrowUp } from "react-icons/im";
import { FaUsersLine } from "react-icons/fa6";
import { FaHandshakeSimple } from "react-icons/fa6";
function Job() {
  const items = [
    {
      id: "1",
      icons: <CiStopwatch />,
      title: "Save Time",
      description:
        "Stop spending hours on repetitive applications. Automate the process and focus on what truly matters",
    },
    {
      id: "2",
      icons: <ImArrowUp />,
      title: "Apply 10x",
      description:
        "Target your niche and apply to more relevant jobs effortlessly.",
    },
    {
      id: "3",
      icons: <FaUsersLine />,
      title: "More Interview",
      description:
        "By being among the first applicants, you increase your chances of getting noticed.",
    },
    {
      id: "4",
      icons: <FaHandshakeSimple />,
      title: "More Offers",
      description:
        "More applications lead to more interviews, which lead to more job offers.",
    },
  ];
  return (
    <div className="h-screen w-full bg-[#0b1355] ">
      <div className="flex flex-col justify-center items-center h-full lg:px-40 px-10 ">
        <h1 className="text-center text-white lg:text-7xl md:text-6xl sm:text-5xl text-4xl font-bold lg:px-40  ">
          See JobForm Automator in Action
        </h1>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 py-10 lg:px-40 px-10 gap-5 mb-10">
          {items.map((item) => {
            return (
              <div
                className="flex flex-col bg-black text-white rounded-lg gap-5 p-5"
                key={item.id}
              >
                <h1 className="text-5xl ">{item.icons}</h1>
                <h1 className="text-xl uppercase font-bold">{item.title}</h1>
                <p className="font-bold">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Job;
