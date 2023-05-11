/* eslint-disable @next/next/no-img-element */
import LandingLayout from "@/components/Layout/LandingLayout";
import RadialContent from "@/components/Layout/Radial/RadialContent";
import Image from "next/image";
import React, { ReactElement } from "react";

const Landing = () => {
  return (
    <div className="mt-20 h-full ">
      <div className="flex flex-col justify-center items-center sticky z-50">
        <h1 className="text-center text-4xl leading-relaxed font-light text-white">
          Boost your productivity with our{" "}
          <span className="font-medium">streamlined</span>
          <br /> <span className="font-medium">note-taking</span> solution
        </h1>
        <p className="text-center mt-5 text-lg text-white/60">
          Effortlessly access your notes from any device with our
          <br /> convenient cloud-based solution.
        </p>
        <button
          className="btn btn-info mt-8 cursor-pointer"
          onClick={() => alert("oke")}
        >
          <label className="capitalize  text-white">Try For Free</label>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </button>
      </div>
      <div className="mt-20 relative w-full h-full">
        <RadialContent />
        <div className="sticky z-30">
          <img src="/bg.png" className="w-full " alt="Cover Image" />
        </div>
      </div>
    </div>
  );
};

Landing.getLayout = (page: ReactElement) => (
  <LandingLayout>{page}</LandingLayout>
);

export default Landing;
