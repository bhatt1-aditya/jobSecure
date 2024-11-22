import React from "react";
import Navbar from "../navbar/Navbar";
import About from "../about/About";
import Footer from "../footer/Footer";
import Mission from "../mission/Mission";
import Team from "../team/Team";

function AboutUs() {
  return (
    <div>
      <Navbar />
      <About />
      <Mission />
      {/* <Team /> */}
      <Footer />
    </div>
  );
}

export default AboutUs;
