import React from "react";
import Navbar from "../navbar/Navbar";
import DreamJob from "../dreamJob/DreamJob";
import Video from "../video/Video";
import Job from "../job/Job";
import Offer from "../offer/Offer";
import Story from "../story/Story";
import Footer from "../footer/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <DreamJob />
      <Video />
      <Job />
      <Offer />
      <Story />
      <Footer />
    </div>
  );
}

export default Home;
