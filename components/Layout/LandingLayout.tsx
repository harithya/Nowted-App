import Image from "next/image";
import React, { PropsWithChildren } from "react";
import RadialTop from "./Radial/RadialTop";
import Link from "next/link";

const LandingLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-base-300 ">
      <div className="py-10 lg:px-56  px-10 flex z-50 justify-between items-center sticky ">
        <div className="h-12 lg:w-28 w-32 ">
          <Image
            src={"/img/logo.png"}
            height={50}
            width={120}
            alt="Logo App"
            className="h-full w-full object-contain"
          />
        </div>
        <div className="lg:flex hidden space-x-10">
          <a href="#" className="text-white font-semibold">
            Home
          </a>
          <a href="#" className="text-white/80">
            Product
          </a>
          <a href="#" className="text-white/80">
            Support
          </a>
          <a href="#" className="text-white/80">
            Contact Us
          </a>
        </div>
        <Link
          href={"/auth/login"}
          className="btn cursor-pointer btn-primary  capitalize"
        >
          Login Now
        </Link>
      </div>
      <div className="lg:px-56 px-10 h-full pb-20">{children}</div>
      <RadialTop />
    </div>
  );
};

export default LandingLayout;
