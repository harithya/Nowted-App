import { title } from "process";
import React, { PropsWithChildren } from "react";

interface Props {
  title: string;
  subtitle: string;
}
const AuthLayout: React.FC<PropsWithChildren<Props>> = ({
  children,
  title,
  subtitle,
}) => {
  return (
    <div className="h-full w-full bg-[url('/img/bg.jpg')] bg-linear flex">
      <div className="lg:w-6/12 h-screen z-50 lg:p-28 p-10 flex flex-col justify-center">
        <div>
          <h1 className="text-4xl font-bold text-white">{title}</h1>
          <p className="mt-5 text-lg text-gray-400">{subtitle}</p>
        </div>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
