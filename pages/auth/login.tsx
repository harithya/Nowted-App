/* eslint-disable @next/next/no-img-element */
import AuthLayout from "@/components/Layout/AuthLayout";
import MainLayout from "@/components/Layout/MainLayout";
import { LockClosedIcon, UserIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React, { ReactElement } from "react";

const Login = () => {
  return (
    <div className="mt-10 space-y-5">
      <div className="form-control">
        <label className="font-semibold">Email</label>
        <input
          className="input input-bordered w-full"
          placeholder="example@gmail.com"
        />
      </div>
      <div className="form-control">
        <div className="flex justify-between">
          <label className="font-semibold">Password</label>
          <label className="font-medium">Forget Password ?</label>
        </div>
        <input className="input input-bordered w-full" placeholder="****" />
      </div>
      <div className="form-control ">
        <label className="label cursor-pointer flex-row-reverse justify-end">
          <span className="font-medium ml-5">Remember me</span>
          <input
            type="checkbox"
            checked
            className="checkbox checkbox-primary"
          />
        </label>
      </div>
      <div className="space-y-5">
        <button className="btn btn-info w-full text-lg capitalize">
          Sign In
        </button>
        <div className="flex justify-center items-center space-x-3">
          <label className="text-gray-400">Dont have an account yet?</label>
          <Link href="/auth/register" className="font-bold">
            Register now
          </Link>
        </div>
      </div>
    </div>
  );
};

Login.getLayout = (page: ReactElement) => (
  <AuthLayout
    title="Masuk ke akun kamu"
    subtitle="Remember everything and tackle any project with your notes, tasks, and schedule all in one place."
  >
    {page}
  </AuthLayout>
);

export default Login;
