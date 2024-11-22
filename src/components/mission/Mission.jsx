import React from "react";

function Mission() {
  return (
    <div className="h-screen w-full bg-[#0b1355]">
      <div className="flex justify-between    lg:px-40 px-10">
        <div className="w-1/2 flex flex-col text-start lg:px-28">
          <h1 className="text-white font-bold text-2xl pb-10">Our Mission</h1>
          <p className="text-white text-xl">
            To revolutionize the job application process by empowering job
            seekers with AI-driven automation, enabling them to focus on what
            truly matters. We believe in making change happen. Our mission is to
            eliminate the repetitive tasks in job hunting, allowing you to apply
            to thousands of jobs across leading platforms like LinkedIn, Indeed,
            and Monster. With our AI job search assistant, you can efficiently
            manage your applications, reduce errors, and save valuable time.
            We're dedicated to continuous innovation, ensuring our platform
            meets the evolving needs of today's job seekers.
          </p>
        </div>
        <div className="w-1/2 flex flex-col text-start lg:px-28">
          <h1 className="text-white font-bold text-2xl pb-5">Our Values</h1>
          <ul className="flex flex-col gap-5 text-xl text-white">
            <li>
              ⁠🚀 Innovation We constantly push the boundaries of AI technology
              to offer a unique and remarkable tool that stands out in the
              crowded marketplace.
            </li>
            <li>
              ⏱ Efficiency Your time is valuable. Our goal is to save you hours
              by automating tedious tasks, so you can focus on preparing for
              interviews and honing your skills.
            </li>
            <li>
              🤝 User-Centricity You're at the heart of everything we do. We
              build our tool with you in mind, ensuring it's intuitive,
              reliable, and tailored to meet your needs.
            </li>
            <li>
              🌐 Integrity Transparency and ethical practices are the
              cornerstones of our operations. You can trust us to provide a fair
              and honest service.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Mission;
