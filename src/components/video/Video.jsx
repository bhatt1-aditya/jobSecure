import React from "react";
import ReactPlayer from "react-player";
function Video() {
  return (
    <div className="h-screen w-full ">
      <div className="bg-[#0b1355] flex flex-col justify-center items-center h-full w-full  px-10 py-10">
        <h1 className="text-center text-white lg:text-7xl md:text-6xl sm:text-5xl text-4xl font-bold  ">
          See JobForm Automator in Action
        </h1>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=z6JgvamQCb0"
          height="100%"
          width="100%"
          className="lg:px-40 px-10 py-5  rounded-lg object-scale-down"
        />
      </div>
    </div>
  );
}

export default Video;
