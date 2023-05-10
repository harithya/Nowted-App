import MainLayout from "@/components/Layout/MainLayout";
import { LockClosedIcon, UserIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React, { ReactElement } from "react";

const Login = () => {
  return (
    <div className="h-screen w-screen px-10 lg:px-0 bg-black flex justify-center items-center">
      <div className="lg:w-4/12 w-full p-10 space-y-14   rounded-md shadow-lg bg-base-300 flex flex-col items-center ">
        <Image
          src={"/img/logo.png"}
          height={150}
          width={150}
          alt="Logo App"
          className="object-contain"
        />

        <form className="w-full space-y-5">
          <div className="relative flex">
            <UserIcon className="h-6 w-6 absolute bottom-3 left-5 text-neutral" />
            <input
              className="input input-bordered w-full pl-16"
              placeholder="Username"
            />
          </div>
          <div className="relative flex">
            <LockClosedIcon className="h-6 w-6 absolute bottom-3 left-5 text-neutral" />
            <input
              className="input input-bordered w-full pl-16"
              placeholder="Password"
            />
          </div>
          <div className="flex justify-between items-center py-0">
            <div className="form-control">
              <label className="label cursor-pointer justify-start space-x-5">
                <input type="checkbox" className="checkbox checkbox-primary" />
                <span className="text-sm text-gray-500">Remember me</span>
              </label>
            </div>
            <a href="#" className="text-sm text-info">
              Forget Password
            </a>
          </div>

          <button className="btn btn-primary capitalize w-full">Log In</button>
          <div className="flex justify-center items-center">
            <label className="text-sm">
              Dont have an account ?{" "}
              <a href="#" className="ml-2 font-semibold text-info">
                Create One !
              </a>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

Login.getLayout = (page: ReactElement) => <div>{page}</div>;

export default Login;
